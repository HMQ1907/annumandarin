<template>
  <div class="overflow-hidden pb-20">
    <div class="bg-gradient-to-br from-indigo-50 to-pink-50 py-16 md:py-24 relative overflow-hidden">
      <!-- Decor -->
      <div class="absolute top-10 right-10 w-24 h-24 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float"></div>
      
      <div class="max-w-7xl mx-auto px-4 relative z-10 text-center animate-fade-down">
        <span class="section-badge bg-white shadow-sm mb-4">Đội Ngũ</span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-indigo-950 mb-6">Giáo Viên Của Chúng Tôi</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">Tận tâm, chuyên nghiệp và giàu kinh nghiệm - những người truyền cảm hứng cho thế hệ tương lai.</p>
      </div>
    </div>
    
    <TeachersSection class="reveal" />
    <FeedbackSection class="reveal-stagger mt-10" />
    <FAQSection class="reveal" />
  </div>
</template>

<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

useHead({ title: 'Đội Ngũ - AnNu English' })
useScrollReveal()
</script>
