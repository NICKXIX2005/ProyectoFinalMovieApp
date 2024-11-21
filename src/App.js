import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import OtherContent from './components/OtherContent';
import SearchResults from './components/SearchResults';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:id" element={<MovieDetails />} />
                    <Route path="/other" element={<OtherContent />} />
                    <Route path="/search" element={<SearchResults />} /> {/* Ruta para los resultados de búsqueda */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
