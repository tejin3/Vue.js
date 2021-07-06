<template>
    <div></div>
</template>
<script>
export default {
    
    
    inject: ["itmeLength"],
    
    // 주는거 받고싶을때 inje
    mounted() {
        console.log(itmeLength);
    }
}
</script>