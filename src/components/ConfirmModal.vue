<template>
  <div class='text-center bg-white fadeIn p-4 rounded'>
    <h5>{{message}}</h5>
    <div class='row mt-4'>
      <div class='col-6'>
        <button class='btn btn-secondary' @click='cancel()'>Cancelar</button>
      </div>
      <div class='col-6'>
        <button class='btn btn-danger' @click='confirm()'>{{action}}</button>
      </div>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
export default {
  name: 'ConfirmModal',
  props: {
    message: String,
    action: String,
    cancel: Function,
    confirm: Function,
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>

</style>