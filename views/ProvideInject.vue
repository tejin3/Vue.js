<template>
    <div>
        <Provide />
    </div>
</template>
<script>
import Provide from '../components/ProvideInjectChild.vue';
export default {
    name: "",
    components: {Provide},
    data() {
        return {
            itmes: ['A','B'],
        };
    },
    provide(){
        return {
            itmeLength: this.itmes.length,
            // 나는 이거 무조건 줄게 쓸사람이 써
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>