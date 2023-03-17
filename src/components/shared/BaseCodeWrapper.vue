<template>
  <div id="code-wrapper" class="flex flex-col gap-3">
    <GenerateCodeButton @generate-code-click="generateCodeCallback" />
    <CopyButton :text-to-copy="textToCopy"/>
    <slot />
  </div>
</template>

<script setup lang="ts">
import CopyButton         from '@/components/buttons/CopyButton.vue';
import GenerateCodeButton from '@/components/buttons/GenerateCodeButton.vue';

const emits = defineEmits(['GenerateCodeClick'])

defineProps<{
  textToCopy: string
}>();


const generateCodeCallback = () => {
  emits('GenerateCodeClick')
}
</script>


<style scoped>
#code-wrapper {
  background-color: #23272e;
  border-radius: 6px;
  padding: 1rem;
  height: 700px;
}
</style>