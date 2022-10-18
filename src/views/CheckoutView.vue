<template>
  <form class='form fadeIn' @submit.prevent='validateForm()'>
    <div class='form-group my-3'>
      <label for='address'>Direccion</label>
      <input type='text' class='my-2 form-control' id='address' placeholder='Calle 123' v-model='form.address.value'
        required>
      <small id='addressHelp' class='form-text text-danger' v-if='form.address.error'>* {{form.address.error}}</small>
    </div>
    <div class='form-group my-3'>
      <label for='cardNumber'>Número Tarjeta</label>
      <input type='number' class='my-2 form-control' id='cardNumber' placeholder='123456789'
        v-model='form.cardNumber.value' maxlength='16' minlength='10' required>
      <small id='cardNumberHelp' class='form-text text-danger' v-if='form.cardNumber.error'>*
        {{form.cardNumber.error}}</small>
    </div>
    <div class='form-group my-3'>
      <label for='cardHolder'>Nombre titular</label>
      <input type='text' class='my-2 form-control' id='cardHolder' placeholder='Pablo Perez'
        v-model='form.cardHolder.value' required>
      <small id='cardHolderHelp' class='form-text text-danger' v-if='form.cardHolder.error'>*
        {{form.cardHolder.error}}</small>
    </div>
    <div class='form-group my-3'>
      <label for='expiryDate'>Fecha de vencimiento</label>
      <input type='text' class='my-2 form-control' id='expiryDate' placeholder='11/23' v-model='form.expiryDate.value'
        minlength='4' maxlength='5' required>
      <small id='expiryDateHelp' class='form-text text-danger' v-if='form.expiryDate.error'>*
        {{form.expiryDate.error}}</small>
    </div>
    <div class='form-group my-3'>
      <label for='cvv'>Codigo de seguridad</label>
      <input type='number' class='my-2 form-control' id='cvv' placeholder='123' v-model='form.cvv.value' required>
      <small id='cvvHelp' class='form-text text-danger' v-if='form.cvv.error'>* {{form.cvv.error}}</small>
    </div>
    <div class='mt-4'>
      <button class='button button__primary w-100'>FINALIZAR COMPRA</button>
    </div>
  </form>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// ---------------------
export default {
  name: 'CheckoutView',
  data() {
    return {
      form: {
        address: { value: '', error: '' },
        cardNumber: { value: '', error: '' },
        cardHolder: { value: '', error: '' },
        expiryDate: { value: '', error: '' },
        cvv: { value: '', error: '' },
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push('/')
    },
    purchase() {
      this.$store.dispatch('purchase')
      this.$router.push('/')
    },
    resetErrors() {
      for (const key in this.form) {
        this.form[key].error = ''
      }
    },
    resetValues() {
      for (const key in this.form) {
        this.form[key].value = ''
      }
    },
    validateForm() {

      this.resetErrors()

      if (!this.form.address.value) {
        this.form.address.error = 'El campo no es valido'
        return
      }

      const cardRegex = new RegExp('/^[0-9]+$/')

      if (cardRegex.test(this.form.cardNumber.value)) {
        this.form.cardNumber.error = 'Solo se permiten numeros'
        return
      }

      if (String(this.form.cvv.value).length !== 3) {
        this.form.cvv.error = 'El codigo de seguridad es inválido'
        return
      }

      this.resetValues()

      this.purchase()

    },
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.form {
  background: #ffffff;
  padding: 1rem 2rem;
  border-radius: 5px;
}
</style>