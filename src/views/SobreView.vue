<script setup lang="ts">
  import contact from '@/components/contact.vue';
</script>

<template>
  <main>
    <div class="main-content flex items-center justify-between max-w-screen-xl m-auto h-full ">
      <div class="text-white text-informations max-w-2xl">
        <h1 class="white text-5xl font-bold leading-relaxed">BEM VINDO! <br> SOU O PEDRO HENRIQUE </h1>
        <span id="stack" class="text-lg white text-center flex flex-row mb-10">Programador Front-end</span>
        <p class="white text-xl leading-snug">Cursando o segundo périodo de Análise e Desenvolvimento de Sistemas e atuando como programador a mais de 1 ano. Aqui  e você encontrará uma coleção de projetos que refletem minha paixão pela criação de soluções inovadoras e minha dedicação ao mundo da programação.</p>
        <contact/> 
      </div><!--text-informations-->
      <img class="rounded-full border-2 p-2 w-96" src="../assets/img/profile-picture.jpg" alt="Foto Do Pedro">
    </div><!--main-content-->
  </main>
</template>

<style scoped>
  #stack:before, #stack:after {
    content: "";
    flex: 1 1;
    border-bottom: 2px solid #fff;
    margin:auto;
  }
</style>
  