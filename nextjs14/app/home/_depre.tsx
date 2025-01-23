import {useEffect, useState} from "react";
import {fetchMoviesAction} from "../../action/fetchMovies";

export const meatadata = {
    title: "Home"
}

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState('')

    function getMovie() {
        fetchMoviesAction().then(r => {
            setMovies(r)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getMovie()
    })

    return (
        <div>{isLoading ? "Loading..." : movies}
            <h1>
                Hello!@
            </h1>
        </div>
    )
}