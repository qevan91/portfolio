export default function HomeSection() {
    return (
        <div className="content-section active">
            <div className="section-label">Recherche Alternance Octobre 2026</div>
            <div className="hero-title">
                <span className="outlined" style={{ color: 'rgb(128,128,128)'}}>Data</span>
                <em>Analyst/Engineer</em>
                <span style={{ fontSize: '0.42em', color: 'rgb(128,128,128)', display: 'block', fontFamily: "'IBM Plex Sans'", fontWeight: 300, letterSpacing: '5px', marginTop: '0.6rem' }}>
                    & PASSIONNÉ DE FOOTBALL
                </span>
            </div>
            <p className="hero-subtitle">
                Evan Quiatol, 20 ans. Je suis actuellement en 3ème année de Bachelor Intelligence Artificielle & Data à Paris Ynov Campus. Après mon Bachelor j'envisage de poursuivre avec un diplôme d'Ingénieur en science des données spécialisé en infrastructure data.
            </p>

            <div style={{marginTop: '1.5rem', display: 'flex', flexDirection: 'column'}}>
                <div className="hero-tags">
                    <span style={{
                        fontSize: '0.75rem',
                        color: 'var(--accent)',
                        textTransform: 'uppercase',
                        marginRight: '10px',
                        letterSpacing: '1px'
                    }}>Langages :</span>
                    <span className="tag">Python</span><span className="tag">SQL</span><span className="tag">R</span>
                    <span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">Go</span>
                    <span className="tag">JavaScript</span><span className="tag">TypeScript</span>
                    <span className="tag">Java</span><span className="tag">C#</span>
                </div>

                <div className="hero-tags">
                    <span style={{
                        fontSize: '0.75rem',
                        color: 'var(--accent)',
                        textTransform: 'uppercase',
                        marginRight: '10px',
                        letterSpacing: '1px'
                    }}>Bases de données :</span>
                    <span className="tag">PostgreSQL</span><span className="tag">MySQL</span>
                    <span className="tag">MongoDB</span><span className="tag">Supabase</span>
                    <span className="tag">BigQuery</span><span className="tag">BigQuery</span>
                    <span className="tag">BigQuery</span><span className="tag">SQLite</span>
                </div>

                <div className="hero-tags">
                    <span style={{
                        fontSize: '0.75rem',
                        color: 'var(--accent)',
                        textTransform: 'uppercase',
                        marginRight: '10px',
                        letterSpacing: '1px'
                    }}>Analyse & ML :</span>
                    <span className="tag">Scikit-Learn</span><span className="tag">TensorFlow</span>
                    <span className="tag">Pandas</span><span className="tag">Numpy</span>
                    <span className="tag">Pickle</span>
                </div>

                <div className="hero-tags">
                    <span style={{
                        fontSize: '0.75rem',
                        color: 'var(--accent)',
                        textTransform: 'uppercase',
                        marginRight: '10px',
                        letterSpacing: '1px'
                    }}>Architecture :</span>
                    <span className="tag">Pipeline ETL</span><span className="tag">OLTP/OLAP</span>
                    <span className="tag">Data Lake</span>
                </div>

                <div className="hero-tags">
                    <span style={{
                        fontSize: '0.75rem',
                        color: 'var(--accent)',
                        textTransform: 'uppercase',
                        marginRight: '10px',
                        letterSpacing: '1px'
                    }}>Visualisation :</span>
                    <span className="tag">Streamlit</span><span className="tag">Matplotlib</span><span
                    className="tag">Seaborn</span>
                </div>

                <div className="hero-tags">
                    <span style={{
                        fontSize: '0.75rem',
                        color: 'var(--accent)',
                        textTransform: 'uppercase',
                        marginRight: '10px',
                        letterSpacing: '1px'
                    }}>Outils :</span>
                    <span className="tag">GitHub</span><span className="tag">Docker</span>
                    <span className="tag">API</span>
                </div>
            </div>
        </div>
    );
}