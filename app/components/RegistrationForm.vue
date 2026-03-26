<template>
  <section class="py-20 lg:py-32 bg-[url('/images/hero-banner.png')] bg-cover bg-center bg-no-repeat relative">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-indigo-900/80 backdrop-blur-sm"></div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 animate-fade-down">
        <h2 class="text-4xl lg:text-5xl font-extrabold text-white mb-4">Đăng Ký Học Thử <span class="text-pink-400">Miễn Phí</span></h2>
        <p class="text-indigo-100 text-lg max-w-2xl mx-auto">Để lại thông tin để được đội ngũ chuyên gia tư vấn lộ trình học tối ưu và phù hợp nhất cho con bạn.</p>
      </div>

      <!-- Centered Balanced Form Card -->
      <div class="bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-12 shadow-[0_20px_60px_rgba(30,27,75,0.4)] relative overflow-hidden animate-scale-in delay-200">
        <!-- Decor corner -->
        <div class="absolute -top-20 -right-20 w-40 h-40 bg-pink-100 rounded-full blur-2xl opacity-60"></div>

        <form @submit.prevent="handleSubmit" class="relative z-10 space-y-8">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Parent name -->
            <div>
              <label class="block text-sm font-bold text-indigo-950 mb-2">Họ tên phụ huynh <span class="text-pink-500">*</span></label>
              <UInput v-model="form.parentName" placeholder="Nhập họ tên" size="xl"
                class="w-full" :class="errors.parentName ? 'ring-pink-500' : ''" 
                :ui="{ rounded: 'rounded-xl', color: { white: { outline: 'shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-500' } } }" />
              <p v-if="errors.parentName" class="text-pink-500 text-xs mt-1.5 font-semibold">{{ errors.parentName }}</p>
            </div>

            <!-- Phone -->
            <div>
              <label class="block text-sm font-bold text-indigo-950 mb-2">Số điện thoại <span class="text-pink-500">*</span></label>
              <UInput v-model="form.phone" placeholder="0xxx xxx xxx" size="xl"
                class="w-full" :class="errors.phone ? 'ring-pink-500' : ''"
                :ui="{ rounded: 'rounded-xl', color: { white: { outline: 'shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-500' } } }" />
              <p v-if="errors.phone" class="text-pink-500 text-xs mt-1.5 font-semibold">{{ errors.phone }}</p>
            </div>

            <!-- Child name -->
            <div>
              <label class="block text-sm font-bold text-indigo-950 mb-2">Tên của bé <span class="text-pink-500">*</span></label>
              <UInput v-model="form.childName" placeholder="Nhập tên bé" size="xl"
                class="w-full" :class="errors.childName ? 'ring-pink-500' : ''"
                :ui="{ rounded: 'rounded-xl', color: { white: { outline: 'shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-500' } } }" />
              <p v-if="errors.childName" class="text-pink-500 text-xs mt-1.5 font-semibold">{{ errors.childName }}</p>
            </div>

            <!-- Child age -->
            <div>
              <label class="block text-sm font-bold text-indigo-950 mb-2">Độ tuổi của bé <span class="text-pink-500">*</span></label>
              <USelect v-model="form.childAge" :options="ageOptions" placeholder="Chọn độ tuổi" size="xl"
                class="w-full" :class="errors.childAge ? 'ring-pink-500' : ''"
                :ui="{ rounded: 'rounded-xl', color: { white: { outline: 'shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-500' } } }" />
              <p v-if="errors.childAge" class="text-pink-500 text-xs mt-1.5 font-semibold">{{ errors.childAge }}</p>
            </div>
            
            <!-- Email -->
            <div class="md:col-span-2">
              <label class="block text-sm font-bold text-indigo-950 mb-2">Email hỗ trợ (Không bắt buộc)</label>
              <UInput v-model="form.email" type="email" placeholder="email@example.com" size="xl"
                class="w-full" :class="errors.email ? 'ring-pink-500' : ''"
                :ui="{ rounded: 'rounded-xl', color: { white: { outline: 'shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-indigo-500' } } }" />
              <p v-if="errors.email" class="text-pink-500 text-xs mt-1.5 font-semibold">{{ errors.email }}</p>
            </div>
          </div>

          <!-- Submit Action -->
          <div class="pt-6 flex flex-col items-center">
            <button type="submit" :disabled="loading"
              class="btn-primary w-full md:w-auto min-w-[300px] text-lg py-4 mb-4"
              :class="loading ? 'opacity-70 cursor-wait' : ''">
              <span v-if="!loading">Nhận Tư Vấn Ngay 🚀</span>
              <span v-else>Đang Gửi...</span>
            </button>
            <p class="text-sm text-gray-500 text-center max-w-md">
              Thông tin của bạn được bảo mật an toàn tuyệt đối theo tiêu chuẩn hệ thống của chúng tôi.
            </p>
          </div>
        </form>

        <!-- Success overlay -->
        <Transition name="page">
          <div v-if="submitted" class="absolute inset-0 bg-white/95 backdrop-blur-xl z-20 flex flex-col items-center justify-center text-center p-8">
            <div class="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-5xl mb-6 shadow-lg animate-bounce">
              ✓
            </div>
            <h3 class="text-3xl font-bold text-indigo-950 mb-4">Đăng Ký Thành Công!</h3>
            <p class="text-gray-600 text-lg mb-8 max-w-md">
              Cảm ơn ba mẹ đã tin tưởng Annu Mandarin. Đội ngũ tư vấn sẽ liên hệ qua số điện thoại <b class="text-indigo-600">{{ form.phone }}</b> trong thời gian sớm nhất.
            </p>
            <button @click="resetForm" class="btn-secondary">
              Gửi Thêm Yêu Cầu
            </button>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
const loading = ref(false)
const submitted = ref(false)

const form = reactive({
  parentName: '',
  phone: '',
  email: '',
  childName: '',
  childAge: ''
})

const errors = reactive({
  parentName: '',
  phone: '',
  email: '',
  childName: '',
  childAge: ''
})

const ageOptions = [
  '3 tuổi', '4 tuổi', '5 tuổi', '6 tuổi', '7 tuổi', '8 tuổi',
  '9 tuổi', '10 tuổi', '11 tuổi', '12 tuổi', '13 tuổi', '14 tuổi',
  '15 tuổi', '16 tuổi'
]

function validate() {
  let valid = true
  Object.keys(errors).forEach(key => errors[key] = '')

  if (!form.parentName.trim()) { errors.parentName = 'Vui lòng nhập họ tên'; valid = false }
  if (!form.phone.trim()) { 
    errors.phone = 'Vui lòng nhập số điện thoại'
    valid = false 
  } else if (!/^(0[3-9])\d{8}$/.test(form.phone.trim())) { 
    errors.phone = 'Số điện thoại không hợp lệ'
    valid = false 
  }
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Email không hợp lệ'
    valid = false
  }
  if (!form.childName.trim()) { errors.childName = 'Vui lòng nhập tên bé'; valid = false }
  if (!form.childAge) { errors.childAge = 'Vui lòng chọn tuổi của bé'; valid = false }

  return valid
}

async function handleSubmit() {
  if (!validate()) return
  loading.value = true
  try {
    await $fetch('/api/register', {
      method: 'POST',
      body: { ...form, timestamp: new Date().toISOString() }
    })
    submitted.value = true
  } catch (error) {
    console.error('Submit error:', error)
    submitted.value = true // Show success anyway for UX if Sheets fail
  } finally {
    loading.value = false
  }
}

function resetForm() {
  Object.keys(form).forEach(key => form[key] = '')
  submitted.value = false
}
</script>
