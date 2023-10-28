<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <img :src="productDetail.image" alt="" class="" />
        </div>
        <div class="col-4">
          <p>Rp{{ productDetail.price }}</p>
          <h3>{{ productDetail.name }}</h3>
          <ul class="d-flex justify-content-center" type="none">
            <li class="p-2">{{ productDetail.size }}</li>
            <li class="p-2">Very Good</li>
            <li class="p-2">Denpasar</li>
          </ul>
          <hr />
          <p>Item Description</p>
          <p>Size XI but fits more like M looser fit has few minork marks</p>
          <div class="d-flex">
            <ul type="none">
              <li>Category</li>
              <li>Size</li>
              <li>Color</li>
              <li>Uploaded</li>
              <li>Shipping</li>
            </ul>

            <ul type="none">
              <li>{{ productDetail.category }}</li>
              <li>{{ productDetail.size }}</li>
              <li>{{ productDetail.color }}</li>
              <li>20 Hours Ago</li>
              <li>Rp{{ productDetail.shipping }}</li>
            </ul>
          </div>

          <button class="btn btn-primary d-block button-detail">Buy now</button>

          <button class="btn btn-outline-success d-block button-detail">
            Add to Cart
          </button>

          <hr />

          <div>
            <img src="" alt="" />
            <p></p>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
            ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
            ><i class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebHeader from "../../../components/Header.vue";
import WebFooter from "../../../components/Footer.vue";

export default {
  async fetch() {
    console.log(this.$route.params.detail);
    await this.$store.dispatch("getProductDetail", this.$route.params.details);
    this.productDetail = this.$store.getters.getProductDetail;
  },
  data() {
    return {
      productDetail: {},
    };
  },
  components: {
    WebHeader,
    WebFooter,
  },
};
</script>

<style>
.button-detail {
  width: 100%;
  height: auto;
  margin: 10px;
  padding: 10px;
}
</style>