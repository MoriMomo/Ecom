<template>
  <div>
    <div class="container">
      <div class="row justify-content-center align-items-center login">
        <div class="col-4">
          <form class="login-form" @submit.prevent="login">
            <h2>Login to Vintage</h2>
            <p>Enter your details below</p>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                v-model="loginData.emailAdress"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="hello@123mail.com"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                v-model="loginData.password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" class="btn btn-primary button-login">
              Submit
            </button>
            <p class="form-text">
              Don't Have an Account?
              <nuxt-link to="/register">Sign Up</nuxt-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        emailAdress: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch("getLogin", this.loginData);
      this.$router.push("/profile");
    },
  },
};
</script>

<style scoped>
.login {
  height: 90vh;
}

.login-form {
  border: 2px solid var(--accent);
  border-radius: 5%;
  padding: 20px;
}

.button-login {
  width: 100%;
}
</style>>

