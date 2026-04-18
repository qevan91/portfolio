import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../content/projectsContent';

export default function ProjectDetail() {
    const { id } = useParams();

    const project = projectsData[id] || {
        title: id.replace(/-/g, ' '),
        content: <p>Projet en cours de rédaction...</p>
    };

    return (
        <div style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto', color: 'var(--white)' }}>
            <Link to="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: 'Space Mono, monospace', fontSize: '0.8rem' }}>
                ← RETOUR AU TERRAIN
            </Link>

            <h1 className="section-title" style={{ marginTop: '2rem' }}>
                Détails du projet <span style={{ color: 'var(--accent)' }}>{project.title}</span>
            </h1>

            <div style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--line)',
                padding: '2.5rem',
                marginTop: '2rem',
                minHeight: '400px',
                borderRadius: '8px'
            }}>
                {project.content}
            </div>
        </div>
    );
}