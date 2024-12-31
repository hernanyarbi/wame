<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
</script>

<template>
  <div class="relative min-h-screen w-full bg-neutral-900">
    <div class="absolute inset-0 bg-green-900 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
    <main class="text-gray-200 flex justify-center h-full">
      <HeroSection />
    </main>
  </div>
</template>
