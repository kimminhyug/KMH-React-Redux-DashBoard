# KMH-React-Redux-DashBoard

React, TypeScript 공부중입니다.

![capture_dashBoard](https://user-images.githubusercontent.com/42853144/143545765-b1ddd2c5-eca0-4598-9194-858eeff2ed3e.jpg)

Components
 - Profile
 - Chart(Bar, Line)
 - Card
 - Timer
    -- 제일 중요한 퇴근시간
 - Grid
 - SearchBar
    -- Search에 입력한 값을 토대로 Grid를 필터링함.
 - list(작업중)
    -- listItem(작업중) 리그오브레전드 전적검색 api와 연동하여 활용할 예정
 - Button(작업중_redux_thunk) 
 - 
### 작업중
10개의 전적검색을 불러와서 테스트중이다.
그런데 useEffect의 deps를 잘못 설정하였는지 불필요한 렌더링이 발생하는것으로 보여... 리펙토링이 필요하다.
또한 현재 일부 UI를 하드코딩으로 진행하였기에 컴포넌트 단위로 다시 쪼개는 작업도 필요하다.
    
    
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
