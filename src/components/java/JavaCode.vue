<template>
  <highlightjs language='java' :code="code" />
</template>

<script setup lang="ts">
defineProps<{
  code: string
}>()

</script>

<style scoped>
pre {
  white-space: pre-wrap;
  font-size: 1rem;
  line-height: 1.3;
  overflow: auto;
}
</style>