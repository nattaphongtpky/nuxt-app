<script setup>
import IconLabtop from "~/assets/picture/laptop.png";
import IconBook from "~/assets/picture/book.png";
import IconPencil from "~/assets/picture/pencil.png";
import IconStart from "~/assets/picture/star.png";
import androidDownload from "~/assets/picture/android-download.png";
import iosDownload from "~/assets/picture/download-ios-app.png";
import QRCode from "~/assets/picture/QR_code_for_mobile_English_Wikipedia 2.png";
import Phone from "~/assets/picture/Phone.png";
</script>

<template>
    <section id="download" class="bg-brand-primary py-20 px-4 relative -mb-48 min-h-screen overflow-hidden">
        <!-- <div class="absolute inset-0 opacity-80 pointer-events-none">
            <div class="absolute top-10 left-20">
                <img :src="IconLabtop" class="" />
            </div>
            <div class="absolute bottom-10 right-20">
                <img :src="IconBook" class="w-52 h-52" />
            </div>
            <div class="absolute top-1/2 left-10">
                <img :src="IconPencil" />
            </div>
            <div class="absolute top-1/2 right-0">
                <img :src="IconStart" class="w-24 h-24" />
            </div>
        </div> -->
        <div class="container grid grid-cols-2 gap-4 relative items-center mt-44">
            <div class="place-items-end">
                <div>
                    <p class="text-white font-bold text-4xl leading-normal">ดาวน์โหลดแอพพลิเคชั่น <br /> Klass Bits
                        ได้ที่
                    </p>
                    <img :src="QRCode" alt="QRCode" class="bg-white rounded-xl p-2">
                    <div class="flex gap-4 my-4">
                        <button class="hover:cursor-pointer">
                            <img :src="androidDownload" alt="iosDownload">
                        </button>
                        <button class="hover:cursor-pointer">
                            <img :src="iosDownload" alt="iosDownload">
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-full h-full">
                <img :src="Phone" class="-right-10 absolute" />
            </div>
        </div>
    </section>
</template>
