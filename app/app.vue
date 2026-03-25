<template>
  <div class="min-h-screen flex flex-col">
    <AppNavbar />
    
    <main class="flex-grow pt-16 md:pt-20">
      <NuxtPage />
    </main>
    
    <FooterSection />

    <!-- Scroll to top button -->
    <Transition name="page">
      <button v-if="showScrollTop" @click="scrollToTop"
        class="fixed bottom-6 right-6 w-12 h-12 rounded-full border-0 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center z-50 cursor-pointer text-white bg-gradient-to-br from-indigo-500 to-pink-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showScrollTop = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  showScrollTop.value = window.scrollY > 500
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style>
/* Page transition rules are in main.css */
</style>
