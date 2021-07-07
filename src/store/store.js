import {
    createStore
}
//뷰 전체에서 쓸 수ㅠ 있는 공통저장소
from 'vuex';

import persistedstate from 'vuex-persistedstate';

const store = createStore({
    state() {
        return {
            user: {},
            // count: 0,
            // cart: []
        }
    },
    mutations: {
        // increment(state) {
        //     state.count++;
        // },
        // addCart(state, data) {
        //     state.cart.push(data);
        //     state.count++;

        // }
        user(state, data) {
            state.user = data;
        },
    },
    plugins: [
        persistedstate({
            // paths: ["cart"]
            paths: ["user"]
        })
    ]
});

// persistedstate 영구보전하는 값으로 쓰겠다

export default store;
//전역 저장소

//다이렉트로 못바꾸고 뮤테이션 안의 함수를 통해서만 바꿀 수 있음 (state) 위에서 정의한 함수.

//  state()  데이터랑 용도가 똑같음. 모든ㄱ컼ㅁ포넌트에서 접근 가능한 데이터를 정의.쓰고싶으면 이곳에서 
//로그인 장바구니 같은 저장