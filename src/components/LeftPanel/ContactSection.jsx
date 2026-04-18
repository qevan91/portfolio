export default function ContactSection() {
    return (
        <div className="content-section active">
            <div className="section-label">// Mercato</div>
            <div className="section-title2">Me Contacter</div>

            <p style={{ color: 'rgba(0,0,0,0.7)', marginTop: '0.8rem', lineHeight: '1.75', maxWidth: '600px', marginBottom: '2rem' }}>
                Je suis actuellement à la recherche d'une alternance de 2 ans pour octobre 2026. Ouvert également aux collaborations sur des projets mêlant Football & Data.
            </p>

            <div className="contact-layout">
                <div className="contact-grid">
                    <a className="contact-card" href="mailto:quiatol.evan@gmail.com">
                        <div className="contact-icon-wrapper">✉️</div>
                        <div className="contact-info">
                            <div className="contact-card-title">Email</div>
                            <div className="contact-card-value">quiatol.evan@gmail.com</div>
                        </div>
                    </a>

                    <a className="contact-card" href="https://www.linkedin.com/in/evan-quiatol-06a25b348/" target="_blank" rel="noreferrer">
                        <div className="contact-icon-wrapper">💼</div>
                        <div className="contact-info">
                            <div className="contact-card-title">LinkedIn</div>
                            <div className="contact-card-value">Evan Quiatol</div>
                        </div>
                    </a>

                    <a className="contact-card" href="https://github.com/qevan91" target="_blank" rel="noreferrer">
                        <div className="contact-icon-wrapper">⌨️</div>
                        <div className="contact-info">
                            <div className="contact-card-title">GitHub</div>
                            <div className="contact-card-value">qevan91</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}