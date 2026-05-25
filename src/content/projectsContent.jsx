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
    <>
        <h2 className="detail-section-title" style={{ marginTop: 0 }}>Vue d'ensemble</h2>
        <p className="detail-text">
            Conception et développement d'un moteur de recommandation et de scoutisme basé sur la data.
            L'algorithme permet de <strong>prédire les joueurs ayant un profil similaire</strong> à une cible donnée
            (idéal pour remplacer un joueur en partance lors du mercato sans bousculer la tactique de l'équipe)
            et d'identifier des opportunités de <strong>repositionnement tactique</strong> selon les attributs intrinsèques d'un joueur.
        </p>

        <h3 className="detail-section-title">Architecture Data Pipeline (Médaillon)</h3>
        <ul className="medallion-list">
            <li className="medallion-item bronze">
                <strong style={{color: '#cd7f32'}}>1. Bronze (Données Brutes)</strong>
                Collecte et isolation des données brutes multi-sources : flux JSON granulaires issus de <strong>SofaScore</strong> et tables statistiques standards extraites de <strong>FBref</strong>.
            </li>
            <li className="medallion-item silver">
                <strong style={{color: '#7f8c8d'}}>2. Argent (Conformed & Merged)</strong>
                Nettoyage des valeurs manquantes, typage strict, alignement des entités joueurs via un algorithme de réconciliation textuelle (<strong>Fuzzy Matching</strong>) et jointure des deux univers de données.
            </li>
            <li className="medallion-item gold">
                <strong style={{color: '#d4af37'}}>3. Gold (Business / ML Ready)</strong>
                Normalisation volumétrique au prorata du temps de jeu (<strong>Calcul Per 90</strong>), encodage des postes pour le filtrage et structuration des features en 4 grands axes de performance pour le Clustering.
            </li>
        </ul>

        <h3 className="detail-section-title">Ingénierie des Données & Pipeline</h3>
        <div className="tech-doc-grid">
            <div className="tech-doc-card">
                <h4>1. Ingestion & Sources (Bronze)</h4>
                <ul className="tech-doc-list">
                    <li>Multi-sourcing pour pallier le manque de données avancées (SofaScore compense l'absence de passes progressives de FBref standard).</li>
                    <li>Stockage isolé des structures de données hétérogènes (JSON vs Tableur).</li>
                </ul>
            </div>
            <div className="tech-doc-card">
                <h4>2. Nettoyage & Réconciliation (Silver)</h4>
                <ul className="tech-doc-list">
                    <li><strong>Fuzzy Name Resolution :</strong> Algorithme d'alignement pour faire correspondre un joueur dont l'orthographe varie d'une plateforme à l'autre.</li>
                    <li>Gestion stricte des types de données et imputation/filtrage des valeurs `NA`.</li>
                    <li>Jointure consolidée pour créer un profil statistique unique par joueur.</li>
                </ul>
            </div>
            <div className="tech-doc-card">
                <h4>3. Règle d'Or Métier & Feature Engineering (Gold)</h4>
                <ul className="tech-doc-list">
                    <li><strong>Normalisation Per 90 :</strong> Transformation de toutes les statistiques de volume selon la formule mathématique rigoureuse : <br/>
                        <code>Stat_90 = (Stat_brute / Minutes_jouées) * 90</code>.</li>
                    <li>Isolation des variables de filtrage non-linéaires (Âge, Postes détaillés).</li>
                </ul>
            </div>
            <div className="tech-doc-card">
                <h4>4. Modélisation & Clustering (À venir)</h4>
                <ul className="tech-doc-list">
                    <li>Préparation des matrices de features prêtes pour des algorithmes de type K-Means, DBSCAN ou GMM.</li>
                    <li>Segmentation par profil de performance (Création, Danger Offensif, Impact Défensif, Profil Physique).</li>
                </ul>
            </div>
        </div>

        <div className="project-footer" style={{marginTop: '3rem'}}>
            <div style={{flex: '1 1 300px'}}>
                <h3 className="section-label" style={{marginBottom: '1rem'}}>Stack Technique</h3>
                <div className="hero-tags">
                    <span className="tag">Python</span>
                    <span className="tag">SQL</span>
                    <span className="tag">FuzzyWuzzy (Data Matching)</span>
                    <span className="tag">Machine Learning (Clustering)</span>
                    <span className="tag">BigQuery</span>
                    <span className="tag">Data Lake (Médaillon)</span>
                </div>
            </div>
            <div className="btn-group">
                <a href="https://github.com/qevan91/Similarity_Player" target="_blank" rel="noreferrer"
                   className="btn-github">
                    Répo GitHub →
                </a>
            </div>
        </div>
    </>
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
                <a href="https://github.com/qevan91/PokeBouk" target="_blank" rel="noreferrer"
                   className="btn-github">
                    Répo GitHub
                </a>
            </div>
        </div>
    </>
);

// F1 Predictor Bot
const F1PredictorContent = () => (
    <>
        <h2 className="detail-section-title" style={{ marginTop: 0 }}>Vue d'ensemble</h2>
        <p className="detail-text">
            Développement d'un bot Discord automatisé en Python pour gérer les pronostics de Formule 1. L'objectif est de créer une expérience interactive pour la communauté, intégrant la récupération automatique des données via l'API Jolpi, un système de points évolutif et une interface simplifiée utilisant les commandes slash (/).
        </p>

        <h3 className="detail-section-title">Fonctionnalités Clés</h3>

        <div className="tech-doc-grid">
            <div className="tech-doc-card">
                <h4 style={{ color: 'var(--accent)' }}>Pronostics & Automatisation</h4>
                <ul className="tech-doc-list">
                    <li><strong>Commandes Slash :</strong> Utilisation des commandes <code>/</code> Discord pour une
                        expérience fluide et une réduction des erreurs de saisie.
                    </li>
                    <li><strong>API Jolpi :</strong> Récupération automatique des résultats officiels (Top 10 course,
                        Qualifications, DNF).
                    </li>
                    <li><strong>Infos Grand Prix :</strong> Accès aux informations sur les Grands Prix et les pilotes
                        directement via l'API.
                    </li>
                </ul>
            </div>

            <div className="tech-doc-card">
                <h4 style={{color: 'var(--accent)'}}>Système de Points Avancé</h4>
                <ul className="tech-doc-list">
                    <li><strong>Multiplicateurs :</strong> Les points gagnés augmentent selon la précision et la hauteur
                        de la position prédite.
                    </li>
                    <li><strong>Paris Spéciaux :</strong> Intégration de bonus annexes comme le Driver of the Day,
                        l'apparition de la Safety Car et le pilote qui a le plus de dépassements.
                    </li>
                    <li><strong>Classement Dynamique :</strong> Leaderboard mis à jour automatiquement avec l'affichage
                        des meilleurs joueurs et mentions des gagnants.
                    </li>
                </ul>
            </div>

            <div className="tech-doc-card">
                <h4 style={{color: 'var(--accent)'}}>Administration Sécurisée</h4>
                <ul className="tech-doc-list">
                    <li><strong>Gestion des Rôles :</strong> Commandes réservées et filtrées selon les rôles Discord.</li>
                    <li><strong>Panneau Admin :</strong> Validation automatique ou manuelle (au choix) des résultats, correction des scores et gestion des événements exceptionnels du week-end (DSQ).</li>
                </ul>
            </div>
        </div>

        <div className="project-footer" style={{marginTop: '3rem'}}>
            <div style={{flex: '1 1 300px'}}>
                <h3 className="section-label" style={{marginBottom: '1rem'}}>Stack Technique</h3>
                <div className="hero-tags">
                    <span className="tag">Python</span>
                    <span className="tag">discord.py</span>
                    <span className="tag">Jolpi API</span>
                    <span className="tag">python-dotenv</span>
                    <span className="tag">JSON Storage</span>
                </div>
            </div>
            <div className="btn-group">
                <a href="https://github.com/qevan91/F1_Predictor_Bot_Saison_2026" target="_blank" rel="noreferrer"
                   className="btn-github">
                    Répo GitHub →
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
    },
    'f1-predictor': {
        title: 'F1 Predictor Bot - Saison 2026',
        content: <F1PredictorContent />
    }
};