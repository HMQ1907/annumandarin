<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-black text-lg shadow-md group-hover:scale-110 transition-transform">
            A
          </div>
          <span class="text-xl font-extrabold text-indigo-950 transition-colors">
            AnNu<span class="text-pink-500">English</span>
          </span>
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-2">
          <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path"
            class="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            :class="route.path === item.path ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600'">
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center">
          <NuxtLink to="/dang-ky" class="btn-primary text-sm px-6 py-2">
            Đăng Ký Thử
          </NuxtLink>
        </div>

        <!-- Mobile Menu Toggle -->
        <button @click="mobileOpen = !mobileOpen" class="md:hidden p-2 rounded-lg text-indigo-950 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
      <div v-if="mobileOpen" class="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
        <nav class="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
          <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" @click="mobileOpen = false"
            class="px-4 py-3 rounded-xl text-gray-700 font-semibold hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            :class="route.path === item.path ? 'bg-indigo-50 text-indigo-600' : ''">
            {{ item.label }}
          </NuxtLink>
          <div class="pt-2">
            <NuxtLink to="/dang-ky" class="btn-primary w-full text-center" @click="mobileOpen = false">
              Đăng Ký Học Thử
            </NuxtLink>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const scrolled = ref(false)
const mobileOpen = ref(false)
const route = useRoute()

const navItems = [
  { label: 'Trang Chủ', path: '/' },
  { label: 'Khóa Học & Lộ Trình', path: '/khoa-hoc' },
  { label: 'Giáo Viên & Đánh Giá', path: '/giao-vien' }
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Trigger once on mount
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  scrolled.value = window.scrollY > 10 || route.path !== '/'
}
</script>
