'use server';

const fetchMoviesAction = async (): Promise<string> => {
    const response = await fetch('https://localhost:8080')
    //fetch(`https://nomad-movies.nomadcoders.workers.dev/movies`);
    return JSON.stringify(await response.json());
}

export {fetchMoviesAction}