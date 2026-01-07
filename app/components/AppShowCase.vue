<script setup lang="ts">
import Carousel from "./Carousel.vue";
</script>

<template>
    <section id="about"
        class="py-20 z-[9] px-4 bg-gray-50 relative -mb-48 min-h-screen h-267.5 overflow-hidden [clip-path:polygon(0_0,100%_0,100%_100%,0_90%)]">
        <img src="~/assets/picture/bubble-1.png" class="absolute top-[10%] -right-12" />
        <img src="~/assets/picture/bubble-2.png" class="absolute bottom-[10%] -left-12" />

        <div class="relative z-10 text-center mt-36">
            <h1 class="text-4xl md:text-5xl font-bold text-[#F5674C] mb-2">
                Klass Bits Application
            </h1>
            <p class="text-xl md:text-2xl font-medium text-[#F5674C]">
                แอพพลิเคชั่นจัดการเรียนการสอนสำหรับนักเรียน
            </p>
        </div>

        <Carousel />
    </section>
</template>
