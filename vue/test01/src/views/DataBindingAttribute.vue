<template>
    <div>
        <img v-bind:src="imgSrc" alt="" />
        <img :src="imgSrc" alt="" />

    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            imgSrc: "https://v3.vuejs.org/logo.png"
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>