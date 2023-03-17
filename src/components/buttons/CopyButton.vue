<template>
  <button @click="buttonHandler(textToCopy)">Copy</button>
</template>

<script setup lang="ts">
import { notify } from "notiwind"


defineProps<{
  textToCopy: string
}>();

const buttonHandler = async (text: string) => {
  await navigator.clipboard.writeText(text ? text : ':(').then(() => notify({group: "info", text: "Copied on the clipboard!"}, 1000) );
}
</script>

<style scoped>
button {
  border: 1px solid #0dcaf0;
  color: #0dcaf0;
  padding: .6rem;
  border-radius: 6px;
  transition: .13s;
}

button:hover {
  background-color: #0dcaf0;
  color: black;
}

</style>