<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="section-badge">CHƯƠNG TRÌNH ĐÀO TẠO</span>
        <h2 class="section-heading">Khóa Học Tập Trung <span class="gradient-text">Năng Lực</span></h2>
        <p class="section-desc">Lộ trình học bài bản đi từ nghe nói tự nhiên đến tư duy phản xạ logic bằng Tiếng Trung.</p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(course, i) in courses" :key="course.title"
          class="bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgb(99,102,241,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col">
          
          <!-- Image/Gradient Top -->
          <div class="h-40 relative overflow-hidden flex-shrink-0" :class="course.bgClass">
            <div class="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>
            
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-6xl drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500">{{ course.icon }}</span>
            </div>
            
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-4 py-1.5 text-xs font-black text-indigo-900 shadow-sm">
              {{ course.duration }}
            </div>
          </div>

          <!-- Body -->
          <div class="p-8 flex flex-col flex-grow">
            <h3 class="text-2xl font-black text-indigo-950 mb-3">{{ course.title }}</h3>
            <p class="text-gray-500 text-sm mb-6 leading-relaxed flex-grow border-b border-gray-50 pb-6">{{ course.description }}</p>

            <div class="space-y-3 mb-8">
              <div class="flex items-center text-sm">
                <span class="w-6 text-indigo-500 mr-2">📅</span>
                <span class="text-gray-600 font-medium whitespace-pre-wrap"><strong class="text-indigo-900">Thời gian:</strong> {{ course.durationFull }}</span>
              </div>
              <div class="flex items-center text-sm">
                <span class="w-6 text-indigo-500 mr-2">🎓</span>
                <span class="text-gray-600 font-medium"><strong class="text-indigo-900">Số buổi:</strong> {{ course.sessions }}</span>
              </div>
              <div class="flex items-start text-sm">
                <span class="w-6 text-indigo-500 mr-2 mt-0.5">⏱️</span>
                <span class="text-gray-600 font-medium leading-tight">
                  <strong class="text-indigo-900">Thời lượng:</strong> 
                  <br/>{{ course.timePerSession }} 
                  <br/><span class="text-xs text-gray-500 mt-1 block">{{ course.freq }}</span>
                </span>
              </div>
            </div>

            <!-- Pricing Footer -->
            <div class="pt-6 border-t border-gray-100 flex flex-col justify-end mt-auto space-y-3">
              <div class="flex justify-between items-center bg-indigo-50/50 p-3 rounded-xl border border-indigo-50">
                <span class="text-xs text-indigo-900 font-bold uppercase tracking-wide">1 kèm 1</span>
                <div class="text-lg font-black text-indigo-600">{{ course.price1 }}<span class="text-xs text-gray-500 font-normal">đ</span></div>
              </div>
              
              <div v-if="course.price2" class="flex justify-between items-center bg-pink-50/50 p-3 rounded-xl border border-pink-50">
                <span class="text-xs text-pink-900 font-bold uppercase tracking-wide">1 kèm 2</span>
                <div class="text-lg font-black text-pink-600">{{ course.price2 }}<span class="text-xs text-gray-500 font-normal">đ</span></div>
              </div>
            </div>
            
            <div class="mt-6 flex justify-center">
              <NuxtLink to="/dang-ky" class="w-full text-center py-3 rounded-xl bg-indigo-50 text-indigo-600 font-bold hover:bg-indigo-600 hover:text-white transition-colors">
                Đăng Ký Khóa Học
              </NuxtLink>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const courses = [
  {
    title: 'KID 1',
    description: 'Tập trung vào khả năng Nghe chủ động và Đoán ý nghĩa thông qua Ngôn ngữ hình thể',
    icon: '🎭',
    duration: '3 tháng',
    durationFull: '3 tháng',
    sessions: '48 buổi',
    timePerSession: '30 phút / buổi',
    freq: 'Mỗi tuần 4 buổi',
    bgClass: 'bg-gradient-to-br from-purple-400 to-indigo-500',
    price1: '6,000,000',
    price2: null
  },
  {
    title: 'KID 2',
    description: 'Phát triển kỹ năng Nói chủ động dựa trên cảm xúc và bối cảnh giao tiếp thực tế.',
    icon: '🗣️',
    duration: '6 tháng',
    durationFull: '6 tháng',
    sessions: '72 buổi',
    timePerSession: '45 phút / buổi',
    freq: 'Mỗi tuần 3 buổi',
    bgClass: 'bg-gradient-to-br from-pink-400 to-rose-500',
    price1: '13,320,000',
    price2: '9,720,000'
  },
  {
    title: 'KID 3',
    description: 'Hình thành khả năng Phản xạ linh hoạt trong các bối cảnh giao tiếp phức tạp.',
    icon: '⚡',
    duration: '9 tháng',
    durationFull: '9 tháng',
    sessions: '72 buổi',
    timePerSession: '60 phút / buổi',
    freq: 'Mỗi tuần 2 buổi',
    bgClass: 'bg-gradient-to-br from-cyan-400 to-blue-500',
    price1: '19,440,000',
    price2: '10,440,000'
  },
  {
    title: 'KID 4',
    description: 'Chuyển đổi từ phản xạ từ vựng sang Tư duy câu đơn. Bé bắt đầu hình thành khả năng quan sát và thuật lại thế giới xung quanh một cách logic.',
    icon: '🧠',
    duration: '9 tháng',
    durationFull: '9 tháng',
    sessions: '72 buổi',
    timePerSession: '60 phút / buổi',
    freq: 'Mỗi tuần 2 buổi',
    bgClass: 'bg-gradient-to-br from-emerald-400 to-teal-500',
    price1: '20,160,000',
    price2: '11,160,000'
  },
  {
    title: 'KID 5',
    description: 'Phát triển kỹ năng Đặt câu hỏi và Kể chuyện có cấu trúc. Đây là giai đoạn bé học cách dẫn dắt một cuộc hội thoại.',
    icon: '📖',
    duration: '9 tháng',
    durationFull: '9 tháng',
    sessions: '72 buổi',
    timePerSession: '60 phút / buổi',
    freq: 'Mỗi tuần 2 buổi',
    bgClass: 'bg-gradient-to-br from-orange-400 to-amber-500',
    price1: '20,880,000',
    price2: '11,880,000'
  },
  {
    title: 'KID 6',
    description: 'Bé có khả năng Trình bày suy nghĩ cá nhân trong bối cảnh & chủ đề bé quan tâm. Đích đến 5 năm, nơi tiếng Trung trở thành "sức bật" thực sự.',
    icon: '🚀',
    duration: '9 tháng',
    durationFull: '9 tháng',
    sessions: '72 buổi',
    timePerSession: '60 phút / buổi',
    freq: 'Mỗi tuần 2 buổi',
    bgClass: 'bg-gradient-to-br from-violet-500 to-fuchsia-500',
    price1: '21,600,000',
    price2: '12,600,000'
  }
]
</script>
