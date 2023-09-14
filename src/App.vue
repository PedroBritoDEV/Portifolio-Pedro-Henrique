<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
 
  import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template> 
  <div class="h-screen">
    <HeaderComponent class="h-10vh"/>
    <router-view class="h-90vh" v-slot="{ Component }">
      <transition 
        enter-active-class="animate__animated animate__fadeInRightBig"
        leave-active-class="animate__animated animate__fadeOutLeftBig"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

      
    
  
</template>

<style scoped>

</style>
