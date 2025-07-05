// src/components/Certifications.jsx

import React, { useState, useMemo, useEffect, useRef } from 'react'; // Importation de useRef
import { certificationsData, getProviderIcon } from '../data/certifications';
import translations from '../assets/translations';

const Certifications = ({ currentLang }) => {
    const certsPerPage = 12; // Nombre d'attestations par page
    const [currentPage, setCurrentPage] = useState(1);
    const [filterProvider, setFilterProvider] = useState('All');
    const [filterCategory, setFilterCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState('importance_desc'); // Tri par défaut par importance (décroissant)
    const [selectedCert, setSelectedCert] = useState(null); // Pour la modal
    const modalOverlayRef = useRef(null); // Référence à l'élément modal-overlay

    // Extraire les fournisseurs et catégories uniques pour les filtres déroulants
    const uniqueProviders = useMemo(() => {
        const providers = new Set(certificationsData.map(cert => cert.provider));
        return ['All', ...Array.from(providers).sort()];
    }, []);

    const uniqueCategories = useMemo(() => {
        const categories = new Set(certificationsData.map(cert => cert.category));
        return ['All', ...Array.from(categories).sort()];
    }, []);

    // Traitement des certifications (filtrage et tri)
    const processedCertifications = useMemo(() => {
        let filtered = certificationsData;

        // Appliquer le filtre par fournisseur
        if (filterProvider !== 'All') {
            filtered = filtered.filter(cert => cert.provider === filterProvider);
        }

        // Appliquer le filtre par catégorie
        if (filterCategory !== 'All') {
            filtered = filtered.filter(cert => cert.category === filterCategory);
        }

        // Appliquer le tri
        filtered.sort((a, b) => {
            switch (sortOrder) {
                case 'importance_desc':
                    return b.importance_score - a.importance_score;
                case 'importance_asc':
                    return a.importance_score - b.importance_score;
                case 'title_az':
                    return a.title.localeCompare(b.title);
                case 'title_za':
                    return b.title.localeCompare(a.title);
                case 'date_newest':
                    // Convertir la date DD/MM/YYYY en objet Date pour le tri
                    const dateA = new Date(a.date.split('/').reverse().join('-'));
                    const dateB = new Date(b.date.split('/').reverse().join('-'));
                    return dateB - dateA; // Plus récent en premier
                case 'date_oldest':
                    const dateA_ = new Date(a.date.split('/').reverse().join('-'));
                    const dateB_ = new Date(b.date.split('/').reverse().join('-'));
                    return dateA_ - dateB_; // Plus ancien en premier
                case 'provider_az':
                    return a.provider.localeCompare(b.provider);
                case 'provider_za':
                    return b.provider.localeCompare(a.provider);
                default:
                    return 0; // Aucun tri par défaut si non spécifié
            }
        });

        // Pour regrouper par fournisseur, on trie d'abord par fournisseur, puis par importance
        // Cela garantit que les certifications d'une même organisation sont adjacentes
        filtered.sort((a, b) => a.provider.localeCompare(b.provider) || b.importance_score - a.importance_score);

        return filtered;
    }, [filterProvider, filterCategory, sortOrder]);

    // Logique de pagination
    const totalPages = Math.ceil(processedCertifications.length / certsPerPage);
    const startIndex = (currentPage - 1) * certsPerPage;
    const endIndex = startIndex + certsPerPage;
    const currentCerts = processedCertifications.slice(startIndex, endIndex);

    // Réinitialiser la page à 1 lorsque les filtres ou le tri changent
    useEffect(() => {
        setCurrentPage(1);
    }, [filterProvider, filterCategory, sortOrder, processedCertifications.length]);

    // Fonctions de la modal
    const openModal = (cert) => {
        setSelectedCert(cert);
        document.body.style.overflow = 'hidden'; // Empêcher le défilement du fond
    };

    const closeModal = () => {
        setSelectedCert(null);
        // Le useEffect ci-dessous gérera la suppression de la classe 'active'
        document.body.style.overflow = 'auto'; // Réactiver le défilement
    };

    // EFFET POUR AJOUTER/SUPPRIMER LA CLASSE 'active' SUR LA MODAL OVERLAY
    useEffect(() => {
        if (modalOverlayRef.current) {
            if (selectedCert) {
                // Utiliser un petit délai pour s'assurer que l'élément est rendu dans le DOM
                // avant d'ajouter la classe 'active'. Cela permet à la transition CSS de fonctionner.
                const timer = setTimeout(() => {
                    modalOverlayRef.current.classList.add('active');
                }, 10); // Un très léger délai (10ms généralement suffisant)
                return () => clearTimeout(timer); // Nettoyer le timeout si le composant est démonté rapidement
            } else {
                // Lorsque selectedCert est null, retirer la classe 'active' immédiatement
                modalOverlayRef.current.classList.remove('active');
            }
        }
    }, [selectedCert]); // Cet effet s'exécute lorsque selectedCert change

    // Fermer la modal avec la touche Échap
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        // Ajouter/supprimer l'écouteur seulement si la modal est potentiellement ouverte
        if (selectedCert) {
            window.addEventListener('keydown', handleEscape);
        } else {
            window.removeEventListener('keydown', handleEscape);
        }
        return () => { // Fonction de nettoyage pour supprimer l'écouteur
            window.removeEventListener('keydown', handleEscape);
        };
    }, [selectedCert]); // Dépendance à selectedCert

    return (
        <section id="certifications" className="certifications">
            <div className="container">
                <h2 className="section-title">{translations.certifications_title[currentLang]}</h2>

                <div className="cert-controls">
                    <div className="filter-group">
                        <label htmlFor="provider-filter">{translations.filter_by_provider[currentLang]}:</label>
                        <select
                            id="provider-filter"
                            value={filterProvider}
                            onChange={(e) => setFilterProvider(e.target.value)}
                        >
                            {uniqueProviders.map(provider => (
                                <option key={provider} value={provider}>{provider}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label htmlFor="category-filter">{translations.filter_by_category[currentLang]}:</label>
                        <select
                            id="category-filter"
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                        >
                            {uniqueCategories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label htmlFor="sort-order">{translations.sort_by[currentLang]}:</label>
                        <select
                            id="sort-order"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="importance_desc">{translations.sort_importance_desc[currentLang]}</option>
                            <option value="title_az">{translations.sort_title_az[currentLang]}</option>
                            <option value="title_za">{translations.sort_title_za[currentLang]}</option>
                            <option value="date_newest">{translations.sort_date_newest[currentLang]}</option>
                            <option value="date_oldest">{translations.sort_date_oldest[currentLang]}</option>
                            <option value="provider_az">{translations.sort_provider_az[currentLang]}</option>
                            <option value="provider_za">{translations.sort_provider_za[currentLang]}</option>
                        </select>
                    </div>
                </div>

                {processedCertifications.length === 0 ? (
                    <p className="no-results">{translations.no_certifications_found[currentLang]}</p>
                ) : (
                    <>
                        <div className="cert-grid">
                            {currentCerts.map((cert, index) => (
                                <div key={index} className="cert-item" onClick={() => openModal(cert)}>
                                    <i className={`${getProviderIcon(cert.provider)} cert-provider-icon`}></i>
                                    <h3>{cert.title}</h3>
                                    <p className="cert-provider">{cert.provider}</p>
                                    <p className="cert-date">{cert.date}</p>
                                    {cert.confirmation && (
                                        <a
                                            href={cert.confirmation}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cert-confirmation-link"
                                            onClick={(e) => e.stopPropagation()} // Empêche l'ouverture de la modal si on clique sur le lien
                                        >
                                            {translations.view_confirmation[currentLang]} <i className="fas fa-external-link-alt"></i>
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="pagination">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {/* Modal de la certification */}
                {/* Rendre la modal uniquement si selectedCert n'est pas null */}
                {selectedCert && (
                    <div className="modal-overlay" ref={modalOverlayRef} onClick={closeModal}> {/* ATTRIBUER LA REF ICI */}
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close-btn" onClick={closeModal}>
                                <i className="fas fa-times"></i>
                            </button>
                            <img src={selectedCert.image} alt={selectedCert.title} className="modal-cert-image" />
                            <div className="modal-cert-details">
                                <h3>{selectedCert.title}</h3>
                                <p><strong>{translations.provider[currentLang]}:</strong> {selectedCert.provider}</p>
                                <p><strong>{translations.date_obtained[currentLang]}:</strong> {selectedCert.date}</p>
                                {selectedCert.confirmation && (
                                    <a
                                        href={selectedCert.confirmation}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        {translations.view_confirmation[currentLang]} <i className="fas fa-external-link-alt"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certifications;