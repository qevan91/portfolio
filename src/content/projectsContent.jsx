const WazeContent = () => (
    <>
        <p className="detail-text">
            Ce projet s'inscrit dans le programme <strong>Connected Citizens</strong> de Waze, un échange de données
            entre les collectivités et Waze pour améliorer la sécurité et la gestion du réseau routier.
        </p>
        <p className="detail-text" style={{marginBottom: '2.5rem'}}>
            L'outil <em><strong>Grand Paris Sud x Waze</strong></em> permet aux élus et agents de visualiser la
            congestion sur les 23 communes de l'agglomération de Grand Paris Sud.
        </p>

        <h3 className="detail-section-title">Architecture Data Lake (Médaillon)</h3>
        <ul className="medallion-list">
            <li className="medallion-item bronze">
                <strong style={{color: '#cd7f32'}}>1. Bronze (Données Brutes)</strong>
                Données extraites de l'API de l'Open Data Grand Paris Sud via <code>fetch_api.py</code>.
            </li>
            <li className="medallion-item silver">
                <strong style={{color: '#7f8c8d'}}>2. Argent (Données Nettoyées)</strong>
                Filtrage géographique, normalisation et traitement des valeurs aberrantes.
            </li>
            <li className="medallion-item gold">
                <strong style={{color: '#d4af37'}}>3. Gold (Données Métiers)</strong>
                Analyse de trafic et calcul du score de nuisance par rue.
            </li>
        </ul>

        <h3 className="detail-section-title">Documentation Technique</h3>
        <div className="tech-doc-grid">
            <div className="tech-doc-card">
                <h4>1. Ingestion</h4>
                <ul className="tech-doc-list">
                    <li>Authentification via clé API (<code>.env</code>).</li>
                    <li>Requêtes SQL-like pour filtrage temporel.</li>
                </ul>
            </div>
            <div className="tech-doc-card">
                <h4>2. Nettoyage</h4>
                <ul className="tech-doc-list">
                    <li>Filtre sur les 23 communes de la CA de Grand Paris Sud.</li>
                    <li>Normalisation (accents/minuscules).</li>
                </ul>
            </div>
            <div className="tech-doc-card">
                <h4>3. Scoring</h4>
                <ul className="tech-doc-list">
                    <li>Log-transformation via <code>np.log1p</code>.</li>
                    <li>Normalisation sur échelle 0 à 100.</li>
                </ul>
            </div>
            <div className="tech-doc-card">
                <h4>4. Cartographie</h4>
                <ul className="tech-doc-list">
                    <li>Folium pour le tracé des segments.</li>
                    <li>Infobulles et filtres dynamiques.</li>
                </ul>
            </div>
        </div>

        <h3 className="detail-section-title" style={{border: 'none'}}>Restitution Géographique</h3>

        <figure className="project-figure">
            <img
                src={`${import.meta.env.BASE_URL}images/Grand_Paris_Sud-x-Waze_Evry_Exemple.jpg`}
                alt="Détail d'un Point Noir" className="project-img"
            />
            <figcaption className="project-caption">Extrait d'un Zoom sur la congestion de la commune d'Évry-Courcouronnes. Image privée autorisée à être partagée au grand public.</figcaption>
        </figure>

        <div className="project-footer">
            <div style={{flex: '1 1 300px'}}>
                <h3 className="section-label" style={{marginBottom: '1rem'}}>Stack Technique</h3>
                <div className="hero-tags">
                    <span className="tag">Python</span>
                    <span className="tag">Pandas</span>
                    <span className="tag">NumPy</span>
                    <span className="tag">Folium</span>
                    <span className="tag">Data Lake (Médaillon)</span>
                </div>
            </div>
            <div className="btn-group">
                <a href="https://data.grandparissud.fr/" target="_blank" rel="noreferrer" className="btn-source">Source
                    Open Data</a>
                <a href="https://github.com/qevan91/Grand-Paris-Sud-x-Waze" target="_blank" rel="noreferrer"
                   className="btn-github">GitHub Repo →</a>
            </div>
        </div>
    </>
);

const ScoutingContent = () => (
    <div className="detail-text">
        <p style={{fontSize: '1.1rem', marginBottom: '2rem'}}>
            Projet toujours en cours de développement.
        </p>
    </div>
);

// OCR Grand Paris Sud
const OcerisationsContent = () => (
    <>
        <h2 className="detail-section-title" style={{ marginTop: 0 }}>Vue d'ensemble</h2>
        <p className="detail-text">
            Conception d'un pipeline ETL pour le traitement d'actes administratifs. Extraction OCR via <strong>Mistral AI</strong>, chunking optimisé pour la limite d'un token, automatisation du stockage des textes dans un CSV sur un FTP, intégration d'un système de vérification d'ID pour éviter le traitement redondant des fichiers déjà indexés et océrisés.
        </p>

        <figure className="project-figure">
            <img
                src={`${import.meta.env.BASE_URL}images/Pages-Actes_Administratifs-Grand_Paris_Sud-.jpg`}
                alt="Interface de recherche des actes administratifs sur le portail Open Data"
                className="project-img"
            />
            <figcaption className="project-caption">Interface de recherche moteur Full-Text</figcaption>
        </figure>

        <h3 className="detail-section-title">Architecture et Composants</h3>

        <div className="tech-doc-grid">
            <div className="tech-doc-card">
                <h4 style={{color: 'var(--accent)'}}>Pre-Processing</h4>
                <ul className="tech-doc-list">
                    <li><strong>Injection Visuelle :</strong> Utilisation de <code>fitz (PyMuPDF)</code> notamment pour
                        insérer le Watermarking "Mis en ligne le..." (Obligation légale).
                    </li>
                    <li><strong>Métadonnées :</strong> Récupération de la date système du PDF sur le FTP.</li>
                    <li><strong>Contrôle :</strong> Gestion des doublons grâce à un JSON.</li>
                </ul>
            </div>

            <div className="tech-doc-card">
                <h4 style={{color: 'var(--accent)'}}>Pipeline OCR</h4>
                <ul className="tech-doc-list">
                    <li><strong>Chunking :</strong> Segmentation via <code>PyPDF2</code> par blocs de 8 pages pour
                        optimiser l'API.
                    </li>
                    <li><strong>IA Mistral :</strong> Utilisation de <code>mistral-ocr-lastest</code> pour extraire le
                        texte du PDF.
                    </li>
                    <li><strong>Contrôle :</strong> Gestion des doublons grâce à un JSON.</li>
                </ul>
            </div>
        </div>

        <figure className="project-figure" style={{maxWidth: '600px', margin: '2rem auto'}}>
            <img
                src={`${import.meta.env.BASE_URL}images/PDFs_Image_Exemple.jpg`}
                alt="Exemple de PDF avec bannière injectée via Python"
                className="project-img"
            />
            <figcaption className="project-caption">Exemple de PDF image avec Watermarking temporelle injecté
                dynamiquement
            </figcaption>
        </figure>

        <div className="tech-doc-card" style={{marginBottom: '3rem'}}>
            <h4 style={{color: 'var(--accent)'}}>3. Restitution Frontend (AngularJS / ODS)</h4>
            <p className="detail-text" style={{ fontSize: '0.85rem' }}>
                Développement de templates au sein de l'espace Open Data de Grand Paris Sud.
            </p>
            <ul className="tech-doc-list">
                <li>Recherche Full-Text sur le contenu océrisé par Mistral AI.</li>
                <li>Filtres à facettes dynamiques (Instance, Type et Nom de Matière).</li>
                <li>Visualisation détaillée permettant la consultation directe du texte extrait.</li>
            </ul>
        </div>

        <figure className="project-figure">
            <img
                src={`${import.meta.env.BASE_URL}images/Pages-Details-Actes_Administratifs-Grand_Paris_Sud-.jpg`}
                alt="Vue détaillée d'un acte avec le texte extrait"
                className="project-img"
            />
            <figcaption className="project-caption">Vue détaillée, affichage du texte extrait par l'océrisation</figcaption>
        </figure>

        <div className="project-footer">
            <div style={{ flex: '1 1 300px' }}>
                <h3 className="section-label" style={{ marginBottom: '1rem' }}>Stack Technique</h3>
                <div className="hero-tags">
                    <span className="tag">Python</span>
                    <span className="tag">Mistral AI Agent OCR</span>
                    <span className="tag">Pipeline</span>
                    <span className="tag">Unicodedata</span>
                    <span className="tag">PyMuPDF</span>
                    <span className="tag">FTPLIB</span>
                    <span className="tag">AngularJS</span>
                    <span className="tag">HTML</span>
                </div>
            </div>
        </div>
    </>
);

// PokeBouk
const PokeboukContent = () => (
    <>
        <h2 className="detail-section-title" style={{ marginTop: 0 }}>Vue d'ensemble</h2>
        <p className="detail-text">
            Plateforme web complète conçue à l'origine pour accompagner un serveur Minecraft communautaire lié à une chaîne Twitch. L'objectif principal était de concevoir une boutique, un Wiki collaboratif, et d'automatiser de A à Z la gestion de tournois in-game.
        </p>
        <p className="detail-text" style={{ marginBottom: '2.5rem' }}>
            Fin des arbres de tournoi gérés à la main sur Excel et sur papier. La plateforme s'occupe de tout, de l'inscription jusqu'au couronnement du vainqueur, avec un bracket (arbre d'élimination) consultable par tous en temps réel.
        </p>

        <h3 className="detail-section-title">Fonctionnalités Clés</h3>

        <div className="tech-doc-grid">
            <div className="tech-doc-card">
                <h4 style={{ color: 'var(--accent)' }}>Moteur de Tournois Automatisé</h4>
                <ul className="tech-doc-list">
                    <li><strong>Formats :</strong> Gestion complète des BO1, BO3, et BO5.</li>
                    <li><strong>Smart Byes :</strong> Algorithme calculant automatiquement les victoires par forfait si le nombre de joueurs n'est pas une puissance de 2, afin d'équilibrer le bracket.</li>
                    <li><strong>Progression Dynamique :</strong> Entrée des scores et avancement automatique au round suivant.</li>
                </ul>
            </div>

            <div className="tech-doc-card">
                <h4 style={{ color: 'var(--accent)' }}>Authentification & Admin</h4>
                <ul className="tech-doc-list">
                    <li><strong>OAuth Twitch :</strong> Connexion directe et liaison sécurisée avec le pseudo Minecraft in-game lors du premier login.</li>
                    <li><strong>Panel Administrateur :</strong> Back-office complet pour gérer les articles, expulser des joueurs, lancer les arbres et éditer les scores en direct.</li>
                </ul>
            </div>

            <div className="tech-doc-card">
                <h4 style={{ color: 'var(--accent)' }}>Wiki & Boutique</h4>
                <ul className="tech-doc-list">
                    <li><strong>Wiki :</strong> Création de guides en Markdown (via <code>marked</code>) avec gestion d'images et intégration vidéo YouTube.</li>
                    <li><strong>Boutique :</strong> Intégration backend via CraftingStore pour les paiements réels et la distribution automatique des récompenses en jeu.</li>
                </ul>
            </div>
        </div>

        <div className="project-footer" style={{marginTop: '3rem'}}>
            <div style={{flex: '1 1 300px'}}>
                <h3 className="section-label" style={{marginBottom: '1rem'}}>Stack Technique</h3>
                <div className="hero-tags">
                    <span className="tag">Supabase</span>
                    <span className="tag">PostgreSQL</span>
                    <span className="tag">Vue.js 3</span>
                    <span className="tag">TypeScript</span>
                    <span className="tag">Vite</span>
                </div>
            </div>
            <div className="btn-group">
                <a href="https://pokebouk.fr" target="_blank" rel="noreferrer"
                   className="btn-github">
                    Site Web
                </a>
            </div>
            <div className="btn-group">
                <a href="https://github.com/qevan91/pokebouk-shop" target="_blank" rel="noreferrer"
                   className="btn-github">
                    Répo GitHub Privé
                </a>
            </div>
        </div>
    </>
);

export const projectsData = {
    'grand-paris-sud-waze': {
        title: 'Grand Paris Sud x Waze',
        content: <WazeContent/>
    },
    'scouting-engine': {
        title: 'Scouting Engine',
        content: <ScoutingContent />
    },
    'ocerisations': {
        title: 'Grand Paris Sud ~ Actes Administratifs',
        content: <OcerisationsContent />
    },
    'pokebouk': {
        title: 'PokeBouk',
        content: <PokeboukContent />
    }
};