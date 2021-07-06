<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// 임폴트에서 골뱅이 최상위로 올라감
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
