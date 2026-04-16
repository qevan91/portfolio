export default function AboutSection() {
    return (
        <div className="content-section active">
            <div className="section-label">// Player Profile</div>
            <div className="section-title">Mon <span>Profil</span></div>
            <div className="about-grid">
                <div className="about-block" style={{ gridColumn: '1/-1' }}>
                    <h3>Bio</h3>
                    <p className="about-text">
                        Je construis des outils d'analyse qui aident à comprendre des jeux de données autrement. Statistiques, visualisations et insights actionnables pour une direction, une entreprise ou pour du Grand Public.
                    </p>
                </div>
                <div className="about-block">
                    <h3>Expérience</h3>
                    <div className="timeline-item">
                        <span className="timeline-year">2025-26</span>
                        <div className="timeline-content">Alternant Chef de Projet Open Data — Communauté d'Agglomération Grand Paris Sud<br/>
                            <small >Lieusaint</small><br/>
                            <small >Déploiement d’un tableau de bord décisionnel pour 23 communes : centralisation et traitement de flux de données multi-sources (démographie, mobilité Waze, finances, environnement). Un projet mené en collaboration étroite avec les directions métiers pour intégrer des indicateurs clés comme pour la qualité de l’eau, les ondes électromagnétiques et le Wifi Territorial.</small>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-year">2025</span>
                        <div className="timeline-content">
                            Stage Développeur Web & Data Matcher - Communauté d'Agglomération Grand Paris Sud<br/>
                            <small >Lieusaint</small><br/>
                            <small >Conception d'un pipeline ETL. Extraction OCR via Mistral AI, chunking optimisé, automatisation du stockage FTP.</small>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-year">2023-24</span>
                        <div className="timeline-content">
                            Animateur Bafa - Grand Paris Sud<br/>
                            <small >Morigny-Champigny</small><br/>
                            <small >Maison de la petite enfance. Maternelle 3-7 ans</small>
                        </div>
                    </div>
                </div>
                <div className="about-block">
                    <h3>Formation</h3>
                    <div className="timeline-item">
                        <span className="timeline-year">2026-28</span>
                        <div className="timeline-content">Mastère Data Engineer<br/>
                            <small >Paris Ynov Campus</small><br/>
                            <small >Titre d'Ingénieur en science des données spécialisé en infrastructure data</small>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-year">2023-26</span>
                        <div className="timeline-content">Bachelor IA & Data<br/>
                            <small >Paris Ynov Campus</small><br/>
                            <small >Titre Concepteur développeur d’applications numériques</small>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-year">2020-23</span>
                        <div className="timeline-content">Bac STI2D<br/>
                            <small >Lycée Geoffroy Saint-Hilaire</small><br/>
                            <small >Spécialisation ITEC (Innovation Technologique et Écoconception)</small>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-year">2023</span>
                        <div className="timeline-content">BAFA<br/>
                            <small >Étampes</small><br/>
                            <small >
                                Brevet d'Aptitude aux Fonctions d'Animateur.<br/>
                                Approfondissement : Jeux – Grands jeux – Activités de plein Air
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}