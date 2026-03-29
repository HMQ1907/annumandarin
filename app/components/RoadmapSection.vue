<template>
  <section class="py-24 bg-white relative overflow-hidden">
    <!-- Decor bg -->
    <div class="absolute -right-40 top-40 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-20 animate-fade-up">
        <span class="section-badge">HÀNH TRÌNH KIẾN TẠO</span>
        <h2 class="section-heading">Lộ Trình Xuyên Suốt <span class="gradient-text">6 Cấp Độ</span></h2>
        <p class="section-desc">Được cá nhân hóa tỉ mỉ, giúp trẻ giữ được đam mê và gặt hái chứng chỉ vững vàng qua từng giai đoạn tuổi thơ.</p>
      </div>

      <div class="relative max-w-5xl mx-auto">
        <!-- Central Line -->
        <div class="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-1.5 bg-indigo-100 rounded-full"></div>

        <div v-for="(step, i) in steps" :key="i" class="relative mb-16 last:mb-0">
          <div class="flex flex-col md:flex-row items-center justify-between group">
            
            <!-- Left Side / Blank -->
            <div class="w-full md:w-[45%] pl-20 md:pl-0" :class="i % 2 === 0 ? 'md:text-right md:pr-14 order-2 md:order-1' : 'order-2 md:order-3 invisible hidden md:block'">
              <div v-if="i % 2 === 0" class="bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgb(99,102,241,0.15)] border border-gray-100 transition-all duration-300 transform group-hover:-translate-y-1">
                <span class="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" :class="step.colorClass">{{ step.level }}</span>
                <h3 class="text-2xl font-black text-indigo-950 mb-3">{{ step.title }}</h3>
                <p class="text-gray-500 mb-5 leading-relaxed font-medium">{{ step.desc }}</p>
                <div class="flex flex-wrap gap-2 md:justify-end">
                  <span v-for="skill in step.skills" :key="skill" class="px-2 py-1 bg-gray-50 border border-gray-100 text-gray-600 rounded text-xs font-bold">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Bullet -->
            <div class="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-[4px] border-white shadow-lg bg-white z-10 top-0 md:top-auto group-hover:scale-110 transition-transform duration-300 order-1 md:order-2" :class="step.borderClass">
              <span class="text-xl leading-none" :class="step.textClass">{{ i + 1 }}</span>
            </div>

            <!-- Right Side / Blank -->
            <div class="w-full md:w-[45%] pl-20 md:pl-14" :class="i % 2 !== 0 ? 'order-2 md:order-3' : 'order-2 md:order-3 invisible hidden md:block'">
              <div v-if="i % 2 !== 0" class="bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgb(99,102,241,0.15)] border border-gray-100 transition-all duration-300 transform group-hover:-translate-y-1 text-left">
                <span class="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" :class="step.colorClass">{{ step.level }}</span>
                <h3 class="text-2xl font-black text-indigo-950 mb-3">{{ step.title }}</h3>
                <p class="text-gray-500 mb-5 leading-relaxed font-medium">{{ step.desc }}</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in step.skills" :key="skill" class="px-2 py-1 bg-gray-50 border border-gray-100 text-gray-600 rounded text-xs font-bold">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    level: 'Starter', title: 'Khởi Đầu Khám Phá',
    desc: 'Làm quen hệ thống phát âm, nhận diện chữ cơ bản qua bài hát, trò chơi. Giúp não bộ tập làm quen với ngữ điệu ngoại ngữ.',
    skills: ['Ngữ Âm', 'Từ Vựng', 'Nghe Hiểu'],
    colorClass: 'bg-purple-100 text-purple-700', borderClass: 'border-purple-500', textClass: 'text-purple-600 font-black'
  },
  {
    level: 'Elementary', title: 'Nền Tảng Vững Chắc',
    desc: 'Hình thành khả năng bắt chước âm điệu chuẩn xác, thuộc từ vựng chủ đề gia đình, trường học. Xây dựng câu giao tiếp đơn.',
    skills: ['Phát Âm Chuẩn', 'Câu Đơn', 'Khẩu Ngữ'],
    colorClass: 'bg-pink-100 text-pink-700', borderClass: 'border-pink-500', textClass: 'text-pink-600 font-black'
  },
  {
    level: 'Pre-Intermediate', title: 'Phát Triển Đa Chiều',
    desc: 'Bổ sung kỹ năng đọc hiểu văn bản ngắn và luyện viết. Rèn luyện phản xạ ngôn ngữ tự nhiên và mạch lạc.',
    skills: ['Đọc Hiểu', 'Viết Cơ Bản', 'Phản Xạ'],
    colorClass: 'bg-indigo-100 text-indigo-700', borderClass: 'border-indigo-500', textClass: 'text-indigo-600 font-black'
  },
  {
    level: 'Intermediate', title: 'Tự Tin Biện Luận',
    desc: 'Có khả năng hội thoại trôi chảy chủ đề thường nhật. Đọc hiểu bài dài, nắm vững ngữ pháp ứng dụng.',
    skills: ['Hội Thoại', 'Ngữ Pháp', 'Thuyết Trình'],
    colorClass: 'bg-teal-100 text-teal-700', borderClass: 'border-teal-500', textClass: 'text-teal-600 font-black'
  },
  {
    level: 'Upper-Intermediate', title: 'Sắc Bén Ngôn Từ',
    desc: 'Giao tiếp ở mức sâu hơn (tư duy logic, bày tỏ quan điểm). Tương tác đa chiều trong các bối cảnh giao tiếp phức tạp.',
    skills: ['Biện Luận', 'Tư Duy Logic', 'Tương Tác Sâu'],
    colorClass: 'bg-orange-100 text-orange-700', borderClass: 'border-orange-500', textClass: 'text-orange-600 font-black'
  },
  {
    level: 'Advanced', title: 'Hội Nhập Toàn Cầu',
    desc: 'Trang bị kỹ năng tiếng Trung học thuật, hùng biện và có mặt trên các sân chơi sẵn sàng hội nhập môi trường quốc tế.',
    skills: ['Học Thuật', 'Viết Luận', 'Tự Tin Toàn Cầu'],
    colorClass: 'bg-rose-100 text-rose-700', borderClass: 'border-rose-500', textClass: 'text-rose-600 font-black'
  }
]
</script>
