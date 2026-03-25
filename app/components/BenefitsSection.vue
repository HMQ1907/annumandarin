<template>
  <section class="py-24 bg-[#FAFAFE]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="section-badge">TẠI SAO CHỌN CHÚNG TÔI</span>
        <h2 class="section-heading">Điểm Khác Biệt Của <span class="gradient-text">AnNu</span></h2>
        <p class="section-desc">Môi trường hoàn hảo để trẻ phát triển song ngữ tự nhiên như ngôn ngữ mẹ đẻ.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(benefit, index) in benefits" :key="index"
          class="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(99,102,241,0.12)] transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm"
            :class="benefit.colorClass">
            {{ benefit.icon }}
          </div>

          <h3 class="text-xl font-bold text-indigo-950 mb-3">{{ benefit.title }}</h3>
          <p class="text-gray-500 leading-relaxed font-medium">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    icon: '👨‍🏫',
    title: '100% Bản Xứ',
    description: 'Giáo viên từ các nước nói tiếng Anh với chứng chỉ nghiệp vụ sư phạm quốc tế TESOL/CELTA.',
    colorClass: 'bg-indigo-50 text-indigo-600'
  },
  {
    icon: '✨',
    title: 'Phương Pháp VAK',
    description: 'Học qua Visual (Nhìn) - Auditory (Nghe) - Kinesthetic (Vận động) tối đa hóa khả năng tiếp thu.',
    colorClass: 'bg-pink-50 text-pink-600'
  },
  {
    icon: '👥',
    title: 'Lớp Học Nhỏ',
    description: 'Tối đa 6-8 học viên một lớp, đảm bảo thời lượng tương tác ngoại ngữ lên tới 80% mỗi buổi học.',
    colorClass: 'bg-green-50 text-green-600'
  },
  {
    icon: '📱',
    title: 'App Đồng Hành',
    description: 'Ứng dụng hỗ trợ ôn tập mọi lúc, báo cáo kết quả học tập minh bạch cho phụ huynh mỗi ngày.',
    colorClass: 'bg-yellow-50 text-yellow-600'
  }
]
</script>
