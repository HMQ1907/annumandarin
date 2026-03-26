<template>
  <div class="overflow-hidden">
    <!-- Hero Section with unique entrance -->
    <HeroSection />

    <!-- Reveal sections as we scroll -->
    <IntroSection class="reveal" />
    <BenefitsSection class="reveal-stagger" />
    
    <!-- CTA block on homepage -->
    <section class="py-16 bg-white reveal">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-indigo-950 mb-6">Bạn đã sẵn sàng cùng con trải nghiệm?</h2>
        <div class="flex justify-center gap-4">
          <NuxtLink to="/khoa-hoc" class="btn-primary">
            Xem Các Khóa Học
          </NuxtLink>
          <NuxtLink to="/dang-ky" class="btn-secondary">
            Đăng Ký Học Thử
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

// Set meta for homepage
useHead({
  title: 'Annu Mandarin - Khởi Đầu Hoàn Hảo Cho Con',
  meta: [
    { name: 'description', content: 'Trung tâm tiếng Anh online với 100% giáo viên bản xứ, trải nghiệm học bứt phá cho trẻ em.' }
  ]
})

// Initialize scroll reveal animations
useScrollReveal()
</script>
