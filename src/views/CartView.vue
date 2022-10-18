<template>
  <div class='w-100 h-100 fadeIn'>
    <div class='text-center my-5 w-100 px-5' v-if='this.$store.getters.getCart.length > 0'>
      <div>
        <h2>Carrito</h2>
      </div>
      <div class='my-5 w-100'>
        <div class='row text-center mb-3'>
          <div class='col-12 col-md-2'>
            <h5>Nombre</h5>
          </div>
          <div class='col-12 col-md-4'>
            <h5>Imagen</h5>
          </div>
          <div class='col-12 col-md-2'>
            <h5>Precio</h5>
          </div>
          <div class='col-12 col-md-2'>
            <h5>Cantidad</h5>
          </div>
          <div class='col-12 col-md-2'>
            <h5>Eliminar</h5>
          </div>
        </div>
        <CartItem v-for='item of this.$store.getters.getCart' :item='item' :key='item.id' />
      </div>
      <div>
        <h5 class='text'>Subtotal: ${{this.$store.getters.getCartSubtotal}}</h5>
        <h5 class='text'>Envio: ${{shippingCost}}</h5>
        <h4>Total: ${{this.$store.getters.getCartSubtotal + this.shippingCost}}</h4>
        <div class='row align-items-center justify-content-center'>
          <div class='col-12 my-2 my-md-0 col-md-3'>
            <button class='w-100 button button__light mt-3' @click='goBack()'>Volver</button>
          </div>
          <div class='col-12 my-2 my-md-0 col-md-3'>
            <button class='w-100 button button__primary mt-3 text-white' @click='goCheckout()'>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if='this.$store.getters.getCart.length < 1' class='text-center my-5 fadeIn'>
      <h2>El carrito se encuentra vacío</h2>
      <button class='button button__light mt-3' @click='goBack()'>Volver</button>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// ---------------------
import { SHIPPING_COST } from '@/utils/constants'
import CartItem from '../components/CartItem.vue'
// ---------------------
export default {
  name: 'CartView',
  data() {
    return {
      shippingCost: SHIPPING_COST,
      cart: [],
    }
  },
  methods: {
    goBack() {
      this.$router.push('/')
    },
    goCheckout() {
      this.$router.push('/checkout')
    }
  },
  components: { CartItem }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.text {
  font-weight: 400;
}
</style>