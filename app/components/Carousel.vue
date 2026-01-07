<template>
    <div class="relative min-h-screen flex flex-col items-center justify-center py-12 overflow-hidden font-sans">
        <div class="w-full max-w-6xl flex items-center justify-center px-4">
            <button
                class="swiper-button-prev-custom absolute left-4 md:left-10 z-20 text-[#FF8E72] hover:text-[#FF6B4A] hover:scale-110 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            <button
                class="swiper-button-next-custom absolute right-4 md:right-10 z-20 text-[#FF8E72] hover:text-[#FF6B4A] hover:scale-110 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>

            <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
                :loop="false" :initial-slide="2" :coverflowEffect="{
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
                    modifier: 2.5,
                    slideShadows: false,
                }" :pagination="{ clickable: true }" :navigation="{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }" :modules="modules" class="w-full py-10 pb-16">
                <swiper-slide v-for="(img, index) in images" :key="index" class="custom-slide-width">
                    <div class="w-full h-full">
                        <img :src="img.src" alt="App Screenshot" class="w-full h-full object-cover" />
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ImgApp1 from "~/assets/picture/applicatioin-1.png";
import ImgApp2 from "~/assets/picture/applicatioin-2.png";
import ImgApp3 from "~/assets/picture/applicatioin-3.png";
import ImgApp4 from "~/assets/picture/applicatioin-4.png";
import ImgApp5 from "~/assets/picture/applicatioin-5.png";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const modules = [EffectCoverflow, Pagination, Navigation];

const images = ref([
    { src: ImgApp3 },
    { src: ImgApp2 },
    { src: ImgApp1 },
    { src: ImgApp4 },
    { src: ImgApp5 },
]);
</script>

<style scoped>
.custom-slide-width {
    width: 260px;
    height: 520px;
    opacity: 0.6;
    transform: scale(0.9);
    transition: all 0.3s ease;
}

.swiper-slide-active {
    opacity: 1;
    transform: scale(1);
    z-index: 10;
}

:deep(.swiper-pagination-bullet) {
    background: #4c4c4c4c;
    width: 10px;
    height: 10px;
    opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
    background: var(--color-brand-primary)
}
</style>
