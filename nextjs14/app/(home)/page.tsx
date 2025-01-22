import styles from "../../styles/home.module.css";
import {API_URL} from "../constants";
import Movie from "../../components/Movie";
import { Key } from "react";

export const metadata = {
    title: {
        template: "%s | nextHome",
        description: "Home page",
    },
    description: 'Home page',
}

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // const response = await fetch(API_URL);
    // const json = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const res = await fetch(API_URL );
    return await res.json();
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie: { id: string; poster_path: string; title: string; }) => (
                <Movie
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            ))}
        </div>
    );
}

export const runtime = "edge";

// export default function Page() {
//     return (
//         <div>
//             <h1>Hello!!</h1>
//         </div>
//     )
// }

