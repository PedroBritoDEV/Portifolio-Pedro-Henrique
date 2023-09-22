<template>
    <picture class="h-full flex items-center relative">
        <img id="css-icon" class="animate absolute w-20 z-10"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <img class="animate rounded-full border-2 p-2 w-96" src="../assets/img/profile-picture.jpg" alt="Foto Do Pedro">
        <img id="html-icon" class="animate absolute w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /> 
    </picture>
</template>

<style scoped>
    .animate {
        transform: translateX(0px);
        animation: float ease-out infinite;
        animation-duration: 4s!important;
    }
    #css-icon {
        left: -20px;
        top: 250px;
    }
    #html-icon {
        right: -20px;
        bottom: 250px;
    }
    @keyframes float {
        0% {
            transform: translateY(0px)
        }
        50% {
            transform: translateY(-15px);
        }
        100% {
            transform: translateY(0px);
        }
    }
</style>