<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <img
            src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441599/item/goods_57_441599.jpg?width=494"
            alt=""
            class=""
          />
        </div>
        <div class="col-4">
          <p>Rp200.000</p>
          <h3>Green Short Sleeve Shirt</h3>
          <ul class="d-flex justify-content-center" type="none">
            <li class="p-2">8/M</li>
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
              <li>Hoodies and Sweater</li>
              <li>8/M</li>
              <li>White</li>
              <li>5 Hours</li>
              <li>Rp11.000</li>
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
import WebHeader from "../../components/Header.vue";
import WebFooter from "../../components/Footer.vue";

export default {
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