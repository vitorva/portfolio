<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Welcome.


      My name is Vitor Vaz Afonso. I’m a software enginner from Switzerland.

      I recently graduated from HEIG-VD (Bachelor of Applied Science). I have always been
      passionate about technology and development.
    </h3>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>
