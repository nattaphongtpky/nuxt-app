<script setup lang="ts">
import AboutSection from './components/AboutSection.vue';
import AppShowCase from './components/AppShowCase.vue';
import CoursesSection from './components/CoursesSection.vue';
import DownloadSection from './components/DownloadSection.vue';
import FooterSection from './components/FooterSection.vue';
import HeroSection from './components/HeroSection.vue';
import NavigationBar from './components/NavigationBar.vue';

</script>

<template>
  <div class="min-h-screen">
    <NavigationBar />
    <HeroSection />
    <AboutSection />
    <CoursesSection />
    <AppShowCase />
    <DownloadSection />
    <FooterSection />
  </div>
</template>
