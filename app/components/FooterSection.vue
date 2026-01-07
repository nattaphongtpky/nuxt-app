<template>
    <footer id="contact" class="bg-brand-primary shadow-[0_4px_48px_0_rgba(0,0,0,0.25)] text-background relative mt-44">
        <form>
            <div class="container mx-auto max-w-4xl px-4 py-12">
                <div class="flex flex-col lg:flex-row items-center gap-8">
                    <img src="~/assets/picture/Logo.png" class="translate-y-2">

                    <div class="flex items-center justify-around gap-2 bg-background/10 rounded-full bg-brand-dark">
                        <div class="text-xl font-medium text-white p-4">
                            Contact us
                        </div>
                        <div class="me-2">
                            <input type="email" placeholder="Enter your E-mail / Tel."
                                class="bg-white p-2 rounded-3xl text-background placeholder:text-background/50 w-48 md:w-64 focus:outline-none" />
                        </div>

                    </div>
                    <button type="submit"
                        class="group relative flex items-center justify-center rounded-full border-[6px] border-white bg-linear-to-b from-[#ffcf5e] to-[#ff9f2a] px-6 py-2 transition-all ease-in-out hover:scale-110 active:scale-95 shadow-[0_5px_8px_rgba(0,0,0,0.1)] hover:opacity-90 hover:cursor-pointer">
                        <div class="absolute inset-0 rounded-full shadow-[inset_0_-6px_0_rgba(0,0,0,0.15)]">
                        </div>
                        <span class="text-lg font-black tracking-wide text-white drop-shadow-md">
                            SEND
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="z-10 h-8 w-8 text-white drop-shadow-md">
                            <path fill-rule="evenodd"
                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </form>


        <div class="bg-brand-dark">
            <div class="container max-w-6xl mx-auto px-4 py-4">
                <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p class="text-white text-sm">
                        Copyright ©2024
                        <span class="text-primary">Klass Bits</span>.
                        <br />
                        All rights reserved.
                    </p>


                    <nav class="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                        <a v-for="link in footerLinks" :key="link.name" :href="link.href"
                            class="text-white hover:text-background text-sm transition-all flex gap-2 items-center group">
                            <div class="h-2 w-2 bg-yellow-400 group-hover:bg-yellow-500 rounded-full"></div>
                            <span class="group-hover:text-white/90">{{ link.name }}</span>
                        </a>
                        <div>
                            <button class="h-14 w-14 rounded-full hover:cursor-pointer hover:opacity-90">
                                <img src="~/assets/picture/line-icon.png" class="object-cover translate-y-1" />
                            </button>
                            <button class="h-14 w-14 rounded-full hover:cursor-pointer hover:opacity-90">
                                <img src="~/assets/picture/facebook-icon.png" class="object-cover translate-y-1" />
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { Phone, Send } from "lucide-vue-next";

const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "Contact Us", href: "#contact" },
];
</script>
