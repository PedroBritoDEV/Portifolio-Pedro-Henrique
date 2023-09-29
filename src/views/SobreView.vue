
<script lang="ts">
import contact from '../components/contact.vue';
import myPhoto from '../components/myphotoComponent.vue'

export default {
  data() {
    return {
      text: "ou o Pedro Henrique",
      interval: 150, // Intervalo de tempo entre cada caractere
      ShowedText: ""
    };
  },
  mounted() {
    this.startTypingAnimate();
  },
  methods: {
    startTypingAnimate() {
      let currentIndex = 0;
      const originalText = this.text;
      const typer = setInterval(() => {
        if (currentIndex === originalText.length * 2) {
          clearInterval(typer);
          setTimeout(() => {
            this.ShowedText = "";
            this.startTypingAnimate();
          }, 100);
        } else if (currentIndex >= originalText.length) {
          this.ShowedText = originalText.slice(0, originalText.length - (currentIndex - originalText.length));
        } else {
          this.ShowedText = originalText.slice(0, currentIndex);
        }
        currentIndex++;
      }, this.interval);
    }
  },
  components: {
    contact,
    myPhoto,
  }
};


  
</script>

<template>
 
  <main>
    <div class="main-content flex items-center justify-between max-w-screen-xl mb-20 m-auto h-full ">
      <div class="text-white text-informations max-w-2xl">
        <h1 id="welcomeText" class="white text-5xl md:text-5xl font-bold leading-relaxed my-5 md:my-auto leading-9 ">Bem Vindo! <br> <span class="type-aniamte text-3xl ">S{{ ShowedText }}</span></h1>
        <myPhoto class="md:hidden w-64 "/>
        <span id="stack" class="text-lg white text-center flex flex-row mb-3 md:mb-10">Programador Front-end</span>
        <p class="white md:text-xl leading-snug">Cursando o segundo périodo de Análise e Desenvolvimento de Sistemas e atuando como programador a mais de 1 ano. Aqui você encontrará uma coleção de projetos que refletem minha paixão pela criação de soluções inovadoras e minha dedicação ao mundo da programação.</p>
        <contact/> 
      </div><!--text-informations-->
      <myPhoto class="hidden md:flex"/>
      
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
  .type-aniamte {
    border-right: 3px solid  #fff;
    padding-right: 3px;
  }
</style>
  