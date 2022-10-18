<template>
  <div class='row text-center align-items-center justify-content-center my-2 bg-light py-2 w-100 m-auto rounded cart__item'>
    <div class='col-12 col-md-2 p-2 p-md-0'>
      <h5 class='text'>{{item.name}}</h5>
    </div>
    <div class='col-12 col-md-4 p-2 p-md-0 h-100'>
      <img :src='item.image' :alt='item.name' class='image'>
    </div>
    <div class='col-12 col-md-2 p-2 p-md-0'>
      <h5 class='text'>${{item.price - (item.price * item.discount / 100)}}</h5>
    </div>
    <div class='col-12 col-md-2 p-2 p-md-0'>
      <h5 class='text'>{{item.qty}}</h5>
    </div>
    <div class='col-12 col-md-2 p-2 p-md-0 position-relative'>
      <DeleteIcon :onclick='removeFromCart' />
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
import DeleteIcon from './DeleteIcon.vue';
// -------------------------------------------
export default {
  name: "CartItem",
  props: {
    item: Object
  },
  methods: {
    removeFromCart() {
      this.$store.dispatch('removeFromCart', this.item)
    }
  },
  components: { DeleteIcon }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.text {
  font-weight: 300;
}

.image {
  width: 150px;
  max-width: 100%;
  height: 100%;
  border-radius: 5px;
}

.cart__item{
  height: 100px;
}
</style>