export default function GithubSection() {
    return (
        <div className="content-section active">
            <div className="section-label">// Github</div>
            <div className="section-title">Open <span>Repository</span></div>
            <div>
                Beaucoup de mes projets sont inaccessibles, car ils contiennent des logiques métiers non partageables.
            </div>
            <div className="github-repos">
                <a className="repo-card" href="https://github.com/qevan91/Grand-Paris-Sud-x-Waze" target="_blank" rel="noreferrer">
                    <div className="repo-info"><h4>Grand Paris Sud ~ Waze</h4>
                        <p>
                            Ce projet s'inscrit dans le programme Connected Citizens de Waze, un échange de données entre les collectivités et Waze pour améliorer la sécurité et la gestion du réseau routier.<br/><br/>
                            L'outil Grand Paris Sud x Waze permet aux élus et techniciens de visualiser la congestion sur les 23 communes de l'agglomération afin d'appuyer la prise de décision en matière de gestion de trafic et d'organisation d'événements.
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
}