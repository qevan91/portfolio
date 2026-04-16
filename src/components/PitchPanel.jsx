import React from 'react';

const positions = {
    home:     { x: 150, y: 387 },
    about:    { x:  54, y: 320 },
    projects: { x: 120, y: 320 },
    github:   { x: 186, y: 320 },
    contact:  { x: 252, y: 320 },
    sql:      { x:  72, y: 210 },
    python:   { x: 150, y: 210 },
    ml:       { x: 228, y: 210 },
    dl:       { x:  72, y: 114 },
    viz:      { x: 150, y:  80 },
    etl:      { x: 228, y: 114 },
};

const passNetworks = {
    home:     [['home','about'],['home','projects'],['home','github'],['home','contact']],
    about:    [['home','about'],['about','sql'],['sql','python'],['about','python'],['python','viz']],
    projects: [['home','projects'],['projects','python'],['projects','ml'],['python','dl'],['ml','etl']],
    github:   [['home','github'],['github','python'],['python','sql'],['github','ml'],['ml','etl']],
    contact:  [['home','contact'],['contact','about'],['contact','python'],['python','viz']],
};

export default function PitchPanel({ activeSection, setActiveSection }) {
    const currentLines = passNetworks[activeSection] || [];

    return (
        <div className="pitch-panel">
            <div className="pitch-label">// Navigation — Terrain</div>

            <div className="pitch-container">
                {/* Terrain */}
                <svg className="pitch-svg" viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="284" height="404" fill="#1d8a42" rx="2"/>
                    {/* Rayures pelouse */}
                    <rect x="8" y="8"   width="284" height="40" fill="#1a7a3c"/>
                    <rect x="8" y="88"  width="284" height="40" fill="#1a7a3c"/>
                    <rect x="8" y="168" width="284" height="40" fill="#1a7a3c"/>
                    <rect x="8" y="248" width="284" height="40" fill="#1a7a3c"/>
                    <rect x="8" y="328" width="284" height="40" fill="#1a7a3c"/>
                    {/* Lignes blanches */}
                    <rect x="11" y="11" width="278" height="398" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
                    <line x1="11" y1="210" x2="289" y2="210" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
                    <circle cx="150" cy="210" r="40" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
                    <circle cx="150" cy="210" r="2.5" fill="rgba(255,255,255,0.7)"/>
                    <rect x="70" y="11" width="160" height="70" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5"/>
                    <rect x="105" y="11" width="90" height="26" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5"/>
                    <path d="M 115 81 A 40 40 0 0 1 185 81" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5"/>
                    <circle cx="150" cy="60" r="2" fill="rgba(255,255,255,0.65)"/>
                    <rect x="70" y="339" width="160" height="70" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5"/>
                    <rect x="105" y="383" width="90" height="26" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5"/>
                    <path d="M 115 339 A 40 40 0 0 0 185 339" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5"/>
                    <circle cx="150" cy="360" r="2" fill="rgba(255,255,255,0.65)"/>
                    <rect x="122" y="3" width="56" height="12" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5"/>
                    <rect x="122" y="405" width="56" height="12" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5"/>
                    <path d="M 11 21 A 9 9 0 0 0 20 11" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
                    <path d="M 289 21 A 9 9 0 0 1 280 11" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
                    <path d="M 11 399 A 9 9 0 0 1 20 409" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
                    <path d="M 289 399 A 9 9 0 0 0 280 409" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2"/>
                    {/* Grille data subtile */}
                    <line x1="11" y1="140" x2="289" y2="140" stroke="rgba(255,255,255,0.055)" strokeDasharray="4 5" strokeWidth="1"/>
                    <line x1="11" y1="280" x2="289" y2="280" stroke="rgba(255,255,255,0.055)" strokeDasharray="4 5" strokeWidth="1"/>
                    <line x1="98"  y1="11" x2="98"  y2="409" stroke="rgba(255,255,255,0.055)" strokeDasharray="4 5" strokeWidth="1"/>
                    <line x1="202" y1="11" x2="202" y2="409" stroke="rgba(255,255,255,0.055)" strokeDasharray="4 5" strokeWidth="1"/>
                </svg>

                {/* Passes animées */}
                <svg className="pass-svg-overlay" viewBox="0 0 300 420">
                    <style>{`@keyframes dashAnim { to { stroke-dashoffset: -18; } }`}</style>
                    {currentLines.map((pair, i) => {
                        const a = positions[pair[0]];
                        const b = positions[pair[1]];
                        if (!a || !b) return null;

                        return (
                            <g key={`${pair[0]}-${pair[1]}`}>
                                <line
                                    x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                                    stroke="rgba(232,245,66,0.35)" strokeWidth="1.5" strokeDasharray="5 4"
                                    style={{ animation: `dashAnim 1.2s linear infinite`, animationDelay: `${i * 0.12}s` }}
                                />
                                <circle r="3.5" fill="rgba(232,245,66,0.85)">
                                    <animate attributeName="cx" values={`${a.x};${b.x}`} dur="1.6s" begin={`${i * 0.28}s`} repeatCount="indefinite" />
                                    <animate attributeName="cy" values={`${a.y};${b.y}`} dur="1.6s" begin={`${i * 0.28}s`} repeatCount="indefinite" />
                                </circle>
                            </g>
                        );
                    })}
                </svg>

                {/* boutons et joueurs */}
                <div className={`player-marker ${activeSection === 'home' ? 'active' : ''}`} onClick={() => setActiveSection('home')} style={{ left: '50%', top: '92%' }}>
                    <div className="player-dot">🏠</div><div className="player-name">Home</div>
                </div>
                <div className={`player-marker ${activeSection === 'about' ? 'active' : ''}`} onClick={() => setActiveSection('about')} style={{ left: '18%', top: '76%' }}>
                    <div className="player-dot">👤</div><div className="player-name">Profil</div>
                </div>
                <div className={`player-marker ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => setActiveSection('projects')} style={{ left: '40%', top: '76%' }}>
                    <div className="player-dot">📊</div><div className="player-name">Projets</div>
                </div>
                <div className={`player-marker ${activeSection === 'github' ? 'active' : ''}`} onClick={() => setActiveSection('github')} style={{ left: '62%', top: '76%' }}>
                    <div className="player-dot">⌨️</div><div className="player-name">GitHub</div>
                </div>
                <div className={`player-marker ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => setActiveSection('contact')} style={{ left: '84%', top: '76%' }}>
                    <div className="player-dot">✉️</div><div className="player-name">Contact</div>
                </div>

                {/* Skills (Statiques) */}
                <div className="player-marker" style={{ left: '24%', top: '50%' }}><div className="player-dot skill">SQL</div><div className="player-name" style={{ fontSize: '0.44rem' }}>SQL</div></div>
                <div className="player-marker" style={{ left: '50%', top: '50%' }}><div className="player-dot skill">PY</div><div className="player-name" style={{ fontSize: '0.44rem' }}>Python</div></div>
                <div className="player-marker" style={{ left: '76%', top: '50%' }}><div className="player-dot skill">ML</div><div className="player-name" style={{ fontSize: '0.44rem' }}>ML</div></div>
                <div className="player-marker" style={{ left: '24%', top: '27%' }}><div className="player-dot skill" style={{ fontSize: '0.42rem' }}>DL</div><div className="player-name" style={{ fontSize: '0.44rem' }}>Data Lake</div></div>
                <div className="player-marker" style={{ left: '50%', top: '19%' }}><div className="player-dot skill" style={{ fontSize: '0.42rem' }}>VIZ</div><div className="player-name" style={{ fontSize: '0.44rem' }}>Viz</div></div>
                <div className="player-marker" style={{ left: '76%', top: '27%' }}><div className="player-dot skill" style={{ fontSize: '0.42rem' }}>ETL</div><div className="player-name" style={{ fontSize: '0.44rem' }}>ETL</div></div>
            </div>

            <div className="pitch-legend">
                <div className="legend-title">Cliquer pour naviguer</div>
                {['home', 'about', 'projects', 'github', 'contact'].map((sec) => (
                    <div key={sec} className={`legend-item ${activeSection === sec ? 'active' : ''}`} onClick={() => setActiveSection(sec)}>
                        <div className="legend-dot"></div>
                        <span className="legend-text">
              {sec === 'home' ? '🏠  Accueil' : sec === 'about' ? '👤  Profil' : sec === 'projects' ? '📊  Projets' : sec === 'github' ? '⌨️  GitHub' : '✉️  Contact'}
            </span>
                    </div>
                ))}
            </div>
        </div>
    );
}