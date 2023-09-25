<script setup lang="ts">
  import '@splidejs/splide/dist/css/themes/splide-default.min.css';
  import { Splide, SplideSlide, Options } from "@splidejs/vue-splide";

  const optionsFrontEnd: Options = {
        type: 'loop',
        perPage: 5,   
        perMove: 1,
        autoplay: true, 
        interval: 1500,
        arrows: false,
        pagination: 0,
        width: null,
        
  };
  const optionsFerramentas: Options = {
        type: 'loop',
        perPage: 5,   
        perMove: 1,
        autoplay: true, 
        interval: 1500,
        arrows: false,
        pagination: 0,
        width: null,

  };
  const larguraDaTela : number = window.innerWidth;

  if (larguraDaTela <= 768) {
    optionsFrontEnd.perPage = 3;
    optionsFerramentas.perPage = 3;
    optionsFrontEnd.width = '100%';
    optionsFerramentas.width = '100%';
  }

  

</script>

<template>
  <main class="mb-20">
    <div class="tecnologias-content text-white projetos-content max-w-screen-xl m-auto h-full">
      <h1 class="text-3xl text-white  font-bold">TECNOLOGIAS</h1>
      <section id="front-end max-w-full block">
        <h4 class="text-2xl font-medium">Front-End</h4>
        <div id="front-end-content" class="flex  py-10" >
          <Splide :options="optionsFrontEnd">      
            <SplideSlide><img class=""  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" /></SplideSlide>
            <SplideSlide><img class="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" /></SplideSlide>    
            <SplideSlide><img class=" " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" /></SplideSlide>    
            <SplideSlide><img class=" " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></SplideSlide>       
            <SplideSlide><img class="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" /></SplideSlide>
            <SplideSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /></SplideSlide>      
            <SplideSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" /></SplideSlide>
            <SplideSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" /></SplideSlide>
          
          </Splide>
          
          
          
                
        </div>
      </section>
      <section id="back-end">
        <h4 class="text-2xl font-medium">Back-End</h4>
        <div id="back-end-content" class="flex">
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" />
          
          <img class="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg" /> 
        </div>
      </section>
      <section id="banco-de-dados">
        <h4 class="text-2xl font-medium">Banco de Dados</h4>
        <div id="banco-de-dados-content" class="flex">
          <img class=" bg-white" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" />

          <img class="bg-white" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          
        </div>
      </section>

      <section id="ferramentas">
        <h4 class="text-2xl font-medium" >Ferramentas</h4>
        <div id="ferramentas-content" class="flex">
          <Splide :options="optionsFerramentas">
            <SplideSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />       </SplideSlide>
            
            <SplideSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" /></SplideSlide>
            
            <SplideSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" /></SplideSlide>
            
            <SplideSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" /></SplideSlide>
            
            <SplideSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original-wordmark.svg" /></SplideSlide>
  
            <SplideSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /></SplideSlide>
          </Splide>
          
          
          
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
  img {
    width: 5rem;
    margin: 0 20px;
  }
  h4 {
    margin: 10px 0;
  }
  section {
    margin: 30px 0;
  }
  ul, #splide01-list, #splide02-list  {
    width: 300px!important;
  }
</style>