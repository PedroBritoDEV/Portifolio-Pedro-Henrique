<script setup lang="ts">

</script>

<template>
    <nav>
        <ul class="flex">
            <li id="sobre-mim" class="text-slate-200 text-center font-black text-xl mx-4">
                <router-link class="link-nav   p-4 flex items-center" to="/"><i class="fa-thin fa-user mr-0 md:mr-4"></i> Sobre Mim </router-link>
            </li>
            <li id="Projetos" class=" text-slate-200 font-black text-xl mx-4">
                <router-link class="link-nav p-4 flex items-center" to="/projetos"><i class="fa-thin fa-newspaper mr-0  md:mr-4"></i> Projetos</router-link>
            </li>
            <li id="tecnologias" class="text-slate-200 font-black text-xl mx-4">
                <router-link class="link-nav p-4 flex items-center" to="/tecnologias" ><i class="fa-thin fa-code mr-0 md:mr-4"></i> Tecnologias</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    
    a:hover {
        background-color: #C68F77;
    }
    a.router-link-active {
        border-bottom: 4px solid #C68F77;
    }
    @media(max-width:810px) {
        a {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin: 0;
            font-size: .8em;
            font-weight: 300;
            color: black;
            width: 100px;
            height: 60px;
            border-radius: 100%;
        }
        a:hover {
            background-color: transparent;
        }
        a.router-link-active {
            transform: scale(1.2);
            background-color: #f8fafc;
            border: 0;
        }
    }
</style>