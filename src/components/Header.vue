<template>
  <header class='header row align-items-center justify-content-between px-md-5'>
    <div class='col-6 position-relative cursor-pointer'>
      <router-link to='/' class='text-dark text-decoration-none'>
        <h1 class='title'>PeticiónIpsoFacto</h1>
      </router-link>
    </div>
    <div class='col-6 col-md-4 text-end fadeIn' v-if='this.$store.getters.getUser'>
      <div class='row justify-content-center align-items-center'>
        <div class='col-4'>
          <router-link to='/cart'>
            <CartIcon />
          </router-link>
        </div>
        <div class='col-4'>
          <router-link to='/orders'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"
              class="bi bi-clipboard-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z" />
            </svg>
          </router-link>
        </div>
        <div class='col-4'>
          <router-link to='/user'>
            <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='white'
              class='bi bi-person-circle cursor-pointer' viewBox='0 0 16 16'>
              <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
              <path fill-rule='evenodd'
                d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z' />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
import CartIcon from './CartIcon.vue'
// -------------------------------------------
export default {
  name: 'AppHeader',
  components: { CartIcon }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.title {
  font-size: 1.3rem !important;
  margin: 0 !important;
  color: #fff;
}
</style>