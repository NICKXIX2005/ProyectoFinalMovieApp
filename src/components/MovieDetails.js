import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await axios.get(`${API_URL}/movie/${id}`, {
                params: { api_key: API_KEY }
            });
            setMovie(response.data);
        };
        fetchMovieDetails();
    }, [id]);

    if (!movie) return <div>Cargando...</div>;

    return (
        <div className='container'>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieDetails;