export async function generateStaticParams() {
    const movieIds = ['1', '2', '3']; // 정적으로 생성할 ID 목록
    return movieIds.map((id) => ({id}));
}

export default function MovieDetail({params}: { params: { id: string } }) {
    return (
        <div>
            <h1>Movie Detail</h1>
            <p>Movie ID: {params.id}</p>
        </div>
    );
}
//
//
// export default function MovieDetail({
//                                         params: {id},
//                                         searchParams: {region, page},
//                                     }: {
//     params: { id: string };
//     searchParams: { region: string; page: string };
// }) {
//     console.log(`id: ${id}, Region: ${region}, Page: ${page}`);
//     return <div>
//         <h1>Movie Detail</h1>
//         <p></p>
//     </div>
// }
/*

{
  params: { id: '121212' },
  searchParams: { region: 'kr', page: 'toto' }
}
/movies/121212
 GET /movies/121212?region=kr&page=toto 200 in 21ms


 */
// http://localhost:3000/movies/121212?region=kr&page=toto