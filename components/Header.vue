<template>
  <header>
    <nav class="navbar-expand-lg container-fluid p-3 nav-color">
      <div class="container">
        <div class="row align-content-center justify-content-center">
          <div class="col-2">
            <nuxt-link to="/" class="navbar-brand" href="#"
              ><img src="../static/Logo Horizontal.svg" alt=""
            /></nuxt-link>
          </div>

          <div class="col-10" id="navbarSupportedContent">
            <div class="row">
              <div class="col-8">
                <form class="d-flex" role="search">
                  <input
                    class="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />

                  <button class="btn btn-outline-success ms-2" type="submit">
                    Search
                  </button>
                </form>
              </div>

              <div class="col-4">
                <div class="d-flex justify-content-end">
                  <ul class="navbar-nav justify-content-end">
                    <li class="shopping-bag nav-item align-self-center ms-5">
                      <i class="fa-solid fa-bag-shopping"></i>
                    </li>
                    <li class="heart align-self-center ms-5 nav-item">
                      <i class="fa-solid fa-heart"></i>
                    </li>

                    <li class="nav-item dropdown ms-5">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fa-solid fa-user"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li v-if="$store.getters.isAuthenticated">
                          <nuxt-link
                            to="/profile"
                            class="dropdown-item"
                            href="#"
                            >Profile</nuxt-link
                          >
                        </li>
                        <li v-if="token">
                          <a class="dropdown-item" href="#">Settings</a>
                        </li>
                        <li v-if="token"><hr class="dropdown-divider" /></li>
                        <li>
                          <nuxt-link
                            v-if="!$store.getters.isAuthenticated"
                            to="/login"
                            class="dropdown-item"
                            href="#"
                            >Login</nuxt-link
                          >
                          <a
                            v-else
                            to="/"
                            class="dropdown-item"
                            href="#"
                            v-on:click="logout"
                            >Logout</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown ms-5">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        EN
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">Indonesian</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">English</a>
                        </li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                          <a class="dropdown-item" href="#">Other</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>  

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
  },
  computed: {
    token() {
      return this.$store.getters.getUserToken;
    },
  },
};
</script>

<style>
.nav-color {
  background: var(--background);
  color: white;
}
</style>