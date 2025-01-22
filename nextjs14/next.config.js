const nextConfig = {
    output: 'export',

    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,

    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,

    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
}

module.exports = nextConfig


// module.exports = {
//     output: 'standalone', // 런타임 동작 지원
// };

//export -> html,css 파일이 나오는 static serving 모드
//standalone -> server.js 같은 node 서버 모드로 배포