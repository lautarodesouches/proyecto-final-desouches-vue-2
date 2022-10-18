<template>
  <div>
    <button v-if='!qty' class='button button__primary fadeIn' @click='addToCart()'>Agregar</button>
    <div v-if='qty' class='buttons fadeIn'>
      <div class="button__container">
        <button class='button button__less' @click='subQty()'>-</button>
      </div>
      <div class="button__container">
        <button class='button button__plus' @click='addToCart()'>+</button>
      </div>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
export default {
  name: 'QtyManager',
  props: {
    qty: Number,
    product: Object
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.product);
    },
    subQty() {
      this.$store.dispatch("removeOneItemToProductInCart", this.product);
    }
  },
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.buttons {
  display: flex;
  align-items: stretch;
  gap: 5px;
  height: 100%;
}

.button__container {
  width: 100%;
}

.button__less {
  background: #e1e1e1;
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  height: 100%;
}

.button__plus {
  background: var(--primary-bg);
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  height: 100%;
}
</style>