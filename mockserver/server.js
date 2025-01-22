const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// CORS 모든 도메인 허용
app.use(cors());

// /movies 엔드포인트 - data.json 파일을 읽어와서 반환
app.get('/movies', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');

    // 파일 읽기
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('파일을 읽는 중 오류 발생:', err);
            return res.status(500).json({ message: '파일을 읽을 수 없습니다.' });
        }

        // JSON 파일 내용을 클라이언트에 반환
        res.json(JSON.parse(data));
    });
});

// 서버 시작
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
    console.log("endpoint : http://localhost:3000/movies");
});
