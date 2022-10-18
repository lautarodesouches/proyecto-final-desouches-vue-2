<template>
  <form @submit.prevent class='bg-white p-4 rounded row align-items-start justify-content-center form fadeIn my-4'>
    <div class='col-12 mb-3' v-if='store.id'>
      <h5 class='text-center'>ID - {{store.id}}</h5>
    </div>
    <div class='col-12 mb-3' v-if='!store.id'>
      <h5 class='text-center'>Nueva tienda</h5>
    </div>
    <div class='col-12 col-md-6 mb-3'>
      <label for='name'>Nombre</label>
      <input required type='text' class='my-2 form-control' id='firstname' placeholder='Nombre' v-model='store.name'>
    </div>
    <div class='col-12 col-md-6 mb-3'>
      <label for='stars'>Estrellas</label>
      <input required type='number' class='my-2 form-control' id='stars' placeholder='Estrellas' v-model='store.stars'
        max='5' min='0'>
      <span class='text-secondary'>*De 0 a 5 estrellas</span>
    </div>
    <div class='row mt-4 justify-content-around'>
      <div class='col-6'>
        <button class='btn btn-danger w-100' @click='cancel()'>Cancelar</button>
      </div>
      <div class='col-6'>
        <button class='btn btn-primary w-100' @click='sumbit(store)'>Enviar</button>
      </div>
    </div>
    <span class='text-center mt-4' v-if='status'>* {{status}}</span>
  </form>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
export default {
  name: 'storeForm',
  data() {
    return {
      store: this.initialStore || {}
    }
  },
  props: {
    cancel: Function,
    sumbit: Function,
    initialStore: Object,
    status: String
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>

</style>