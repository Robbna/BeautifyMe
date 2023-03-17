<template>
  <div id="input" class="flex flex-col gap-3">
    <label for="className">Class name</label>
    <input id="className" type="text" placeholder="e.g. MainClass" v-model="className" />
    <small :hidden="classNameRequired" class="small required">required!</small>
  </div>
  <div id="input" class="flex flex-col gap-3">
    <div class="flex justify-between gap-9">
      <div class="flex flex-col w-full">
        <label for="access">Access</label>
        <input id="access" type="text" placeholder="e.g. private" v-model="access" />
        <small :hidden="accessRequired" class="small required">required!</small>
      </div>
      <div class="flex flex-col w-full">
        <label for="type">Type</label>
        <input id="type" type="text" placeholder="e.g. String" v-model="type" />
        <small :hidden="typeRequired" class="small required">required!</small>
      </div>
      <div class="flex flex-col w-full">
        <label for="name">Name</label>
        <input id="name" type="text" placeholder="e.g. username" v-model="name" />
        <small :hidden="nameRequired" class="small required">required!</small>
      </div>
    </div>
    <div class="flex gap-2">
      <button class="input-button add" @click="addVariableButton()">Add</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Variable } from '@/data/model/ValueObjects/Variable';
import { ref, watch } from 'vue';

const emits = defineEmits(['AddVariableButton', 'ClassNameClick']);

const className = ref<string>("");
const classNameRequired = ref<boolean>(true);

const access = ref<string>("");
const accessRequired = ref<boolean>(true);

const type = ref<string>("");
const typeRequired = ref<boolean>(true);

const name = ref<string>("");
const nameRequired = ref<boolean>(true);

watch(className, () => {
  emits('ClassNameClick', className.value);
})

const addVariableButton = (): void => {
  classNameRequired.value = className.value ? true : false;
  accessRequired.value  = access.value ? true : false;
  typeRequired.value    = type.value ? true : false;
  nameRequired.value    = name.value ? true : false;

  if (className.value && access.value && type.value && name.value) {

    const newVariable   = new Variable();
    newVariable.access  = access.value;
    newVariable.type    = type.value;
    newVariable.name    = name.value;

    emits('AddVariableButton', newVariable);

    clearInputs();
  }
}

const clearInputs = () => {
  access.value    = "";
  type.value      = "";
  name.value      = "";
}

</script>

<style scoped>
#input {
  padding: .9rem;
  border-radius: 6px;
  box-shadow: 0px 3px 9px rgb(0, 0, 0, .3);

}

.small.required {
  color: red;
}

/* Button */
.input-button {
  border-radius: 6px;
  padding: .6rem;
  width: 100%;

  transition: .13s;
}

.input-button.add {
  border: 1px solid #2f8756;
  color: #2f8756;
}

.input-button.add:hover {
  color: white;
  background-color: #2f8756;
}

.input-button.className {
  border: 1px solid #0dcaf0;
  color: #0dcaf0;
  
}
.input-button.className:hover {
  color: white;
  background-color: #0dcaf0;
}

input,
select {
  border-bottom: 1px solid rgb(0, 0, 0, .3);
  border-radius: 6px;
  width: 100%;
}

input {
  padding: .3rem;
}
</style>