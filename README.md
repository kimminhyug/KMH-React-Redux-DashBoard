# KMH-React-Redux-DashBoard

React, TypeScript 공부중입니다.

![capture_dashBoard](https://user-images.githubusercontent.com/42853144/146757125-2f6d1364-eac8-4a01-981c-fd997e6a7ada.png)



* cors proxy 적용(createProxyMiddleware)


Components
 - Profile
 - Chart(Bar, Line) 전적검색과 데이터 연동필요
 - Card
 - Timer
    -- 제일 중요한 퇴근시간
 - Grid
 - SearchBar
    -- Search에 입력한 값을 토대로 Grid를 필터링함.
 - list 반응형 작업 필요
    -- listItem
 - Button 디자인 수정필요
 
### 작업중
api에서 응답한 championName을 기준으로 champion.png를 가져오는데 피들스틱만 매핑이 안됨.

    - championName: 'FiddleSticks'인데 png는 Fiddlesticks로 되어있음.. 아무래도 국가(ko_KR)/champion.json을 읽어 championId를 기준으로 매핑을 해야할꺼 같음

전적검색 반응형으로 구현 필요

전적검색 차트연동 필요

전적검색 예외처리 구현필요

전적검색 riot api Production Key 등록후 git Ignore 추가필요

전적검색 폰트 너무 못생김 수정 해야함

버튼 기본으로 했더니 못생김 수정 필요

### 햇갈리던것
오직 store에만 state를 저장할 수 있는지, redux가 아닌 기존 방식의 state는 사용하면 안되는지였다.
일단 정답은 둘다 동시 사용가능이다.
내가 예전에 react로 게임 전적 사이트를 만들때 자식(전적1개)에서 부모에 접근할떄 굉장히 귀찮게 매핑을 해서 접근했던것으로 기억난다. ex 검색하는 소환사명 접근

만약 검색하는 소환사명이 store에서 일괄로 관리했다면? 나는 접근하기 아주 편리했을것이고 매핑작업도 하지 않았을 것이다. 위에 문제를 해결하기 위해 나온것이 redux 이다.
그렇기에 무조건 store state를 사용하는것이 아닌 공유해야할 state만 따로 store에 저장하고 그렇지 않은것은 기존 state로 처리해야한다고 생각한다.

 명심하자 redux는 순수 함수여야 한다
 action must be plain objects. : redux 액션은 무조건 객체를 반환해야한다. async await는 함수다. 그렇기에 redux thunk를 사용해야 함수를 사용할 수 있게된다.
 redux thunk 적용 : 요청 -> redux thunk -> 함수체크 true -> 함수실행 -> dispatch ... 함수체크 false ->  객체 -> reducer
 redux thunk 미적용 : 요청 -> redux thunk -> 함수체크 true -> 에러 ... 함수체크 false ->  객체 -> reducer

### Memo
useEffect는 컴포넌트가 렌더링 된 이후에 실행됨
2번쨰 파라미터는 배열형태이며 2번쨰파라미터의 값이 변경될떄마다 함수가 실행됨(grid를 필터링할떄 selectValue를 파라미터로 집어넣어 사용해봄. 기억이 안날시 해당 소스 참조)

2번쨰 파라미터가 []일시 초기 1회만 초기값을로 설정됨
읽어볼 만한 내용:

https://ko.reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often

### `npm start`
시작.
