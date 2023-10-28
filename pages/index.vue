<template>
  <div>
    <main>
      <div class="banner container-fluid">
        <div class="banner-text container">
          <h1>The Best Clothing</h1>
          <h2>Suits, shirts, pants, you name it</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            voluptas dolore rem similique quae.
          </p>

          <button class="button-banner-text">Learn More</button>
        </div>
      </div>

      <h1 class="title-product">SALE SALE SALE</h1>
      <div class="product container">
        <div class="row gy-5">
          <product-item
            v-for="product in products"
            :key="product.id"
            :product="product"
          ></product-item>
        </div>
      </div>
      <div class="container"></div>
    </main>
  </div>
</template>

<script>
import WebHeader from "../components/Header.vue";
import WebFooter from "../components/Footer.vue";
import ProductItem from "../components/product/ProductItem.vue";

export default {
  async fetch() {
    await this.$store.dispatch("getProduct");
    this.products = this.$store.getters.getProduct;
  },
  data() {
    return {
      products: [],
    };
  },
  components: {
    WebHeader,
    WebFooter,
    ProductItem,
  },
};
</script>

<style>
:root {
  --text: #fffffe;
  --background: #232946;
  --primary: #0f3a6c;
  --secondary: #f7e0c5;
  --accent: #1d72d3;
  --fontDidact: "Didact Gothic", sans-serif;
  --fontGarmomd: "EB Garamond", serif;
  --fontPoppins: "Poppins", sans-serif;
  --fontRoboto: "Roboto", sans-serif;
}

.banner {
  background-image: url(../static/pexels-sumit-kapoor-605208.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  padding: 80px 0px;
}

main {
  background: var(--background);
}
.product {
  padding: 50px 0;
}

.banner-text {
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 65%;
  height: 100%;
}

.button-banner-text {
  width: 20%;
  /* height: 40px; */
  /* padding: 1rem; */
  display: inline-block;
  background: var(--accent);
  color: white;
  border-radius: 20px;
  border: 2px solid var(--accent);
  padding: 10px;
}

.title-product {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fffffe;
  padding-top: 50px;
}
</style>