<template>
    <div>
        <h1>hello, {{firstName}} {{lastName}} </h1>
        <h1>hello, {{firstName}} {{lastName}} </h1>
        <h1>hello, {{firstName}} {{lastName}} </h1>
        <h1>hello, {{firstName}} {{lastName}} </h1>
        <h1>hello, {{firstName}} {{lastName}} </h1>
        <h1>hello, {{firstName}} {{lastName}} </h1>
        <h1>hello2, {{fullName}} </h1>
        <input type="text" v-model="firstName">
        <input type="text" v-model="lastName">



    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            firstName: "TaeJin",
            lastName: "Jang"
        };
    },
    
    computed:{ //계산
        fullName(){
           return this.firstName + " " + this.lastName
        },
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>