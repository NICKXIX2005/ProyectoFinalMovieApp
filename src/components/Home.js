import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await axios.get(`${API_URL}/discover/movie`, {
                params: { api_key: API_KEY }
            });
            setMovies(data.results);
        };
        fetchMovies();
    }, []);

    return (
        <div className='container mt-3'>
            <h2>Popular Movies</h2>
            <div className="row">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-md-4 mb-3">
                        <Link to={`/details/${movie.id}`}>
                            <img src={`${IMAGE_PATH}${movie.poster_path}`} alt={movie.title} height={600} width="100%" />
                            <h4 className='text-center'>{movie.title}</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;