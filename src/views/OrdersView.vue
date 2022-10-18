<template>
  <div class='container fadeIn bg-white p-3 rounded text-center'>
    <h4>Ordenes de {{this.$store.getters.getUser?.username}}</h4>
    <div v-if='this.$store.getters.getUser?.orders.length > 0'>
      <div class='bg-light rounded mx-2 my-4 py-3 row align-items-center justify-content-center'
        v-for='order of this.$store.getters.getUser?.orders' :key='order.id'>
        <div class='col-6'>
          <h5>Fecha:</h5>
          <p>{{order.date}}</p>
        </div>
        <div class='col-6'>
          <h5>Total:</h5>
          <p>${{order.total}}</p>
        </div>
      </div>
    </div>
    <div v-else class='my-5'>No se encontraron ordenes</div>
    <div>
      <button class='button button__secondary' @click='goBack()'>VOLVER</button>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// ---------------------
export default {
  name: 'OrdersView',
  data() {
    return {
    }
  },
  methods: {
    goBack() {
      this.$router.push('/')
    },
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>

</style>