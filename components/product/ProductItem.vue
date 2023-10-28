<template>
  <div class="col-12 col-sm-3">
    <NuxtLink class="product-link" to="/details">
      <div class="card" style="width: 18rem">
        <img
          src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441599/item/goods_57_441599.jpg?width=494"
          class="card-img-top"
          alt="cloth"
        />
        <div class="card-body">
          <h5 class="card-title">Green Shirt</h5>
          <p class="card-text">Rp 150.000</p>
        </div>
        <div class="card-body">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {};
</script>

<style>
.product-link {
  text-decoration: none;
}
</style>