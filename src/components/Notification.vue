<template>
  <div class='notification fadeIn' @click='closeButton'>
    <div class='notification__content'>
      <h5 class='notification__message'>{{this.$store.getters.getNotification}}</h5>
      <div class='notification__button__container'>
        <button class='notification__button'>X</button>
      </div>
    </div>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
export default {
  name: 'NewNotification',
  methods: {
    closeButton() {
      this.$store.dispatch('closeNotification')
    }
  },
  created() {
    setTimeout(() => {
      this.$store.dispatch('closeNotification')
    }, 5000)
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.notification {
  cursor: pointer;
  position: fixed;
  border-radius: 5px;
  background-color: #f8f8f8;
  top: 8vh;
  right: 10px;
  min-width: 200px;
  height: 30px;
  padding: 2px;
  box-shadow: 2px 2px 1px 0px #535353;
}

.notification__content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5px;
  padding-right: 25px;
}

.notification__message {
  font-size: 1rem;
  margin: 0;
}

.notification__button__container {
  position: absolute;
  right: 0;
  width: 20px;
}

.notification__button {
  border: none;
  border-radius: 5px;
  color: #fff;
  height: 90%;
  background-color: #dc143c;
}
</style>