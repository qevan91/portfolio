export default function HomeSection() {
    return (
        <div className="content-section active">
            <div className="section-label">Recherche Alternance Octobre 2026</div>
            <div className="hero-title">
                <span className="outlined" style={{ color: 'rgb(128,128,128)'}}>Data</span>
                <em>Analyst/Engineer</em>
                <span style={{ fontSize: '0.42em', color: 'rgb(128,128,128)', display: 'block', fontFamily: "'IBM Plex Sans'", fontWeight: 300, letterSpacing: '5px', marginTop: '0.6rem' }}>& PASSIONNÉ DE FOOTBALL
        </span>
            </div>
            <p className="hero-subtitle">
                Evan Quiatol, 20 ans. Je suis actuellement en 3ème année de Bachelor Intelligence Artificielle & Data à Paris Ynov Campus. Après mon Bachelor j'envisage de poursuivre avec un diplôme d'Ingénieur en science des données spécialisé en infrastructure data.
            </p>
            <div className="hero-tags">
                <span className="tag">Python</span><span className="tag">SQL</span><span className="tag">R</span>
                <span className="tag">JavaScript</span><span className="tag">MySQL</span><span className="tag">scikit-learn</span>
                <span className="tag">Streamlit</span><span className="tag">Pipeline ETL</span><span className="tag">PostgreSQL</span>
            </div>
            <div className="hero-tags" style={{ marginTop: '0.5rem' }}>
                <span className="tag">Supabase</span><span className="tag">TensorFlow</span><span className="tag">Pandas</span>
                <span className="tag">NumPy</span><span className="tag">Pickle</span><span className="tag">Matplotlib</span>
                <span className="tag">Quantmod</span><span className="tag">Seaborn</span>
            </div>
        </div>
    );
}