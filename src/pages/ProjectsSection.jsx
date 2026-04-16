import { useParams, Link } from 'react-router-dom';

function ProjectDetail() {
    const { id } = useParams();

    return (
        <div style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
            <Link to="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                ← Retour au terrain
            </Link>

            <h1 className="section-title" style={{ marginTop: '2rem' }}>
                Détails du projet <span>{id}</span>
            </h1>

            <div style={{ background: 'var(--card-bg)', padding: '2rem', marginTop: '2rem' }}>
                <p>Ici tu pourras importer tes images et écrire ton analyse détaillée...</p>
            </div>
        </div>
    );
}

export default ProjectDetail;