<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
 
  import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template> 
  <div class="h-screen">
    <HeaderComponent class="h-10vh"/>
    <RouterView class="h-90vh"/>
  </div>

      
    
  
</template>

<style scoped>

</style>
