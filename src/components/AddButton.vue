<template>
  <div class='add__button__container col-12 col-md-auto cursor-pointer px-3 py-2 rounded my-2 my-md-0 mx-md-2'>
    <p class='m-0'>Agregar {{text}}</p>
    <svg xmlns='http://www.w3.org/2000/svg' class='bi bi-plus-circle-fill add__button__icon' viewBox='0 0 16 16'>
      <path
        d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
    </svg>
  </div>
</template>
<!------------------------------------------------------------------------------------------->
<script>
// -------------------------------------------
export default {
  name: 'AddButton',
  props: {
    text: String
  }
}
</script>
<!------------------------------------------------------------------------------------------->
<style scoped>
.add__button__container {
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  transition: all 1s;
}

.add__button__icon {
  width: 15px;
  height: 15px;
  fill: #000;
  transition: all 1s;
}

.add__button__container:hover {
  transform: scale(1.05);
  background: var(--primary-bg);
  color: var(--primary-text);
}

.add__button__container:hover .add__button__icon {
  fill: #fff;
}
</style>