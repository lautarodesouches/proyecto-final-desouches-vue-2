<template>
  <div>
    <div class='fadeIn text-center bg-white p-4 rounded box' v-if='this.$store.getters.getUser?.username && !isEditing'>
      <div class='row align-items-center justify-content-center'>
        <div class='col-6'>
          <h4>ID: {{this.$store.getters.getUser?.id}}</h4>
        </div>
        <div class='col-6'>
          <h4>{{this.$store.getters.getUser?.username}}</h4>
        </div>
      </div>
      <div class='my-4'>
        <h4>{{this.$store.getters.getUser?.lastname}}, {{this.$store.getters.getUser?.firstname}}</h4>
      </div>
      <div class='row align-items-center justify-content-around mt-5'>
        <div class='col-4'>
          <button class='w-100 button button__light' @click='goBack()'>Volver</button>
        </div>
        <div class='col-4'>
          <button class='w-100 button button__secondary' @click='openForm()'>Editar</button>
        </div>
        <div class='col-4'>
          <button class='w-100 button button__primary' @click='logout()'>Cerrar sesión</button>
        </div>
      </div>
    </div>
    <div v-if='!this.$store.getters.getUser?.username'>
      <Loading />
    </div>
    <div v-if='isEditing' class='fadeIn bg-white p-4 rounded'>
      <form @submit.prevent>
        <div class='form-group mb-3'>
          <label for='name'>Nombre</label>
          <input type='text' class='my-2 form-control' id='name' placeholder='Nombre' v-model='form.firstname'>
        </div>
        <div class='form-group mb-3'>
          <label for='lastname'>Apellido</label>
          <input type='text' class='my-2 form-control' id='lastname' placeholder='Apellido' v-model='form.lastname'>
        </div>
        <div class='form-group mb-3'>
          <label for='user'>Usuario</label>
          <input type='text' class='my-2 form-control' id='user' placeholder='Usuario' v-model='form.username'
            maxlength='10'>
        </div>
        <div class='form-group mb-3'>
          <label for='password'>Contraseña</label>
          <input type='password' class='my-2 form-control' id='password' placeholder='Contraseña'
            v-model='form.password' maxlength='15'>
        </div>
        <div class='form-group mb-3' v-if='this.$store.getters.getUser.admin'>
          <label for='admin'>Admin</label>
          <input type='checkbox' id='admin' v-model='form.admin' class='d-block mt-2'>
        </div>
        <div class='row justify-content-center mt-4' v-if='!form.status'>
          <div class='col-6'>
            <button class='button button__light w-100' @click='cancel()'>Cancelar</button>
          </div>
          <div class='col-6'>
            <button class='button button__primary w-100' @click='edit()'>Editar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
import axios from 'axios'
import { API_URL } from '../utils/api.js'
// -------------------------------------------
import Loading from '@/components/Loading.vue'
// -------------------------------------------
export default {
  name: 'UserView',
  data() {
    return {
      isEditing: false,
      form: {}
    }
  },
  methods: {
    goBack() {
      this.$router.push('/')
    },
    logout() {
      this.$store.dispatch('setUser', null)
      this.$router.push('/login')
    },
    openForm() {
      this.form = this.$store.getters.getUser
      this.form.status = ''
      this.isEditing = true
    },
    edit() {

      this.form.status = 'Procesando'
      this.$store.dispatch('setNotification', 'Procesando')

      axios.put(`${API_URL}users/${this.$store.getters.getUser.id}`, this.form)
        .then(() => this.isEditing = false)
        .catch(error => this.$store.dispatch('setNotification', error.message))
        .finally(() => this.form.status = '')

    },
    cancel() {
      this.isEditing = false
    }
  },
  components: { Loading }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.text {
  font-weight: 400;
}

.box {
  width: 450px;
  max-width: 100%;
}
</style>