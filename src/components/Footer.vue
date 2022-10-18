<template>
  <footer class='footer row align-items-center justify-content-center text-center'>
    <div class='col-12 col-md-6'>
      {{date.getDate()}}/{{date.getMonth() + 1}}/{{date.getFullYear()}}
    </div>
    <div class='col-12 col-md-6'>
      <span>Proyecto final Vue</span>
    </div>
  </footer>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
export default {
  name: 'AppFooter',
  data() {
    return {
      date: new Date(),
    }
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>

</style>