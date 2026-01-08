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
    <section id="download"
        class="bg-brand-primary py-20 px-4 relative -mb-48 min-h-screen overflow-hidden max-lg:flex max-lg:justify-center">

        <div class="container grid lg:grid-cols-2 gap-4 relative items-center lg:mt-44">
            <div class="lg:place-items-end">
                <div class="flex flex-col max-lg:items-center max-lg:text-center">
                    <p class="text-white font-bold text-4xl leading-normal">ดาวน์โหลดแอพพลิเคชั่น <br /> Klass Bits
                        ได้ที่
                    </p>
                    <img :src="QRCode" alt="QRCode" class="bg-white rounded-xl p-2">
                    <div class="flex justify-between gap-4 my-4">
                        <button class="hover:cursor-pointer">
                            <img :src="androidDownload" alt="iosDownload" >
                        </button>
                        <button class="hover:cursor-pointer">
                            <img :src="iosDownload" alt="iosDownload">
                        </button>
                    </div>
                </div>
            </div>
            <div class="lg:w-full lg:h-full w-auto h-auto max-lg:hidden">
                <img :src="Phone" class="lg:-right-10 lg:absolute" />
                <!-- <img :src="Phone" class="w-64 md:w-80 lg:w-auto lg:-right-10 lg:absolute" /> -->
            </div>
        </div>
    </section>
</template>
