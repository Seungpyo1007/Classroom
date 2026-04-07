## 수박 게임 (Suika) 클론

[🎮 게임 플레이하기 (Demo)](https://seungpyo1007.github.io/Classroom/)

물리 엔진으로 과일을 떨어뜨려 같은 과일이 합쳐지도록 만드는 간단한 수박 게임입니다.

### 기능 요약
- Matter.js(동봉)로 과일의 움직임과 충돌 처리
- `A` / `D` 키로 좌우 이동, `S` 키로 과일 떨어뜨리기
- 같은 과일이 충돌하면 더 큰 과일로 합쳐짐
- 화면 상단의 얇은 선을 넘으면 게임 오버

### 폴더 구조
- `docs/index.html`: 페이지 진입점
- `docs/main.js`: 게임 로직(렌더, 입력 처리, 충돌 이벤트)
- `docs/fruits.js`: 과일 스프라이트 경로와 반지름 정의
- `docs/matter.js`: Matter.js 번들
- `docs/image/`: 과일 PNG 리소스
- `flight23/`: 별도 실습용 캔버스 데모(현재 Pages에 사용하지 않음)

### 로컬에서 실행
1) 저장소 루트에서 간단히 정적 서버를 띄웁니다.
```bash
npx serve docs
```
2) 브라우저에서 `http://localhost:3000`으로 접속합니다.

### 라이선스
이 프로젝트는 [MIT 라이선스](LICENSE)를 따릅니다.


