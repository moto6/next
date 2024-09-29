const https = require('https');
const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, 'data.json');
const jsonArray = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// 이미지 다운로드 및 저장 함수
function downloadImage(url, folder) {
    const fileName = path.basename(url);  // URL의 마지막 패스에서 파일명 추출
    const filePath = path.join(__dirname, folder, fileName);

    return new Promise((resolve, reject) => {
        const req = https.get(url, (res) => {
            // 성공적인 응답이 아니면 오류 처리
            if (res.statusCode !== 200) {
                console.error(`Failed to download image: ${url}`);
                res.resume(); // 메모리 누수를 방지하기 위해 응답을 소비
                reject(new Error(`Failed to download image: ${url}`));
                return;
            }

            // 파일 쓰기 스트림에 연결
            const fileStream = fs.createWriteStream(filePath);
            res.pipe(fileStream);

            // 다운로드 완료 시 로그 출력
            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`${fileName} 저장 완료: ${filePath}`);
                resolve();
            });
        });

        req.on('error', (err) => {
            console.error(`이미지 다운로드 중 오류 발생: ${err.message}`);
            reject(err);
        });

        // 5초 이상 응답이 없으면 요청 취소
        req.setTimeout(5000, () => {
            req.abort();
            console.error(`Request timed out for image: ${url}`);
            reject(new Error(`Request timed out: ${url}`));
        });
    });
}

// 이미지 처리 함수
async function saveImages(jsonArray) {
    for (const item of jsonArray) {
        if (item.backdrop_path) {
            await downloadImage(item.backdrop_path, 'assets/backdrop');
        }
        if (item.poster_path) {
            await downloadImage(item.poster_path, 'assets/poster');
        }
    }
}

// 이미지 저장 실행
saveImages(jsonArray)
    .then(() => {
        console.log("모든 이미지 다운로드 완료. 프로세스를 종료합니다.");
        process.exit(0);  // 모든 다운로드가 완료되면 프로세스 종료
    })
    .catch((error) => {
        console.error("다운로드 중 오류 발생:", error);
        process.exit(1);  // 오류 발생 시 프로세스 종료
    });
