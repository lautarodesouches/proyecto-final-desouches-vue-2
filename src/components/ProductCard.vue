<template>
  <div class='card px-2 py-3 rounded shadow'>
    <h5 class='title'>{{product.name}}</h5>
    <img :src='product.image' class='image' loading='lazy'>
    <h5 class='price'>${{product.price - (product.price * product.discount / 100)}}</h5>
    <div class='row justify-content-center align-items-stretch'>
      <div class='col-6'>
        <router-link :to='`/product/${storeId}/${product.id}`' class='text-white text-decoration-none'>
          <button class='button button__secondary'>
            Detalle
          </button>
        </router-link>
      </div>
      <div class='col-6'>
        <qty-manager :qty='productInCartQty' :product='product' />
      </div>
    </div>
    <div v-if='productInCartQty' class='qty fadeIn'>{{productInCartQty}}</div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
import QtyManager from "./QtyManager.vue";
// -------------------------------------------
export default {
  name: "ProductCard",
  props: {
    storeId: String,
    product: Object
  },
  data() {
    return {
      price: this.product.price - (this.product.price * this.product.discount / 100)
    }
  },
  computed: {
    productInCartQty() {
      return this.$store.getters.getCart.find(el => el.id === this.product.id)?.qty;
    }
  },
  components: { QtyManager }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  min-height: 200px;
  transition: all 1s;
  background: #f5f5f5;
  border: 1px solid #000;
}

.card:hover {
  color: #fff;
  border: 1px solid var(--primary-bg);
  transform: translateY(-5px);
  background-color: var(--primary-bg);
}

.title,
.price {
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.image {
  max-width: 100%;
  max-height: 100px;
  border-radius: 5px;
  margin: 1rem 0;

}

@media (max-width: 768px) {
  .card {
    width: 100%;
  }
}
</style>

<style>
.qty {
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: #000;
  color: #fff;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.card:hover .button__primary,
.card:hover .button__plus {
  background-color: #fff;
  color: var(--primary-bg);
}
</style>