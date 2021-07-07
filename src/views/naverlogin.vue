<template>
  <div>
    <div>안녕</div>
    <div v-show="!user.email" id="naverIdLogin"></div>
    <button v-show="user.email" @click="logout">로그아웃</button>
  </div>
</template>
<script>
// import axiios from "axios";
import axios from "axios";
export default {
  name: "",
  components: {},
  data() {
    return {
      naverLogin: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  setup() {},
  created() {},
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: "m1CnYXTpjx9fvf0S4M72", //개발자센터에 등록된 클라이언트아이디
      callbackUrl: "http://localhost:8080/naverlogin", // 개발자센터에 등록한 콜백유알엘
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 60 },
      //   그린, 화이트 . 타입 1 , 2 , 3
    });

    this.naverLogin.init();
    //init 이니셜라이즈 약자 초기화

    // this.naverLogin.getLoginStatus(function(status))
    // 함수 내에서 디스는 윈도우 객체 그래서 더이상 뷰 컴퍼넌트가 아니게 됨
    // 근데 컴퍼넌트가 필요함. (스코피가 필요)

    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log(status);
        console.log(this.naverLogin.user);

        this.$store.commit("user", this.naverLogin.user);
      }
    });
  },
  unmounted() {},
  methods: {
    logout() {
      const accessToken = this.naverLogin.accessToken.accessToken;
      const url =
        "/oauth2.0/token?grant_type=delete&m1CnYXTpjx9fvf0S4M72=jyvqXeaVOVmV&client_secret=SZVnKwrN2A&access_token=" +
        accessToken +
        "&service_provider=NAVER";

      axios.get(url).then((res) => {
        console.log(res);
        this.$store.commit("user", {});
        this.$router.push({ path: "/naverlogin" });
      });
    },
  },
};
</script>
