<template>
  <div>
    <div class="container">
      <div class="justify-content-center align-items-center profile">
        <form class="profile-detail" @submit.prevent="submit">
          <div class="mb-3">
            <img :src="userData.image" alt="" class="profile-img" />
            <label for="userImage" class="form-label text-profile"
              >Profile Image</label
            >

            <input
              type="file"
              class="form-control profile-button"
              id="userImage"
              placeholder="John Doe"
              v-on:change="changeImg($event)"
            />
          </div>

          <hr />

          <div class="mb-3">
            <label for="FullName" class="form-label">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="FullName"
              placeholder="John Doe"
              v-model="userData.fullName"
            />
          </div>

          <div class="mb-3">
            <label for="Username" class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="Username"
              placeholder="John Doe"
              v-model="userData.userName"
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="hello@123mail.com"
              v-model="userData.email"
              disabled
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <button type="submit" class="btn btn-primary button-login">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {},
    };
  },
  mounted() {
    const userData = this.$store.getters.getUserData;
    this.userData = userData;
  },
  methods: {
    changeImg(img) {
      const dataImg = img.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(dataImg);
      reader.addEventListener("load", () => {
        this.userData.image = reader.result;
      });
      console.log(dataImg);
    },
    async submit() {
      await this.$store.dispatch("editUser", this.userData);
    },
  },
};
</script>

<style>
.profile-button {
  display: none;
}

.text-profile {
  border: 2px solid var(--accent);
  background: var(--accent);
  padding: 10px;
  border-radius: 15px;
  color: white;
  cursor: pointer;
}

.profile-img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
</style>