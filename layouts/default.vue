<template>
  <div>
    <web-header> </web-header>
    <Nuxt />
    <web-footer> </web-footer>
  </div>
</template>

<script>
import WebHeader from "../components/Header.vue";
import WebFooter from "../components/Footer.vue";

export default {
  components: {
    WebHeader,
    WebFooter,
  },
};
</script>

<style>
body::-webkit-scrollbar {
  display: none;
}
:root {
  --text: #1b1004;
  --background: #fbeee0;
  --primary: #0f3a6c;
  --secondary: #f7e0c5;
  --accent: #1d72d3;
  --fontDidact: "Didact Gothic", sans-serif;
  --fontGarmomd: "EB Garamond", serif;
  --fontPoppins: "Poppins", sans-serif;
  --fontRoboto: "Roboto", sans-serif;
}
</style>