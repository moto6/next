export async function generateStaticParams() {
    const movieConfigs = [
        { id: '1', region: 'us', page: 'home' },
        { id: '2', region: 'kr', page: 'details' },
        { id: '3', region: 'jp', page: 'summary' },
    ];

    return movieConfigs.map(({ id, region, page }) => ({
        id,
        region,
        page,
    }));
}


export default function MovieDetail({
                                        params: {id},
                                        searchParams: {region, page},
                                    }: {
    params: { id: string };
    searchParams: { region: string; page: string };
}) {
    console.log(`id: ${id}, Region: ${region}, Page: ${page}`);
    return <div>
        <h1>Movie Detail</h1>
        <p></p>
    </div>
}
/*

{
  params: { id: '121212' },
  searchParams: { region: 'kr', page: 'toto' }
}
/movies/121212
 GET /movies/121212?region=kr&page=toto 200 in 21ms


 */
// http://localhost:3000/movies/121212?region=kr&page=toto