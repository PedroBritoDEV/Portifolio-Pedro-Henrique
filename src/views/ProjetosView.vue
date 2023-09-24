<script setup lang="ts">
  import '@splidejs/splide/dist/css/themes/splide-default.min.css';
  import { Splide, SplideSlide } from "@splidejs/vue-splide";

</script>

<template>
  <main id="projetos">
    <div class="text-white projetos-content max-w-screen-xl m-auto h-full">
      <h2 class="text-center font-bold text-2xl mt-0">Confira Meus Projetos</h2>
      <section class="transition-transform relative " id="projetos" >                   
        <Splide>
          <SplideSlide>
            <div id="projetos-page01" class="grid h-750px ">
  
              <a id="sunnyside-agency" href="https://pedrobritodev.github.io/sunnyside-agency-landing-page-main-challenge-5/" target="_blank">
                <div class="m-4 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center  rounded">
                  <h3 class="text-center">SUNNYSIDE</h3>
                  <picture class="w-56  overflow-hidden">
                    <img class="project-img w-full h-full object-cover" src="../assets/img/projetos/sunny-agency.jpg" alt="projeto sunny agency">
                  </picture>
                </div>
              </a>
  
              <a id="clipboard" href="https://pedrobritodev.github.io/clipboard-landing-page-master-challenge23/" target="_blank">
                <div class="m-4 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center  rounded">
                  <h3 class="text-center">CLIPBOARD</h3>
                  <picture class="w-56  overflow-hidden">
                    <img class="project-img w-full h-full object-cover" src="../assets/img/projetos/clipboard.jpg" alt="">
                  </picture>
                </div>
              </a>
  
              <a id="blogr" href="https://pedrobritodev.github.io/blogr-landing-page-main-challenge-16/ " target="_blank">
                <div class="m-4 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center  rounded">
                  <h3 class="text-center">BLOGR</h3>
                  <picture class="w-56  overflow-hidden">
                    <img class="project-img w-full h-full object-cover" src="../assets/img/projetos/blogr.jpg" alt="">
                  </picture>
                </div>
              </a>
  
              <a id="fylo" href="https://pedrobritodev.github.io/fylo-landing-page-with-two-column-layout-master-challenge-19/" target="_blank">
                <div class="m-4 bg-gray-700 border-gold border-2 p-2 flex flex-col items-center rounded">
                  <h3 class="text-center">FYLO</h3>
                  <picture class="w-56  overflow-hidden">
                    <img class="project-img w-full h-full object-cover" src="../assets/img/projetos/fylo.jpg" alt="">
                  </picture>
                </div>
              </a>
  
              <a  id="intro-section" href="https://pedrobritodev.github.io/intro-section-with-dropdown-navigation-main-challenge-18/" target="_blank">
                <div class="mx-4 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center  rounded">
                  <h3 class="text-center">INTRO SECTION</h3>
                  <picture class="w-56  overflow-hidden">
                    <img class="project-img w-full h-full object-cover" src="../assets/img/projetos/intro-section.jpg" alt="">
                  </picture>
                </div>
              </a>
  
              
  
              
              
            </div><!--projetos-page01-->
          </SplideSlide>

          <SplideSlide>
            <div id="projetos-page02" class="grid h-750px">
              
              <a id="faq-according" href="https://pedrobritodev.github.io/faq-accordion-card-main-challenge-17/" target="_blank">
              <div class="m-4 mt-0 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center rounded">
                <h3 class="text-center">FAQ According</h3>
                <picture class="w-64 overflow-hidden flex">
                  <img src="../assets/img/projetos/faq-according.jpg" alt="Foto Faq According" class="project-img w-full object-cover">
                </picture>
              </div>
            </a>

            <a id="newsletter-sing-up" href="https://pedrobritodev.github.io/newletter-sign-up/" target="_blank">
              <div class="m-4 mt-0 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center rounded">
                <h3 class="text-center">Newsletter SignUp</h3>
                <picture class="w-64 overflow-hidden">
                  <img src="../assets/img/projetos/newsletter-signup.jpg" alt="foto newsletter sign up" class="project-img w-full object-cover">
                </picture>
              </div>
            </a>

            <a id="interactive-card-details" href="https://pedrobritodev.github.io/interactive-card-details-form-main-challenge21/" target="_blank">
              <div class="m-4 mt-0 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center rounded">
                <h3 class="text-center">Interecative Card Details</h3>
                <picture class="w-64 overflow-hidden">
                  <img src="../assets/img/projetos/interactive-card-form.jpg" alt="foto do projeto interactive card form" class="project-img w-full object-cover">
                </picture>
              </div>
            </a>
            
            <a id="testimonials-grid-section" href="https://pedrobritodev.github.io/intro-component-with-signup-form-master-challenge-14/" target="_blank">
              <div class="m-4 mt-0 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center rounded">
                <h3 class="text-center">Testimonials Grid</h3>
                <picture class="w-64 overflow-hidden">
                  <img src="../assets/img/projetos/testimonials-grid-section.jpg" alt="projeto intro component" class="project-img w-full object-cover">
                </picture>
              </div>
            </a>
            
            <a id="base-apparel-coming-soon" href="https://pedrobritodev.github.io/base-apparel-coming-soon-master-challenge-12/" target="_blank">
              <div class="m-4 mt-0 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center rounded">
                <h3 class="text-center">Base Apparel Coming Sonn</h3>
                <picture class="w-64 overflow-hidden">
                  <img src="../assets/img/projetos/base-apparel-coming-soon.jpg" alt="" class="project-img w-full object-cover">
                </picture>
              </div>
            </a>
            
            <a id="product-preview" href="https://pedrobritodev.github.io/product-preview-card-component-main-challenge20/" target="_blank">
              <div class="m-4 mt-0 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center rounded">
                <h3 class="text-center">Product Preview</h3>
                <picture class="w-64 overflow-hidden">
                  <img src="../assets/img/projetos/product-preview-card.jpg" alt="" class="project-img w-full object-cover">
                </picture>
              </div>
            </a>
            
            <a id="four-card-feature" href="https://pedrobritodev.github.io/four-card-feature-section-master-Challenge-4/" target="_blank">
              <div class="m-4 mt-0 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center rounded">
                <h3 class="text-center">Four Card Feature</h3>
                <picture class="w-64 overflow-hidden">
                  <img src="../assets/img/projetos/four-card-feature.png" alt="" class="project-img w-full object-cover">
                </picture>
              </div>
            </a>
            
            <a id="sumary-component" href="https://pedrobritodev.github.io/sumary-componentVUE/" target="_blank">
              <div class="m-4 mt-0 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center rounded">
                <h3 class="text-center">Sumary Component</h3>
                <picture class="w-64 overflow-hidden">
                  <img src="../assets/img/projetos/sumary-component.jpg" alt="" class="project-img w-full object-cover">
                </picture>
              </div>
            </a>

            <a id="testimonials-grid-section" href="https://pedrobritodev.github.io/testimonials-grid-section-main-challenge22/" target="_blank">
              <div class="m-4 mt-0 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center  rounded">
                <h3 class="text-center">TESTIMONIALS GRID SECTION</h3>
                <picture class="w-64  overflow-hidden">
                  <img class="project-img w-full h-full object-cover" src="../assets/img/projetos/testimonials-grid-section.jpg" alt="">
                </picture>
              </div>
            </a>

            <a id="social-proof-section" href="https://pedrobritodev.github.io/PedroBritoDEV-social-proof-section-master-challenge-7/" target="_blank">
              <div class="m-4 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center  rounded">
                <h3 class="text-center">SOCIAL PROOF SECTION</h3>
                <picture class="w-64  overflow-hidden">
                  <img class="project-img w-full h-full object-cover" src="../assets/img/projetos/social-proof-section.jpg" alt="">
                </picture>
              </div>
            </a>
            <a id="single-price-grid" href="https://pedrobritodev.github.io/single-price-grid-component-master-challenge-15/" target="_blank">
              <div class="m-4 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center  rounded">
                <h3 class="text-center">Single Price Grid</h3>
                <picture class="w-64  overflow-hidden">
                  <img class="project-img w-full h-full object-cover" src="../assets/img/projetos/single-price-grid.png" alt="">
                </picture>
              </div>
            </a>
            <a id="huddle" href="https://pedrobritodev.github.io/huddle-landing-page-with-single-introductory-section-master-challenge-11/" target="_blank">
              <div class="m-4 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center  rounded">
                <h3 class="text-center">Huddle</h3>
                <picture class="w-64  overflow-hidden">
                  <img class="project-img w-full h-full object-cover" src="../assets/img/projetos/huddle.jpg" alt="">
                </picture>
              </div>
            </a>
            <a id="interactive-rating" href="https://pedrobritodev.github.io/interactive-rating-component-main-challenge-8/" target="_blank">
              <div class="m-4 bg-gray-700 border-gold border-2 p-2 flex flex-col justify-center items-center  rounded">
                <h3 class="text-center">Interactive Rating</h3>
                <picture class="w-64  overflow-hidden">
                  <img class="project-img w-full h-full object-cover" src="../assets/img/projetos/interactive-rating.png" alt="">
                </picture>
              </div>
            </a>
            </div>
        </SplideSlide>

        </Splide>

      </section>
    </div>
  </main>
</template>

<style>
  #projetos-page01 {
    grid-template-areas:
      'sunnyside-agency clipboard blogr fylo'
      'sunnyside-agency clipboard blogr intro-section'
      ;
      justify-content: center;
      align-items: center;
  }
  #sunnyside-agency{
    grid-area: sunnyside-agency;
  }
  #clipboard {
    grid-area: clipboard;
  }
  #blogr {
    grid-area: blogr;
  }
  #fylo {
    grid-area: fylo;
  }
  #intro-section {
    grid-area: intro-section;
  }
  
  .project-img {
    transition: .3s;
  }
  .project-img:hover {
    transform: scale(1.1);
  }

  #projetos-page02 {
    grid-template-areas: 
    'sumary-component newsletter-sing-up four-card-feature interactive-card-details '
    'testimonials-grid-section product-preview faq-according  base-apparel-coming-soon'
    'social-proof-section interactive-rating single-price-grid huddle'
    ;
    justify-content: center;
    align-items: center;
    grid-template-rows: 300px 200px;
  }

  #faq-according {
    grid-area: faq-according;
  }
  #newsletter-sing-up {
    grid-area: newsletter-sing-up;
  }
  #interactive-card-details {
    grid-area: interactive-card-details;
  }
  #testimonials-grid-section {
    grid-area: testimonials-grid-section;
  }
  #base-apparel-coming-soon {
    grid-area: base-apparel-coming-soon;
  }
  #product-preview {
    grid-area: product-preview;
  }
  #four-card-feature {
    grid-area: four-card-feature;
  }
  #sumary-component {
    grid-area: sumary-component;
  }
  #social-proof-section {
    grid-area: social-proof-section;
  }
  #single-price-grid {
    grid-area: single-price-grid;
  }
  #huddle {
    grid-area: huddle;
  }
  #interactive-rating {
    grid-area: interactive-rating;
  }

  .material-symbols-outlined {
    top: 50%;
    background-color: rgba(128, 128, 128, 0.418);
  }
  button {
    margin: 0 -50px;
  }

</style>
