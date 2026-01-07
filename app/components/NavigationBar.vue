<template>
    <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
        <div class="container px-4 py-4 max-w-7xl mx-auto">
            <div class="flex items-center justify-between">
                <div class="translate-y-2">
                    <a href="/">
                        <img src="~/assets/picture/logo.png" alt="Logo" class="w-52 h-auto" />
                    </a>
                </div>

                <div
                    class="hidden md:flex items-center gap-8 bg-brand-primary p-4 rounded-4xl shadow-xl/25 border-3 border-brand-second">
                    <a href="#home"
                        class="text-white hover:text-white/80 transition-colors font-medium flex gap-2 items-center group">
                        <div class="h-2 w-2 bg-yellow-400 group-hover:bg-yellow-500 rounded-full"></div>
                        Home
                    </a>
                    <a href="#about"
                        class="text-white hover:text-white/80 transition-colors font-medium flex gap-2 items-center group">
                        <div class="h-2 w-2 bg-yellow-400 group-hover:bg-yellow-500 rounded-full"></div>
                        About us
                    </a>
                    <a href="#courses"
                        class="text-white hover:text-white/80 transition-colors font-medium flex gap-2 items-center group">
                        <div class="h-2 w-2 bg-yellow-400 group-hover:bg-yellow-500 rounded-full"></div>
                        Courses
                    </a>
                    <a href="#testimonials"
                        class="text-white hover:text-white/80 transition-colors font-medium flex gap-2 items-center group">
                        <div class="h-2 w-2 bg-yellow-400 group-hover:bg-yellow-500 rounded-full"></div>
                        Testimonials
                    </a>
                    <a href="#contact"
                        class="text-white hover:text-white/80 transition-colors font-medium flex gap-2 items-center group">
                        <div class="h-2 w-2 bg-yellow-400 group-hover:bg-yellow-500 rounded-full"></div>
                        Contact us
                    </a>
                </div>

                <div class="flex items-center gap-4">
                    <button class="h-14 w-14 rounded-full hover:cursor-pointer hover:opacity-90">
                        <img src="~/assets/picture/line-icon.png" class="object-cover translate-y-1" />
                    </button>
                    <button class="h-14 w-14 rounded-full hover:cursor-pointer hover:opacity-90">
                        <img src="~/assets/picture/facebook-icon.png" class="object-cover translate-y-1" />
                    </button>
                    <button
                        class="bg-brand-dark text-white px-6 py-3 rounded-full hover:cursor-pointer hover:bg-brand-dark/50 transition shadow-xl/25">
                        081-234-5678
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>