<template>
  <div class="overflow-hidden">
    <!-- Clean standalone form page -->
    <RegistrationForm />
  </div>
</template>

<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

useHead({ title: 'Đăng Ký Khóa Học - Annu Mandarin' })
useScrollReveal()
</script>
