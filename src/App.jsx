import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPortfolio from './pages/MainPortfolio';
import ProjectDetail from './pages/ProjectDetail';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPortfolio />} />
                <Route path="/projet/:id" element={<ProjectDetail />} />
            </Routes>
        </Router>
    );
}

export default App;