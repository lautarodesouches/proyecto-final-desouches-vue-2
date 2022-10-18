<template>
  <div>
    <form class='form bg-white rounded p-3 my-5 fadeIn' @submit.prevent='validateForm()'
      v-if='!this.$store.getters.getLoading'>

      <div class='bg-dark rounded w-100 text-center text-white'>
        <h5>Credenciales</h5>
        <div class='row'>
          <div class='col-4 p-0'>
            <p>Usuario</p>
            <p>Contraseña</p>
            <p>Admin</p>
          </div>
          <div class='col-4 p-0'>
            <p>test</p>
            <p>test</p>
            <p>Si</p>
          </div>
          <div class='col-4 p-0'>
            <p>tost</p>
            <p>tost</p>
            <p>No</p>
          </div>
        </div>
      </div>

      <div class='form-group my-3'>
        <label for='loginUser'>Usuario</label>
        <input type='text' class='my-2 form-control' id='loginUser' placeholder='Usuario' maxlength='10'
          v-model='username.value' required>
        <small id='loginUserHelp' class='form-text text-danger' v-if='username.error'>* {{username.error}}</small>
      </div>
      <div class='form-group mb-3'>
        <label for='password'>Contraseña</label>
        <input type='password' class='my-2 form-control' id='loginPassword' placeholder='Contraseña' maxlength='15'
          v-model='password.value' required>
        <small id='loginPasswordHelp' class='form-text text-danger' v-if='password.error'>* {{password.error}}</small>
      </div>
      <div class='d-flex justify-content-center'>
        <button type='submit' class='btn btn-primary'>Ingresar</button>
      </div>
      <div class='mt-4 text-center'>
        <span>
          No tenés cuenta?
          <router-link to='/register' class='text-primary text-decoration-none fw-bold'>Registrarme</router-link>
        </span>
      </div>
    </form>
    <!---->
    <Loading v-if='this.$store.getters.getLoading' />
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// ----------------------------------------------------
import axios from 'axios'
import { API_URL } from '../utils/api.js'
// ----------------------------------------------------
import Loading from '@/components/Loading.vue'
// ----------------------------------------------------
export default {
  name: 'LoginView',
  props: {},
  data() {
    return {
      username: { value: 'test', error: '' },
      password: { value: 'test', error: '' }
    };
  },
  methods: {
    resetValues() {
      this.username.value = ''
      this.password.value = ''
    },
    resetErrors() {
      this.username.error = ''
      this.password.error = ''
    },
    finishLoading() {
      this.$store.dispatch('finishLoading')
    },
    validateForm() {
      this.resetErrors();
      this.$store.dispatch('startLoading')
      axios.get(`${API_URL}users`)
        .then(response => {
          let user = response.data.find(user => user.username === this.username.value)

          if (!user) {
            this.finishLoading()
            return this.username.error = 'Usuario no existe'
          }

          if (this.password.value !== user.password) {
            this.finishLoading()
            return this.password.error = 'Contraseña inválida'
          }

          this.$store.dispatch('setUser', user)
          this.resetValues()
          this.$router.push('/')
        })
        .catch(error => {
          this.$store.dispatch('setNotification', error.message)
          this.finishLoading()
        })
    }
  },
  components: { Loading }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
p {
  margin: 0 !important;
  border: 1px solid #fff;
}

.form {
  width: 400px;
  max-width: 100%;
}
</style>