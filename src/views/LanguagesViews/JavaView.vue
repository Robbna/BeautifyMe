<template>
  <BaseWrapper>
    <ErrorNotification/>
    <SuccessNotification/>
    <InfoNotification/>
    <section>
      <InputWrapper>
        <!-- Input -->
        <BaseInput @class-name-click="addClassNameButtonCallback" @add-variable-button="addVariableButtonCallback" />
        <hr/>
        <!-- Variable list -->
        <div v-for="(value, index) in input.variableList" :key="index">
          <BaseVariableWrapper :index="index" :variable-list="input.variableList" :variable-data="value" />
        </div>
      </InputWrapper>
    </section>

    <section>
      <BaseCodeWrapper :text-to-copy="outputCode" @generate-code-click="generateCodeCallback">
        <JavaCode :code="outputCode" />
      </BaseCodeWrapper>
    </section>

  </BaseWrapper>
</template>

<script setup lang="ts">
import { ref }            from 'vue';
import { JavaInput }      from '@/data/model/java/JavaInput';
import type { Variable }  from '@/data/model/ValueObjects/Variable';

import BaseVariableWrapper  from '@/components/shared/BaseVariableWrapper.vue';
import BaseInput            from '@/components/shared/BaseInput.vue'
import BaseWrapper          from '@/components/shared/BaseWrapper.vue';
import BaseCodeWrapper      from '@/components/shared/BaseCodeWrapper.vue';
import InputWrapper         from '@/components/shared/InputWrapper.vue';
import JavaCode             from '@/components/java/JavaCode.vue';

import ErrorNotification    from '@/components/shared/notifications/ErrorNotification.vue';
import SuccessNotification  from '@/components/shared/notifications/SuccessNotification.vue';
import InfoNotification     from '@/components/shared/notifications/InfoNotification.vue';

import { notify } from "notiwind"

const input       = ref<JavaInput>(new JavaInput());
const outputCode  = ref<string>("");


const addClassNameButtonCallback = (className: string) => {
  input.value.className = className;
};

const addVariableButtonCallback = (newVariable: Variable) => {
  input.value.variableList.push(newVariable);
};

const generateCodeCallback = () => {

  if(!input.value.className) {
    notify({group: "error", title: "Error", text: "Required class name!"}, 3000);
    return;
  }

  if(!input.value.hasVariables()) {
    notify({group: "error", title: "Error", text: "You need to add variables!"}, 3000);
    return;
  }

  outputCode.value = input.value.getJavaCode()
  notify({group: "success", title: "Success", text: "Generated!"}, 1000)
}

</script>

<style scoped></style>