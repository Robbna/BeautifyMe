<template>
  <header>
    <div id="github-fork">
      <ForkGithub />
    </div>
    <nav class="flex justify-center items-center gap-5 md:gap-16">
      <RouterLink id="java" to="/java">
        <img class="w-11 md:w-14" src="@/assets/images/java.png" />
      </RouterLink>
      <RouterLink id="typescript" to="/#">
        <img class="w-11 md:w-14" src="@/assets/images/typescript.png" />
      </RouterLink>
      <RouterLink id="csharp" to="/#">
        <img class="w-11 md:w-14" src="@/assets/images/cs.png" />
      </RouterLink>
      <RouterLink id="cpp" to="/#">
        <img class="w-11 md:w-14" src="@/assets/images/cpp.png" />
      </RouterLink>
      <span/>
      <RouterLink id="cpp" to="/#">
        <img class="w-11 md:w-14" src="@/assets/images/json.png" />
      </RouterLink>
    </nav>
  </header>
  <RouterView id="content" class="mt-16 md:mt-24" />
  <AppFooter/>
</template>

<script setup lang="ts">
import ForkGithub from './components/shared/ForkGithub.vue';
import AppFooter from '@/components/shared/AppFooter.vue'

</script>


<style scoped>
#github-fork {
    position: absolute;
    z-index: 1;
    top: 0;
    right: -6px;
}

header {
  background-color: #f0f0f0;
  padding: 1rem;
  width: 100%;
  position: fixed;
  top: 0;
}

nav span {
  border-left: 1px solid rgb(0, 0, 0, .3);
  height: 60px;
}

nav a {
  transition: .3s;
  filter: grayscale();
}

nav a:hover {
  transform: scale(1.1);
}

nav a.router-link-exact-active {
  transform: scale(1.3);
  filter: none;
}
</style>
