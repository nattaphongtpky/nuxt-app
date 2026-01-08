<template>
  <section id="about" class="py-20 -mt-36 px-8 bg-brand-second relative">
    <div class="container mx-auto z-20">
      <Card :features="features" :tags="tags" />
    </div>
  </section>
</template>

<script setup>
import imgManagement1 from "~/assets/picture/img-management.png";
import imgManagement2 from "~/assets/picture/img-management-2.png";
import imgManagement3 from "~/assets/picture/img-management-3.png";
import imgManagement4 from "~/assets/picture/img-management-4.png";
import imgFollowup from "~/assets/picture/img-followup.png";
import imgExamination from "~/assets/picture/Img-exmination.png";

const features = [
  {
    title: "Management",
    description: "การจัดการโรงเรียน/ผู้สอน",
    src: imgManagement1,
  },
  {
    title: "Management",
    description: "การจัดการห้องเรียน/รายชื่อผู้เรียน",
    src: imgManagement2,
  },
  {
    title: "Management",
    description: "การจัดการเรียนการสอน",
    src: imgManagement3,
  },
  {
    title: "Management",
    description: "การจัดการโรงเรียน/ผู้สอน",
    src: imgManagement4,
  },
  {
    title: "Follow Up",
    description: "การจัดการห้องเรียน/รายชื่อผู้เรียน",
    src: imgFollowup,
  },
  {
    title: "Examination",
    description: "การจัดการเรียนการสอน",
    src: imgExamination,
  },
];

const tags = [
  "School",
  "Teacher",
  "Classroom",
  "Student",
  "Parent",
  "Lesson",
  "Teaching",
  "Track Score",
];
</script>
