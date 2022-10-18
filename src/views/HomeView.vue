<template>
  <div>
    <!---->
    <Loading v-if='this.$store.getters.getLoading' />
    <!---->
    <div v-if='!this.$store.getters.getLoading && !addingStore && !addingProduct'>
      <div class='row justify-content-around buttons-container m-auto mt-3' v-if='this.$store.getters.getUser?.admin'>
        <!---->
        <AddButton text='tienda' @click='openStoreForm()' />
        <!---->
        <AddButton text='producto' @click='openProductForm()' />
        <!---->
      </div>
      <StoreDetail v-for='store in this.$store.getters.getStores' :store='store' :key='store.id' />
    </div>
    <!---->
    <ProductForm v-if='addingProduct' :cancel='cancelProduct' :sumbit='addProduct' />
    <!---->
    <StoreForm v-if='addingStore' :cancel='cancelStore' :sumbit='addStore' />
    <!---->
    <div v-if='addedToCart' class='bg-primary text-white position-fixed top-0 end-0 py-1 px-3 rounded m-5 '>
      <h5>Se ha añadido un producto al carrito</h5>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// ---------------------------------------------------------
import StoreDetail from '@/components/StoreDetail.vue'
import Loading from '@/components/Loading.vue'
import AddButton from '@/components/AddButton.vue'
import ProductForm from '@/components/ProductForm.vue'
import StoreForm from '../components/StoreForm.vue'
// ---------------------------------------------------------
export default {
  name: 'HomeView',
  data() {
    return {
      addingStore: false,
      addingProduct: false,
      addedToCart: false
    }
  },
  methods: {
    cancelStore() {
      this.addingStore = false
    },
    cancelProduct() {
      this.addingProduct = false
    },
    openProductForm() {
      this.addingProduct = true
    },
    openStoreForm() {
      this.addingStore = true
    },
    addProduct(product) {
      this.$store.dispatch('addProduct', product)
    },
    addStore(store) {
      this.$store.dispatch('addStore', store)
    }
  },
  created() {
    this.$store.dispatch('fetchStores')
  },
  components: { StoreDetail, Loading, AddButton, ProductForm, StoreForm }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.store {
  width: 90%;
  margin: auto;
}

.title {
  font-weight: 400;
  font-size: 1.3rem;
  margin: 0 !important;
}

.stars {
  font-weight: 300;
  font-size: 1.2rem;
}

.buttons-container {
  text-align: center;
  width: 50%;
}

@media (max-width: 768px) {
  .buttons-container {
    width: 70%;
  }
}
</style>