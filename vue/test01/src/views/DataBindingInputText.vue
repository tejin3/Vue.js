<template>
    <div>
        <input type="text" v-model.number="num1" />
        <input type="number" v-model="num1" />
        <button @click="changeValue()">값 변경</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            txt1: "",  //양방향 으로 사용
            num1: 0,
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        changeValue(){
            var tx1 = "버튼실행";   //기존 자바스크립트 처럼 사용
            alert("버튼실행")
            console.log(this.txt1);
            this.txt1 = "South Korea";  //데이터에 정의한 변수는 무조건 this.으로 접근
        }
    }
}
</script>