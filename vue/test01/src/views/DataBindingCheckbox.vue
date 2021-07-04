<template>
    <div>
        <label><input type="checkbox" v-bind:value="seoul" v-model="cities" />서울</label>  
        <label><input type="checkbox" value="064" v-model="cities" />제주</label>
        <label><input type="checkbox" value="21" v-model="cities" />부산</label>
        <br>
        <div>선택한 지역: {{cities}}</div>
        <div>
            <label><input type="checkbox"></label>
        </div>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            cities: [],
            seoul: "02"  , //단방향 일때 v-bind: 로 접근 해서 변경 할 수있는데 : 만써도 됨  //기본적으로 바꿀 수 있는 속성하고만 연결가능
            citiList: [{
                v:"02", t:"서울"
            }

            ]
       };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>