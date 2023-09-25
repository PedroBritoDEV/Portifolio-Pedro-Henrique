<script setup lang="ts">
  import { RouterView } from 'vue-router'
 
  import HeaderComponent from './components/HeaderComponent.vue';
  import footerMobileComponent from './components/footerMobileComponent.vue';
</script>

<template> 
  <div class="md:h-screen h-auto px-5 mt-4 md:px-0">
    <HeaderComponent class="md:h-10vh h-auto" />
    <router-view class="md:h-90vh md:mb-0 mb-10 h-auto " v-slot="{ Component }">
      <transition 
        enter-active-class="animate__animated animate__fadeInRightBig"
        leave-active-class="animate__animated animate__fadeOutLeftBig"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <footerMobileComponent class="w-full fixed"/>
  </div>

      
    
  
</template>

<style scoped>

</style>
