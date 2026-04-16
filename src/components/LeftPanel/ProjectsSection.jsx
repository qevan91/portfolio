import { Link } from 'react-router-dom';

export default function ProjectsSection() {
    return (
        <div className="content-section active">
            <div className="section-label">// Match Reports</div>
            <div className="section-title">Mes <span>Projets</span></div>

            <div className="projects-grid">
                <Link to="/projet/grand-paris-sud-waze" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="project-card">
                        <div className="project-number">01</div>
                        <div className="project-tag">📊 Data Viz</div>
                        <div className="project-title">Grand Paris Sud ~ Waze</div>
                        <p className="project-desc">Création d'un outil d'analyse et de scoring du trafic basé sur les données Waze Connected Citizens. Traitement des flux via une architecture de données Médaillon, suivi d'un algorithme évaluant la congestion par rue (score de 0 à 100). Restitution géographique des zones de tension via des cartes interactives générées sous Pandas et Folium.</p>
                        <div className="project-tech">
                            <span className="tech-pill">Python</span><span className="tech-pill">Folium</span><span className="tech-pill">Architecture Médaillon</span><span className="tech-pill">Pandas</span><span className="tech-pill">Numpy</span>
                        </div>
                    </div>
                </Link>

                <Link to="/projet/scouting-engine" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="project-card">
                        <div className="project-number">02</div>
                        <div className="project-tag">🤖 Machine Leaning ~ En cours</div>
                        <div className="project-title">Scouting Engine</div>
                        <p className="project-desc">Conception d'une infrastructure d'analyse de données dédiée au scouting et à l'optimisation tactique en centre de formation. Ce projet s'appuie sur le clustering et le calcul de similarité statistique pour identifier des profils de joueurs cibles et objectiver le potentiel de repositionnement des jeunes talents vers des rôles modernes via l'analyse de données multivariées.</p>
                        <div className="project-tech">
                            <span className="tech-pill">scikit-learn</span><span className="tech-pill">PCA</span><span className="tech-pill">KMeans</span><span className="tech-pill">cosine_similarity</span><span className="tech-pill">SQL</span>
                        </div>
                    </div>
                </Link>

                <Link to="/projet/ocerisations" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="project-card">
                        <div className="project-number">03</div>
                        <div className="project-tag">🤖 Océrisations </div>
                        <div className="project-title">Grand Paris Sud ~ Actes Administratifs</div>
                        <p className="project-desc">Conception d'un pipeline ETL pour le traitement d'actes administratifs. Extraction OCR via Mistral AI, chunking optimisé pour la limite d'un tokken, automatisation du stockage des textes dans un CSV sur un FTP, intégration d'un système de vérication d'ID pour éviter le traitement redondant des fichiers déjà indexés et océrisés.</p>
                        <div className="project-tech">
                            <span className="tech-pill">Mistral IA</span><span className="tech-pill">Python</span><span className="tech-pill">Pipeline ETL</span>
                        </div>
                    </div>
                </Link>

                <Link to="/projet/pokebouk" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="project-card">
                        <div className="project-number">04</div>
                        <div className="project-tag">🔄 Site Web</div>
                        <div className="project-title">PokeBouk</div>
                        <p className="project-desc">Conception et implémentation d’une architecture de données relationnelle sous Supabase, incluant la modélisation de schémas complexes pour la gestion de tournois Pokemon, l'automatisation des ux de progression via des déclencheurs SQL et API REST. Gestion d'une boutique et d'un Forum.</p>
                        <div className="project-tech">
                            <span className="tech-pill">Supabase</span><span className="tech-pill">Dev Web</span><span className="tech-pill">PostgreSQL</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}