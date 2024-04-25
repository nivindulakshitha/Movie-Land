import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './Movie';

const API_URL = 'API_URL';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('batman');
    }, [])

    return (
        <div className='app'>
            <h1>Movie Land</h1>

            <div className='search'>
                <input type='text' placeholder='search for movies...' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
                <img src={SearchIcon} alt='search icon' onClick={() => searchMovies(searchTerm)} />
            </div>

            {
                movies?.length > 0 ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;