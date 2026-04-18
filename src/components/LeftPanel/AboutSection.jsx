export default function AboutSection() {
    return (
        <div className="content-section active">
            <div className="section-label">// Player Profile</div>
            <div className="section-title">Mon <span>Profil</span></div>

            <div className="scouting-report">
                <h3>Bio</h3>
                <p className="about-text" style={{ fontSize: '1rem', fontWeight: 500 }}>
                    Futur <b>Data Engineer</b> passionné par l'architecture des données et l'optimisation des flux.
                    Je construis des outils d'analyse qui transforment des jeux de données complexes en indicateurs de performance et visualisations compréhensible,
                    que ce soit pour le pilotage d'une agglomération ou l'analyse de performance sportive.
                </p>
            </div>

            <div className="career-grid">
                <div className="career-block">
                    <h3>🏃 Parcours Professionnel</h3>

                    <div className="season-entry">
                        <span className="season-year">2025 — 2026</span>
                        <div className="season-title">Chef de Projet Open Data (Alternance)</div>
                        <span className="season-club">Agglomération Grand Paris Sud</span>
                        <p className="season-desc">
                            Déploiement d’un tableau de bord décisionnel pour 23 communes.
                            Centralisation de jeux de données divers : démographie, mobilité Waze, finances et environnement ect...
                        </p>
                    </div>

                    <div className="season-entry">
                        <span className="season-year">2025</span>
                        <div className="season-title">Développeur Web & Data Matcher (Stage)</div>
                        <span className="season-club">Agglomération Grand Paris Sud</span>
                        <p className="season-desc">
                            Conception d'un pipeline ETL complet. Extraction OCR via Mistral AI, chunking optimisé et automatisation du stockage FTP.
                        </p>
                    </div>

                    <div className="season-entry">
                        <span className="season-year">2023 — 2024</span>
                        <div className="season-title">Animateur BAFA Saisonnier</div>
                        <span className="season-club">Accueil de Loisirs à Morigny-Champigny</span>
                        <p className="season-desc">
                            Gestion de groupes et animation (3-7 ans). <br/>Développement des soft-skills : autonomie, organisation et communication.
                        </p>
                    </div>
                </div>

                <div className="career-block">
                    <h3>🎓 Formation</h3>

                    <div className="season-entry">
                        <span className="season-year">2026 — 2028</span>
                        <div className="season-title">Mastère Data Engineer</div>
                        <span className="season-club">Paris Ynov Campus</span>
                        <p className="season-desc">
                            Titre d'Ingénieur en science des données spécialisé en infrastructure data.
                        </p>
                    </div>

                    <div className="season-entry">
                        <span className="season-year">2023 — 2026</span>
                        <div className="season-title">Bachelor IA & Data</div>
                        <span className="season-club">Paris Ynov Campus</span>
                        <p className="season-desc">
                            Titre de Concepteur Développeur d’Applications Numériques.
                        </p>
                    </div>

                    <div className="season-entry">
                        <span className="season-year">2020 — 2023</span>
                        <div className="season-title">Bac STI2D (Spé. ITEC)</div>
                        <span className="season-club">Lycée Geoffroy Saint-Hilaire</span>
                        <p className="season-desc">
                            Innovation Technologique et Écoconception.
                        </p>
                    </div>

                    <div className="season-entry">
                        <span className="season-year">2023</span>
                        <div className="season-title">BAFA</div>
                        <span className="season-club">Étampes</span>
                        <p className="season-desc">
                            Approfondissement : Jeux – Grands jeux – Activités de plein Air
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}