import React, { useState, useEffect } from "react";
import { MovieCard } from "../../Components"; 

const UserListPage = () => {
    const [userMovies, setUserMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUserMovies = async () => {
            setIsLoading(true);
            try {
                const token = localStorage.getItem('accessToken');
                console.log(token)
                const response = await fetch('http://localhost:4000/user-film-list', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Could not fetch user movies');
                }
                
                const data = await response.json();
                setUserMovies(data);
            } catch (error) {
                console.error("Error fetching user's movie list:", error);
            }
            setIsLoading(false);
        };

        fetchUserMovies();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!userMovies.length) {
        return <div data-testid="movieList">No movies in your list.</div>;
    }

    return (
        <div>
            <h2>Your Movie List</h2>
            <div className="movie-list">
                {userMovies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        poster={movie.poster_path}
                        summary={movie.overview}  
                        year={movie.release_date} 
                        genre={""}     
                    
                    />
                ))}
            </div>
        </div>
    );
};

export default UserListPage;
