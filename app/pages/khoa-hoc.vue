<template>
  <div class="overflow-hidden pb-20">
    <!-- Page Header -->
    <div class="bg-gradient-to-br from-indigo-50 to-pink-50 py-16 md:py-24 relative overflow-hidden">
      <!-- Decor -->
      <div class="absolute top-10 left-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float"></div>
      <div class="absolute bottom-10 right-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float-delayed"></div>
      
      <div class="max-w-7xl mx-auto px-4 relative z-10 text-center animate-fade-up">
        <span class="section-badge bg-white shadow-sm mb-4">Các Khóa Học</span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-indigo-950 mb-6">Lộ Trình Học Chuẩn Quốc Tế</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">Chọn khóa học phù hợp với độ tuổi và năng lực của con để tối ưu quá trình tiếp thu ngôn ngữ.</p>
      </div>
    </div>

    <!-- Main Content -->
    <CoursesSection class="reveal" />
    <RoadmapSection class="reveal-stagger mt-10" />
    
    <!-- CTA block -->
    <section class="mt-20 max-w-5xl mx-auto px-4 reveal-scale">
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Bắt Ðầu Hành Trình Ngay Hôm Nay</h2>
        <NuxtLink to="/dang-ky" class="btn-accent relative z-10 text-lg px-8 py-4">
          👉 Đăng Ký Học Thử Miễn Phí
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

useHead({ title: 'Khóa Học - Annu Mandarin' })
useScrollReveal()
</script>
