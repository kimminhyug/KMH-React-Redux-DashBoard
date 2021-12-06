# KMH-React-Redux-DashBoard

React, TypeScript 공부중입니다.

![capture_dashBoard](https://user-images.githubusercontent.com/42853144/143545765-b1ddd2c5-eca0-4598-9194-858eeff2ed3e.jpg)

Components
 - Profile
 - Chart(Bar, Line)
 - Card
 - Timer
 - Grid(작업중)
 - SearchBar

## 확인해봐야 하는것
 - bindActionCreators, action 함수 : action에서 디스패치 되는 것들은  퓨어 함수구조여야함, 액션, 리듀서가 스테이트를 제어하는것으로 보임 , 렌더링 시점 확인 : state가 변할시 재 렌더링
 - 부모 자식관계가 아닌 다른 컴포넌트끼리 데이터 컨트롤은 어디까직 허용되는지
 - state에 이벤트를 넣어두어도 괜찮은지, 된다면 렌더링시 이벤트가 계속 add remove 되는건 아닌지, 퍼포먼스가 어떤지

### `npm start`
시작.
