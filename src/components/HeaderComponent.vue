<script setup lang="ts">
    import NavLinks from "./NavLinks.vue"
</script>

<template>
    <header class="mb-5">
        <div id="header-content" class="max-w-screen-xl m-auto h-full ">
            <div class="w-16 h-full flex items-center justify-between flex-wrap w-full">
                <img class="w-10 md:w-16 cursor-pointer" src="../assets/img/logo-ph.png" alt="logo-ph ">
                <NavLinks class="hidden md:block"/>
                <a href="https://github.com/PedroBritoDEV" target="_blank">
                    <i class="md:mx-10 fa-brands fa-github text-slate-200 text-4xl cursor-pointer"></i>
                </a>
            </div>
        </div>
    </header>
</template>