<template>
  <button @click="buttonHandler()">Generate everything</button>
</template>

<script setup lang="ts">
const emits = defineEmits(['GenerateCodeClick'])
const buttonHandler = () => {
  emits('GenerateCodeClick');
}
</script>

<style scoped>
button {
  border: 1px solid #f8f9fa;
  color: #f8f9fa;
  padding: .6rem;
  border-radius: 6px;
  transition: .13s;
}

button:hover {
  color: black;
  background-color: #f8f9fa;
}
</style>