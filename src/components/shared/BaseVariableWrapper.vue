<template>
  <div id="input" class="flex gap-3">
    <div class="flex justify-between gap-6">
      <div class="flex flex-col">
        <label for="access">Access</label>
        <input id="access" disabled type="text" :value="variableData.access"/>
      </div>
      <div class="flex flex-col">
        <label for="type">Type</label>
        <input id="type" disabled type="text" :value="variableData.type">
      </div>
      <div class="flex flex-col">
        <label for="name">Name</label>
        <input id="name" disabled type="text" :value="variableData.name">
      </div>
    </div>

    <div class="flex gap-2">
      <button class="input-button remove" @click="removeButton(variableList, index)">Remove</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Variable } from '@/data/model/ValueObjects/Variable';

defineProps<{
  index: number,
  variableList: Variable[],
  variableData: Variable
}>()

const removeButton = (variableList: Variable[], index: number) => {
  variableList.splice(index, 1);
}

</script>

<style scoped>
#input {
  padding: .9rem;
  border-radius: 6px;
  box-shadow: 0px 3px 9px rgb(0, 0, 0, .3);
}

/* Buttons */
.input-button {
  border-radius: 6px;
  padding: .6rem;
  width: 100%;

  transition: .13s;
}

.input-button.remove {
  border: 1px solid #d43441;
  color: #d43441;
}

.input-button.remove:hover {
  color: white;
  background-color: #d43441;
}


input {
  border-bottom: 1px solid rgb(0, 0, 0, .3);
  border-radius: 6px;
  width: 100%;
  color: gray;
}

input {
  padding: .3rem;
}
</style>