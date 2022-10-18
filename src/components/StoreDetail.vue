<template>
  <div class='row align-items-center justify-content-center text-center my-5 px-2 py-4 bg-white rounded store fadeIn'>
    <div class='col-12 col-md-auto'>
      <h3 class='title'>{{store.name}}</h3>
    </div>
    <div class='col-12 col-md-auto d-flex align-items-center justify-content-center'>
      <span class='stars'>{{store.stars}}</span>
      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='gold' class='ms-2 bi bi-star-fill'
        viewBox='0 0 16 16'>
        <path
          d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
      </svg>
    </div>
    <div class='col-12 mt-4 d-flex justify-content-center align-items-stretch gap-3 flex-wrap'>
      <ProductCard v-for='product of store.products' :storeId='store.id' :product='product' :key='product.id'
        :addToCart='addToCart' />
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
import ProductCard from '../components/ProductCard.vue'
// -------------------------------------------
export default {
  name: 'StoreView',
  props: {
    store: Object
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product)
    }
  },
  components: { ProductCard }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.store {
  width: 90%;
  margin: auto;
}

.title {
  font-weight: 400;
  font-size: 1.3rem;
  margin: 0 !important;
}

.stars {
  font-weight: 300;
  font-size: 1.2rem;
}
</style>