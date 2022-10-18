<template>
  <div>
    <div class='bg-light rounded px-5 py-3 text-center my-5 border border-secondary shadow fadeIn position-relative'
      v-if='product?.name && !isEditing && !confirmDelete'>
      <DeleteIcon v-if='this.$store.getters.getUser.admin' :onclick='openConfirmDelete' class='icon' />
      <h3 class='title'>{{product?.name}}</h3>
      <img :src='product.image' class='image'>
      <h5 class='text'>Precio: ${{product?.price - (product?.price * product?.discount / 100)}}</h5>
      <h5 class='text'>Ventas: {{product?.sales}}</h5>
      <h4 class='text' v-if='productInCartQty'>Cantidad en carrito: {{productInCartQty}}</h4>
      <div class='row align-items-center justify-content-center mt-4'>
        <div class='col-12 my-2 my-md-0 col-md-4'>
          <router-link to='/' class='text-white text-decoration-none'>
            <button class='w-100 button button__light'>
              Volver
            </button>
          </router-link>
        </div>
        <div class='col-12 my-2 my-md-0 col-md-4' v-if='this.$store.getters.getUser.admin'>
          <button class='w-100 button button__secondary' @click='edit()'>Editar</button>
        </div>
        <div class='col-12 my-2 my-md-0 col-md-4'>
          <QtyManager v-if='productInCartQty' :qty='productInCartQty' :product='product' />
          <button v-if='!productInCartQty' class='w-100 button button__primary'
            @click='addToCart(product)'>Agregar</button>
        </div>
      </div>
    </div>
    <!---->
    <Loading v-if='!product?.name && !isEditing' />
    <!---->
    <ProductForm v-if='isEditing' :cancel='cancel' :sumbit='sumbit' :initialProduct='product' />
    <!---->
    <ConfirmModal v-if='confirmDelete' message='Estas seguro que querés eliminar el producto?' action='Eliminar'
      :cancel='closeConfirmDelete' :confirm='deleteProduct' />
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
import axios from 'axios'
import { API_URL } from '../utils/api.js'
// -------------------------------------------
import Loading from '@/components/Loading.vue'
import ProductForm from '@/components/ProductForm.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'
import DeleteIcon from '@/components/DeleteIcon.vue'
import QtyManager from '@/components/QtyManager.vue'
// -------------------------------------------
export default {
  name: 'DetailView',
  data() {
    return {
      product: {},
      isEditing: false,
      status: '',
      confirmDelete: false
    };
  },
  beforeMount() {
    axios.get(`${API_URL}products/${this.$route.params.productId}`)
      .then(response => this.product = response.data)
      .catch(error => this.status = error.message)
  },
  computed: {
    productInCartQty() {
      return this.$store.getters.getCart.find(el => el.id === this.product.id)?.qty;
    }
  },
  methods: {
    edit() {
      this.isEditing = true
    },
    sumbit(product) {

      this.status = 'Realizando cambios'

      axios.put(`${API_URL}products/${this.product.id}`, product)
        .then(() => {
          this.status = ''
          this.isEditing = false
        })
        .catch(error => this.status = error.message)

    },
    cancel() {
      this.isEditing = false
    },
    deleteProduct() {
      this.$store.dispatch('deleteProduct', this.product.id)
      this.$router.push('/')
    },
    openConfirmDelete() {
      this.confirmDelete = true
    },
    closeConfirmDelete() {
      this.confirmDelete = false
    },
    addToCart(product) {
      this.$store.dispatch('addToCart', product)
    },
  },
  components: { Loading, ProductForm, ConfirmModal, DeleteIcon, QtyManager }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.title {
  margin-top: 2rem;
  font-size: 2.5rem;
  font-weight: 300;
}

.text {
  font-weight: 400;
}

.image {
  width: 200px;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin: 1rem 0;
}

.form {
  width: 80%;
  margin: auto;
}

.icon {
  position: absolute;
  top: 20px;
  right: 20px;
}

@media (min-width: 768px) {
  .form {
    width: 33%;
  }
}
</style>