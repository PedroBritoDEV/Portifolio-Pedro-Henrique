<script setup lang="ts">

</script>

<template>
    <nav>
        <ul class="flex">
            <li id="sobre-mim" class="text-slate-200 text-center font-black text-xl mx-4">
                <router-link class="link-nav  p-1 px-4 flex" to="/">Sobre Mim</router-link>
            </li>
            <li id="Projetos" class=" text-slate-200 font-black text-xl mx-4">
                <router-link class="link-nav p-1 px-4 flex" to="/projetos">Projetos</router-link>
            </li>
            <li id="tecnologias" class="text-slate-200 font-black text-xl mx-4">
                <router-link class="link-nav p-1 px-4 flex" to="/tecnologias">Tecnologias</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    a:hover {
        background-color: #C68F77;
    }
    a.router-link-active {
        border-bottom: 3px solid #C68F77;
    }
</style>