<template>
  <section class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="section-badge">HỎI ĐÁP</span>
        <h2 class="section-heading">Câu Hỏi Thường Gặp</h2>
        <p class="section-desc">Tổng hợp những thắc mắc phổ biến từ quý phụ huynh trước khi đăng ký lộ trình học cho con.</p>
      </div>

      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index"
          class="bg-white rounded-2xl border transition-all duration-300 overflow-hidden"
          :class="openIndex === index ? 'border-indigo-200 shadow-[0_10px_30px_rgb(99,102,241,0.1)]' : 'border-gray-100 shadow-sm hover:border-gray-200'">
          
          <button @click="toggleFaq(index)" class="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
            <span class="font-bold text-lg" :class="openIndex === index ? 'text-indigo-600' : 'text-indigo-950'">
              {{ faq.question }}
            </span>
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
              :class="openIndex === index ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-50 text-gray-400'">
              <svg class="w-5 h-5 transform transition-transform duration-300" :class="openIndex === index ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <Transition enter-active-class="transition-[max-height,opacity] duration-500 ease-in-out" enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-96 opacity-100"
            leave-active-class="transition-[max-height,opacity] duration-300 ease-in-out" leave-from-class="max-h-96 opacity-100" leave-to-class="max-h-0 opacity-0">
            <div v-if="openIndex === index">
              <div class="px-6 pb-6 pt-2 text-gray-600 leading-relaxed font-medium block">
                {{ faq.answer }}
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Support CTA -->
      <div class="mt-16 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-[2rem] p-8 md:p-12 text-center border border-white shadow-xl">
        <h3 class="text-2xl font-bold text-indigo-950 mb-3">Vẫn Còn Câu Hỏi?</h3>
        <p class="text-gray-600 mb-8 max-w-lg mx-auto">Đội ngũ chuyên viên tư vấn của AnNu English luôn sẵn sàng giải đáp và định hướng lộ trình tốt nhất.</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/dang-ky" class="btn-primary">
            Đăng Ký Tư Vấn Ngay
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(0) // Mở sẵn câu đầu tiên

function toggleFaq(index) {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'Trung tâm có test đầu vào miễn phí không?',
    answer: 'Có. Trước khi đăng ký, bé sẽ được tham gia một buổi học thử 45 phút hoàn toàn MIỄN PHÍ với giáo viên nước ngoài. Qua đó, thầy cô sẽ đánh giá chính xác trình độ và xếp lớp phù hợp nhất.'
  },
  {
    question: 'Bao lâu mới thấy sự tiến bộ của con?',
    answer: 'Thông thường sau 2-3 tháng học tập, phụ huynh sẽ thấy rõ sự thay đổi trong sự dạn dĩ, khả năng phản xạ nghe hiểu. Để phát âm lưu loát và đạt chứng chỉ cần lộ trình từ 6 tháng đến 1 năm.'
  },
  {
    question: 'Giáo viên có đổi liên tục giữa khóa không?',
    answer: 'AnNu English cam kết 1 lớp sẽ do 1 giáo viên phụ trách xuyên suốt toàn khóa học (khóa 6 tháng) để duy trì sự thấu hiểu tâm lý và gắn kết giữa thầy trò.'
  },
  {
    question: 'Nếu bé bận nghỉ buổi thì có được học bù?',
    answer: 'Có. Phụ huynh vui lòng báo trước qua App đồng hành. Trung tâm sẽ sắp xếp cho bé học bù vào một lớp có cùng trình độ hoặc hỗ trợ tutor kèm 1-1.'
  },
  {
    question: 'Học phí thanh toán như thế nào?',
    answer: 'Phụ huynh có thể thanh toán linh hoạt qua chuyển khoản hoặc thẻ Visa/Mastercard. Trung tâm cũng hỗ trợ trả góp lãi suất 0% cho các khóa học dài hạn (12 tháng trở lên).'
  }
]
</script>
