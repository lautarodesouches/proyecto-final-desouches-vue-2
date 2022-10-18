<template>
  <div>
    <form class='form bg-white rounded p-3 my-5 fadeIn' @submit.prevent='validateForm()'
      v-if='!this.$store.getters.getLoading'>
      <div class='form-group mb-3'>
        <label for='firstname'>Nombre</label>
        <input type='text' class='my-2 form-control' id='firstname' placeholder='Nombre' v-model='firstname'>
      </div>
      <div class='form-group mb-3'>
        <label for='lastname'>Apellido</label>
        <input type='text' class='my-2 form-control' id='lastname' placeholder='Apellido' v-model='lastname'>
      </div>
      <div class='form-group mb-3'>
        <label for='user'>Usuario</label>
        <input type='text' class='my-2 form-control' id='user' placeholder='Usuario' v-model='username.value'
          maxlength='10'>
        <small id='userHelp' class='form-text text-danger' v-if='username.error'>* {{username.error}}</small>
      </div>
      <div class='form-group mb-3'>
        <label for='password'>Contraseña</label>
        <input type='password' class='my-2 form-control' id='password' placeholder='Contraseña' v-model='password.value'
          maxlength='15'>
        <small id='passwordHelp' class='form-text text-danger' v-if='password.error'>* {{password.error}}</small>
      </div>
      <div class='form-group mb-3'>
        <label for='repeatPassword'>Repetir contraseña</label>
        <input type='password' class='my-2 form-control' id='repeatPassword' placeholder='Repetir contraseña'
          v-model='repeatPassword.value' maxlength='15'>
        <small id='repeatPasswordHelp' class='form-text text-danger' v-if='repeatPassword.error'>*
          {{repeatPassword.error}}</small>
      </div>
      <div class='d-flex justify-content-center'>
        <button type='submit' class='btn btn-primary' v-if='!this.$store.getters.getLoading'>Registrarse</button>
      </div>
      <div class='mt-4 text-center'>
        <span>
          Tenés cuenta?
          <router-link to='/login' class='text-primary text-decoration-none fw-bold'>Ingresar</router-link>
        </span>
      </div>
    </form>
    <!---->
    <Loading v-if='this.$store.getters.getLoading' />
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
import axios from 'axios'
import { API_URL } from '../utils/api.js'
import Loading from '@/components/Loading.vue'
// -------------------------------------------
export default {
  name: 'RegisterView',
  data() {
    return {
      firstname: '',
      lastname: '',
      username: { value: '', error: '' },
      password: { value: '', error: '' },
      repeatPassword: { value: '', error: '' }
    };
  },
  methods: {
    resetValues() {
      this.firstname = '';
      this.lastname = '';
      this.username.value = '';
      this.password.value = '';
      this.repeatPassword.value = '';
    },
    resetErrors() {
      this.username.error = '';
      this.password.error = '';
      this.repeatPassword.error = '';
    },
    finishLoading() {
      this.$store.dispatch('finishLoading')
    },
    addUser() {

      this.$store.dispatch('startLoading')

      let newUser = {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username.value,
        password: this.password.value
      }

      axios.get(`${API_URL}users`)
        .then(res => {

          if (res.data.find(user => user.username === newUser.username)) {

            return this.username.error = 'El usuario ya existe'
          }
          axios.post(`${API_URL}users`, newUser)
            .then(res => {

              if (res.status !== 201) throw new Error('Ha ocurrido un error')

              localStorage.setItem('user', JSON.stringify({
                username: res.data.username,
                id: res.data.id,
                admin: res.data.admin
              }));
              this.resetValues()
              this.$store.dispatch('setNotification', 'Se ha registrado correctamente')
              this.finishLoading()
              this.$router.push('/')

            })

        })
        .catch(error => {
          this.$store.dispatch('setNotification', error.message)
          this.finishLoading()
        })
    },
    validateForm() {
      this.resetErrors();
      let required = 'El campo es requerido';
      if (this.username.value === '')
        return this.username.error = required;
      if (this.password.value === '')
        return this.password.error = required;
      if (this.repeatPassword.value === '')
        return this.repeatPassword.error = required;
      if (!RegExp('^[a-z0-9_-]{3,10}$').test(this.username.value)) {
        return this.username.error = 'El usuario solo debe contener letras y numeros. Y debe contener al menos 3 carácteres';
      }
      if (!RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,}$').test(this.password.value)) {
        return this.password.error = 'La contraseña debe tener mínimo cuatro caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial';
      }
      if (this.password.value !== this.repeatPassword.value) {
        return this.repeatPassword.error = 'Las contraseñas no coinciden';
      }
      this.addUser();
    }
  },
  components: { Loading }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.form {
  width: 400px;
  max-width: 100%;
}
</style>