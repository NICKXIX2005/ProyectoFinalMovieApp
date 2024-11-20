import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';

const SearchResults = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

    useEffect(() => {
        const fetchMovies = async () => {
            if (query) {
                const { data } = await axios.get(`${API_URL}/search/movie`, {
                    params: { api_key: API_KEY, query }
                });
                setMovies(data.results);
            }
        };
        fetchMovies();
    }, [query]);

    return (
        <div className='container mt-3'>
            <h2>Search Results for "{query}"</h2>
            <div className="row">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className="col-md-4 mb-3">
                            <Link to={`/details/${movie.id}`}>
                                <img 
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                                    alt={movie.title} 
                                    height={600} 
                                    width="100%" 
                                />
                                <h4 className='text-center'>{movie.title}</h4>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;