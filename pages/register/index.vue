<template>
  <div class="d-flex signup align-items-center">
    <div class="d-flex signup-container justify-content-center">
      <div class="col-4">
        <form class="signup-form-1" @submit.prevent="register">
          <h2>Sign up</h2>
          <p>Enter your details below</p>

          <div class="mb-3">
            <label for="exampleInputFullName" class="form-label"
              >Full Name</label
            >
            <input
              v-model="registerData.fullname"
              type="text"
              class="form-control"
              id="exampleInputFullName"
              aria-describedby="emailHelp"
              placeholder="John Doe"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputUsername" class="form-label"
              >Username</label
            >
            <input
              v-model="registerData.username"
              type="text"
              class="form-control"
              id="exampleInputUsername"
              aria-describedby="emailHelp"
              placeholder="John Doe"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              v-model="registerData.emailAdress"
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
              v-model="registerData.password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label"
              >Confirm Password</label
            >
            <input
              v-model="confirmPassword"
              type="password"
              class="form-control"
              id="exampleInputPassword2"
              placeholder="Re-Enter your password"
            />
          </div>

          <button type="submit" class="btn btn-primary button-signup">
            Submit
          </button>
          <p class="form-text">
            Already Have an Account?
            <nuxt-link to="/login">Log in</nuxt-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerData: {
        fullname: "",
        username: "",
        password: "",
        emailAdress: "",
      },
      confirmPassword: "",
    };
  },
  methods: {
    async register() {
      await this.$store.dispatch("getRegister", this.registerData);
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.signup {
  height: 90vh;
  width: 100%;
  padding: 20px 0;
  color: white;
}

.form-text {
  color: white;
}
.signup-container {
  width: 100%;
}
.signup-form-1 {
  border: 2px solid var(--primary);
  /* border-radius: 5%; */
  padding: 20px;
  background-color: var(--primary);
}

.button-signup {
  width: 100%;
  background: var(--accent);
}

.img-form {
  height: 100%;
  width: 100%;
}
</style>