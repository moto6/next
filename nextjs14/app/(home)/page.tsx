import styles from "../../styles/home.module.css";
import Movie from "../../components/Movie";

async function getMovies() {
    // const response = await fetch(API_URL);
    // const json = await response.json();
    const jsonString = "[{\"adult\":false,\"backdrop_path\":\"https://image.tmdb.org/t/p/w1280/Asg2UUwipAdE87MxtJy7SQo08XI.jpg\",\"genre_ids\":[28,14,27],\"id\":957452,\"original_language\":\"en\",\"original_title\":\"The Crow\",\"overview\":\"Soulmates Eric and Shelly are brutally murdered when the demons of her dark past catch up with them. Given the chance to save his true love by sacrificing himself, Eric sets out to seek merciless revenge on their killers, traversing the worlds of the living and the dead to put the wrong things right.\",\"popularity\":1940.634,\"poster_path\":\"https://image.tmdb.org/t/p/w780/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg\",\"release_date\":\"2024-08-21\",\"title\":\"The Crow\",\"video\":false,\"vote_average\":5.378,\"vote_count\":418},{\"adult\":false,\"backdrop_path\":\"https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg\",\"genre_ids\":[28,35,878],\"id\":533535,\"original_language\":\"en\",\"original_title\":\"Deadpool & Wolverine\",\"overview\":\"A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.\",\"popularity\":1923.099,\"poster_path\":\"https://image.tmdb.org/t/p/w780/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg\",\"release_date\":\"2024-07-24\",\"title\":\"Deadpool & Wolverine\",\"video\":false,\"vote_average\":7.672,\"vote_count\":3156}]"
    return JSON.parse(jsonString)
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie: { id: string; poster_path: string; title: string; }) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            ))}
        </div>
    );
}
