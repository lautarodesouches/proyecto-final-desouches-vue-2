<template>
  <div>
    <!---->
    <Header :user='user' />
    <!---->
    <main class='main'>
      <router-view />
    </main>
    <!---->
    <Footer />
    <!---->
    <Notification v-if='this.$store.getters.getNotification' />
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// ----------------------------------------------
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// ----------------------------------------------
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Notification from './components/Notification.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Notification
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')) || null
    }
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style>
body {
  margin: 0;
}

:root {
  --primary-bg: #e01a10;
  --primary-text: #fff;
  --secondary-bg: #f36316;
  --secondary-text: #fff;
}

.header {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 6vh;
  background-color: var(--secondary-bg);
  color: var(--secondary-text);
}

.main {
  cursor: default;
  margin: 0;
  padding: 1vh 1rem;
  width: 100%;
  min-height: 88vh;
  background-color: #e1e1e1;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 6vh;
  background-color: var(--secondary-bg);
  color: var(--secondary-text);
}

.button {
  border-radius: 5px;
  padding: .3rem .7rem;
  transition: all 1s;
  border: none;
}

.button:hover {
  transform: scale(1.05);
}

.button__primary {
  background: var(--primary-bg);
  color: var(--primary-text);
}

.button__secondary {
  background: var(--secondary-bg);
  color: var(--secondary-text);
}

.button__light {
  background: #aeaeae;
  color: #fff;
}

.cursor-pointer {
  cursor: pointer;
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.flash {
  -webkit-animation-name: flash;
  animation-name: flash;
  -webkit-animation-duration: 5s;
  -webkit-animation-iteration-count: infinite;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes flash {

  0%,
  50%,
  100% {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}

@keyframes flash {

  0%,
  50%,
  100% {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}
</style>