<template>
  <div>
    <h1>{{ user.email ? "로그인 성공!" : "로그인 후 사용하세요." }}</h1>
    <a v-show="!user.email" id="custom-login-btn" @click="kakaoLogin()">
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="222"
      />
    </a>
    <button v-show="user.email" @click="kakaoLogout">카카오 로그아웃</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_nickname,account_email,gender",
        success: this.getKakaoAccount,
        fail: function (error) {
          console.log(error);
        },
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakaoAccount = res.kakao_account;
          console.log(kakaoAccount);

          this.$store.commit("user", kakaoAccount);
          //   this.$store2.commit("user", kakaoAccount);
          //   스토어에 접근할때 명령어는 무조건 $store.commit 파일이름 store2라고 store2로 쓰면 안됨.
          // 메인에 폴더만 제대로 잡아주면 됨
        },
      });
    },
    kakaoLogout() {
      if (!window.Kakao.Auth.getAccessToken()) {
        console.log("Not logged in.");
        return;
      }
      //로그인 되었는지 확인

      window.Kakao.Auth.logout((res) => {
        //펑션 빼고 ()안에res
        console.log(Kakao.Auth.getAccessToken());
        console.log(res);
        this.$store.commit("user", {});
      });
    },
  },
};
</script>
