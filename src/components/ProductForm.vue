<template>
  <form @submit.prevent class='bg-white p-4 rounded row align-items-center justify-content-center form fadeIn my-4'>
    <div class='col-12 mb-3' v-if='product.id'>
      <h5 class='text-center'>ID - {{product.id}}</h5>
    </div>
    <div class='col-12 mb-3' v-if='!product.id'>
      <h5 class='text-center'>Nuevo producto</h5>
    </div>
    <div class='col-12 col-md-6 mb-3'>
      <label for='name'>Nombre</label>
      <input required type='text' class='my-2 form-control' id='firstname' placeholder='Nombre' v-model='product.name'
        maxlength='20'>
    </div>
    <div class='col-12 col-md-6 mb-3'>
      <label for='price'>Precio</label>
      <input required type='number' class='my-2 form-control' id='price' placeholder='Precio' v-model='product.price'
        min='0' max='100'>
    </div>
    <div class='col-12 col-md-6 mb-3'>
      <label for='discount'>Porcentaje de descuento</label>
      <input required type='number' class='my-2 form-control' id='discount' placeholder='Porcentaje de descuento'
        min='0' max='100' v-model='product.discount'>
    </div>
    <div class='col-12 col-md-6 mb-3'>
      <label for='sales'>Ventas</label>
      <input required type='number' class='my-2 form-control' id='sales' placeholder='Ventas' v-model='product.sales'
        min='0'>
    </div>
    <div class='col-12 col-md-6 mb-3'>
      <label for='storeId'>Id de tienda</label>
      <input required type='number' class='my-2 form-control' id='storeId' placeholder='Id de tienda'
        v-model='product.storeId' min='0'>
    </div>
    <div class='col-12 col-md-6 mb-3'>
      <label for='image'>URL imagen</label>
      <input required type='text' class='my-2 form-control' id='image' placeholder='URL imagen' v-model='product.image'>
    </div>
    <div class='row mt-4 justify-content-around'>
      <div class='col-6'>
        <button class='btn btn-danger w-100' @click='cancel()'>Cancelar</button>
      </div>
      <div class='col-6'>
        <button class='btn btn-primary w-100' @click='sumbit(product)'>Enviar</button>
      </div>
    </div>
  </form>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
export default {
  name: 'ProductForm',
  data() {
    return {
      product: this.initialProduct || {}
    }
  },
  props: {
    cancel: Function,
    sumbit: Function,
    initialProduct: Object,
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>

</style>