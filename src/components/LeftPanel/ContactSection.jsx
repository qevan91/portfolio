export default function ContactSection() {
    return (
        <div className="content-section active">
            <div className="section-label">// Recruter</div>
            <div className="section-title">Me Contacter</div>
            <p style={{ color: 'rgba(0,0,0)', marginTop: '0.8rem', lineHeight: '1.75' }}>
                Ouvert aux opportunités d'alternance, et aux collaborations sur des projets football & data.
            </p>
            <div className="contact-links">
                <a className="contact-link" href="mailto:quiatol.evan@gmail.com">
                    <div className="contact-icon">✉️</div>
                    <div className="contact-info"><h4>Email</h4><p>quiatol.evan@gmail.com</p></div>
                </a>
                <a className="contact-link" href="https://www.linkedin.com/in/evan-quiatol-06a25b348/" target="_blank" rel="noreferrer">
                    <div className="contact-icon">💼</div>
                    <div className="contact-info"><h4>LinkedIn</h4><p>evan-quiatol</p></div>
                </a>
                <a className="contact-link" href="https://github.com/qevan91" target="_blank" rel="noreferrer">
                    <div className="contact-icon">⌨️</div>
                    <div className="contact-info"><h4>GitHub</h4><p>github.com/qevan91</p></div>
                </a>
            </div>
        </div>
    );
}