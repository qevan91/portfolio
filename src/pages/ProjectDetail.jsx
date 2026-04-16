import { useParams, Link } from 'react-router-dom';

export default function ProjectDetail() {
    const { id } = useParams();

    const projectTitles = {
        'xg-engine': 'Expected Goals Engine',
        'tactical-board': 'Tactical Board Live',
        'similarity-engine': 'Player Similarity Engine',
        'data-pipeline': 'Football Data Pipeline'
    };

    const title = projectTitles[id] || id;

    return (
        <div style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto', color: 'var(--white)' }}>
            <Link to="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: 'Space Mono, monospace', fontSize: '0.8rem' }}>
                ← RETOUR
            </Link>

            <h1 className="section-title" style={{ marginTop: '2rem' }}>
                Détails du projet <span>{title}</span>
            </h1>

            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--line)', padding: '2rem', marginTop: '2rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                </p>
            </div>
        </div>
    );
}