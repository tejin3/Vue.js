<template>
    <h1>{{ title }} (<small>{{title2}}</small>) </h1>
</template>
<script>
export default {
    name: "",
    components: {},
    props: {
        title:{
            type: String,
            default: "페이지 제목1",
        },
          title2:{
            type: String,
            default: "페이지 제목",
        }
    }
};
</script>
<style scoped>
.page-title{
    border-left: 4px solid red;
    padding-left: 5px;
}
</style>