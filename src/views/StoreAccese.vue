<template>
    <div>
        <p>{{count}}</p>
        <!-- <p>{{cart.toString()}}</p> -->
        <button @click="imcrementCount"
        >장바구니증가</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            sampleData: ""
        };
    },
    computed:{
        count(){
            return this.$store.state.count;
        },
        cart(){
            return this.$store.state.cart;
        }
    },
    setup() {},
    created() {},
    updated(){
        console.table(this.cart)
    },
    mounted() {},
    unmounted() {},
    methods: {
        imcrementCount(){
            this.$store.commit("addCart", {productId: "1", productName:"마우스", price:"12000"});
            // 커밋을 통해서만 접근
        }
    }
}
</script>