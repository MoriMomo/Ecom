<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <h2>Settings</h2>
          <ul class="setting-option">
            <li>
              <a
                v-on:click="changeMenu('profile-detail')"
                href="#"
                class="setting-li profile-setting"
                >Profile Detail</a
              >
            </li>
            <li>
              <a
                v-on:click="changeMenu('change-password')"
                href="#"
                class="setting-li password-setting"
                >Change Password</a
              >
            </li>
            <li>
              <a
                v-on:click="changeMenu('product-wishlist')"
                href="#"
                class="setting-li Wishlist-setting"
                >Product Wishlist</a
              >
            </li>
          </ul>
        </div>
        <div class="col-8">
          <component v-bind:is="currentTab"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebHeader from "../../components/Header.vue";
import WebFooter from "../../components/Footer.vue";
import ProfileDetail from "../../components/user/ProfileDetail.vue";
import ChangePassword from "../../components/user/ChangePassword.vue";
import ProductWishlist from "../../components/user/ProductWishlist.vue";

export default {
  middleware: "auth",
  components: {
    WebHeader,
    WebFooter,
    ProfileDetail,
    ChangePassword,
    ProductWishlist,
  },
  data() {
    return {
      currentTab: "profile-detail",
    };
  },
  methods: {
    changeMenu(menu) {
      this.currentTab = menu;
    },
  },
};
</script>

<style>
.setting-option {
  list-style: none;
  padding-left: 0px;
}

.setting-li {
  text-decoration: none;
}
</style>