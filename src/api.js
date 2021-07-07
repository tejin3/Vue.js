import axios from "axios";

export default {
  mounted() {
    console.log("믹스인 컴포넌트");
  },
  //   methods: {
  //     //  서버에  보낼때는 post 받을때는 get
  //     async $callAPI(url, method, data) {
  //         return (await axios({
  //             method: method,
  //             url: url,
  //             data: data
  //         }).catch(e => {
  //             console.log(e)
  //         })).data;
  //     },
  //     $hello() {
  //       return console.log("믹스인");
  //     },
  //   },
};
// main.js 에 저장하면 전체에서 사용할 수 있다.
// 똑같은 코드를 여러 곳에서 쓸 경우 한곳에서만 함수를 정의하고 수정도 한곳에서만 할 수 있게 하는 기능 믹스인기능
// 알아서 그 위치에 들어간다.
// 다수의 컴포넌트에 들어갈 확률이 높은 함수
// 어디서 가져온 것인지 확인 할 수 있게 자신만의 규칙을 정해둔다. 함수 이름 맨 앞에 $표시
// $adfada()
// 마운트 시작시간 기록, 언마운트 시간 기록 , 사용자가 어느 페이지에 얼만큼 머물렀는지 확인 가능
