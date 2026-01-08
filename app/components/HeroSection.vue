<template>
    <section id="home"
        class="relative z-10 lg:-mb-48 mb-0 min-h-screen lg:h-267.5 h-full overflow-hidden lg:[clip-path:polygon(0_0,100%_0,100%_100%,0_90%)] bg-[linear-gradient(180deg,var(--color-brand-primary)_60%,var(--color-brand-dark)_100%)]">
        <!-- [clip-path:polygon(0_0,100%_0,100%_100%,0_94%)] -->
        <div class="container relative pt-20 lg:max-w-6xl max-w-full lg:mx-auto md:pt-36 mb-32">
            <!-- grid lg:grid-cols-2 gap-2 lg:gap-4 items-center ms-8 -->
            <div class="flex lg:flex-row flex-col gap-2 lg:gap-4 lg:items-end items-center lg:ms-8 ms:0">
                <!-- min-h-[calc(100vh-6rem)] -->
                <div mdiv class="text-center lg:text-left py-16 md:py-4 lg:py-0">
                    <span class="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4">
                        Klass<br />Bits
                    </span>
                    <p class="text-xl md:text-2xl text-white mb-2 font-bold">
                        แพลตฟอร์มจัดการเรียนรู้
                    </p>
                    <p class="text-xl md:text-2xl text-white mb-2 font-bold">
                        Learning <span class="text-[#492F10]">Management</span> System
                    </p>
                    <p class="text-[#FFEBBD] mb-6 text-xs md:text-lg max-w-md mx-auto lg:mx-0 font-normal">
                        ระบบบริหารจัดการการเรียนการสอนครบวงจร
                        สำหรับโรงเรียนและสถาบันการศึกษา
                    </p>

                    <div class="flex flex-wrap gap-2 justify-center lg:justify-start mb-4 items-center">
                        <div
                            class="text-center text-sm bg-brand-primary border-2 border-brand-second py-2 px-4 rounded-full text-white shadow-lg/15">
                            develop learners
                        </div>
                        <div
                            class="text-center text-sm bg-brand-primary border-2 border-brand-second py-2 px-4 rounded-full text-white shadow-lg/15">
                            help teacher
                        </div>
                        <div
                            class="text-center text-sm bg-brand-primary border-2 border-brand-second py-2 px-4 rounded-full text-white shadow-lg/15">
                            school upgrade
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2 justify-center lg:justify-start mt-12">
                        <button
                            class="group relative flex items-center justify-center gap-2 rounded-full border-[5px] border-white bg-linear-to-b from-[#ffcf5e] to-[#ff9f2a] px-10 py-3 transition-all ease-in-out hover:scale-110 active:scale-95 shadow-[0_5px_8px_rgba(0,0,0,0.1)] hover:opacity-90 hover:cursor-pointer">
                            <div class="absolute inset-0 rounded-full shadow-[inset_0_-6px_0_rgba(0,0,0,0.15)]">
                            </div>
                            <span class="text-2xl font-black tracking-wide text-white drop-shadow-md">
                                GET STARTED
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

                <div class="h-full">
                    <div
                        class="w-4/5 h-full lg:w-2xl lg:h-full flex lg:justify-end justify-center lg:items-end items-center">
                        <img src="~/assets/picture/lion-hero.png" class="translate-x-12 lg:translate-x-0" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
