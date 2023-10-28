<template>
  <div class="col-12 col-sm-3">
    <NuxtLink class="product-link" :to="`/product/${product.id}`">
      <div class="card" style="width: 18rem">
        <img :src="product.image" class="card-img-top" alt="cloth" />
        <div class="card-body">
          <h5 class="card-title">{{ product.category }}</h5>
          <p class="card-text">Rp{{ product.price }}</p>
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
export default {
  props: ["product"],
};
</script>

<style>
.product-link {
  text-decoration: none;
}
</style>