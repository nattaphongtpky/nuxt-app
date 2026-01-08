<template>
  <section id="courses"
    class="relative z-10 overflow-hidden bg-brand-cream lg:-mb-48 mb-0 lg:py-20 py-8 px-4 min-h-screen h-full lg:[clip-path:polygon(0_0,100%_0,100%_85%,0_100%)]">
    <div class="absolute inset-0 opacity-80 pointer-events-none">
      <div class="absolute top-10 left-20">
        <img :src="IconLabtop" />
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
    </div>

    <div class="container max-w-6xl mx-auto relative grid lg:grid-cols-2 gap-4 items-center">
      <div class="flex max-lg:justify-center">
        <img src="~/assets/picture/img-courses.png" class="rounded-2xl border-[1rem] border-white lg:-ms-48 ms-0" />
      </div>

      <div class="space-y-2 flex flex-col justify-between h-full">
        <div class="mt-12">
          <div class="mb-4">
            <h2 class="text-4xl lg:text-5xl font-bold text-coral text-brand-primary">
              Courses
            </h2>
            <p class="text-2xl font-bold text-brand-primary">
              หลักสูตรเรียนการสอนที่หลากหลาย
            </p>
          </div>
          <span class="text-brand-foreground">
            เนื้อหาวิชา สื่อประกอบการสอน
            และชุดข้อสอบเพื่อวัดผลการเรียนรู้ในแต่ละระดับ
            ชั้นโดยใช้มาตรฐานกลางสำหรับสถาบันการศึกษา เพื่อยกระดับคุณภาพ
            บุคคลากรและเกิดประโยชน์สูงสุดของผู้เรียน
          </span>
        </div>
        <div class="grid lg:grid-cols-2 gap-8">
          <div v-for="(course, index) in courses" :key="index"
            class="p-4 rounded-xl bg-white hover:shadow-2xl transition-shadow shadow-[0_24px_60px_-34px_rgba(245,103,76,1)] hover:cursor-pointer">
            <div class="flex justify-between items-center relative">
              <p className="text-orange-500 font-bold mb-2">{{
                course.subtitle
              }}</p>
              <img :src="course.src" class="w-36 h-28 absolute -right-16 -top-16" />
            </div>
            <p className="text-lg text-foreground font-bold">
              {{ course.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconLabtop from "~/assets/picture/laptop.png";
import IconBook from "~/assets/picture/book.png";
import IconPencil from "~/assets/picture/pencil.png";
import IconStart from "~/assets/picture/star.png";
import ImgCourses1 from "~/assets/picture/img-courses-1.png";
import ImgCourses2 from "~/assets/picture/img-courses-2.png";

const courses = [
  {
    title: "วิชาคณิตศาสตร์",
    subtitle: "Mathematics",
    src: ImgCourses1,
  },
  {
    title: "วิชาวิทยาศาสตร์",
    subtitle: "Science",
    src: ImgCourses2,
  },
];
</script>
