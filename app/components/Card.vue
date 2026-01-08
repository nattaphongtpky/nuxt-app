<template>
    <div class="relative bg-white rounded-4xl shadow-2xl p-4 lg:p-16 border-none z-30 lg:-mt-48 max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-4">
            <div class="lg:-ml-32 ml-12">
                <img src="~/assets/picture/Img-about.png" class="object-cover" />
            </div>

            <div class="space-y-4">
                <span class="text-brand-primary text-4xl lg:text-6xl font-bold text-coral text-balance">
                    Klass Bits
                </span>
                <p class="text-brand-primary font-bold text-2xl">
                    แพลตฟอร์มจัดการเรียนรู้ (LMS)
                </p>

                <div class="space-y-6 leading-relaxed">
                    <p class="text-brand-foreground">
                        Klass Bits แพลตฟอร์มจัดการเรียนรู้ Learning Management System (LMS)
                        เพื่อสร้างความสำเร็จในการสอนและการเรียนรู้
                        เพื่อสร้างความเหมาะสมสำหรับการจัดการเรียนการสอนในโรงเรียน
                        ออนไลน์หรือรูปแบบแบบผสมในระดับชั้นปฐมวัย
                    </p>
                    <p class="text-brand-foreground">
                        มีระบบเครื่องมือ และฟังก์ชั่นการใช้งานผ่านแอปพลิเคชั่นอย่าง
                        ครบถ้วนสำหรับการจัดการเรียนการสอน เพื่อให้นักเรียนได้รับการเรียน
                        รู้ในบทเรียนได้อย่างครบถ้วน และเหมาะสมในแต่ละระดับชั้นเรียน
                    </p>
                </div>
                <div class="flex flex-wrap gap-3 pt-4">
                    <div v-for="tag in tags" :key="tag"
                        class="bg-brand-primary text-white rounded-full px-4 py-2 text-center font-normal text-sm shadow-[0_8px_10px_-7px_rgba(204,63,36,1)] hover:cursor-pointer hover:bg-brand-second transition-colors">
                        {{ tag }}
                    </div>
                </div>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-x-12 gap-y-20 mt-16">
            <div v-for="feature in features" :key="feature.title"
                class="p-4 space-y-8 hover:shadow-lg rounded-xl transition-shadow shadow-[0_4px_10px_0_rgba(220,225,255,1)] hover:cursor-pointer">
                <div class="flex justify-between items-center relative">
                    <p className="text-orange-500 font-bold mb-2">{{
                        feature.title
                    }}</p>
                    <img :src="feature.src" class="w-36 h-28 absolute right-0 -top-16" />
                </div>
                <p className="text-lg text-foreground font-bold">
                    {{ feature.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    features: {
        type: Array,
        default: () => [],
    },
    tags: {
        type: Array,
        default: () => [],
    },
});
</script>
