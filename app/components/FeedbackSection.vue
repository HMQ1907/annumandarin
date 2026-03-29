<template>
  <section class="py-24 bg-[#FAFAFE] overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="section-badge bg-white shadow-sm">KẾT QUẢ THỰC TẾ</span>
        <h2 class="section-heading">Niềm Tin Từ <span class="gradient-text">Phụ Huynh</span></h2>
        <p class="section-desc">Hơn 5000 gia đình đã tin tưởng trao gửi tương lai ngôn ngữ của con tại Annu Mandarin.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 relative z-10">
        <div v-for="(review, index) in reviews" :key="index"
          class="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgb(99,102,241,0.12)] transition-all duration-300 border border-gray-100 relative group">
          
          <div class="absolute -top-5 left-8 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white text-3xl font-serif shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
            "
          </div>

          <div class="mt-4 mb-6 flex gap-1">
            <svg v-for="s in 5" :key="s" class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          </div>

          <p class="text-gray-600 leading-relaxed min-h-[100px] font-medium">
            {{ review.content }}
          </p>

          <div class="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
            <div class="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-inner"
              :class="review.bgClass">
              {{ review.avatar }}
            </div>
            <div>
              <div class="font-black text-indigo-950">{{ review.name }}</div>
              <div class="text-sm text-gray-500 font-medium">{{ review.role }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Badges -->
      <div class="mt-20 pt-10 border-t border-gray-200">
        <p class="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Đối Tác & Chứng Nhận</p>
        <div class="flex flex-wrap justify-center gap-10 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div class="flex flex-col items-center gap-2"><span class="text-4xl">🏅</span><span class="text-xs font-bold text-gray-600">Đối Tác Giáo Dục Quốc Tế</span></div>
          <div class="flex flex-col items-center gap-2"><span class="text-4xl">📚</span><span class="text-xs font-bold text-gray-600">Đại Học Đối Tác</span></div>
          <div class="flex flex-col items-center gap-2"><span class="text-4xl">📜</span><span class="text-xs font-bold text-gray-600">ISO 9001:2015</span></div>
          <div class="flex flex-col items-center gap-2"><span class="text-4xl">🌟</span><span class="text-xs font-bold text-gray-600">Top 10 Education</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: 'Chị Mai Linh',
    role: 'Phụ huynh bé Kitty (6 tuổi)',
    avatar: '👩',
    bgClass: 'bg-pink-400',
    content: 'Từ lúc học lớp phát âm, con phát âm rõ và chuẩn rành rọt hẳn. Về nhà lúc nào cũng bập bẹ hát bài hát tiếng Trung. Các giáo viên ở trung tâm rất cưng chiều và nhẫn nại với bé.'
  },
  {
    name: 'Anh Trần Hoàng',
    role: 'Phụ huynh bé Tí Bo (9 tuổi)',
    avatar: '👨',
    bgClass: 'bg-indigo-400',
    content: 'Đợt vừa rồi khả năng phản xạ của con vượt bậc rất rõ. Gia đình rất bất ngờ vì bình thường bé rụt rè, giờ lại mạnh dạn nói tiếng Trung với giáo viên bản xứ. Cảm ơn Annu Mandarin!'
  },
  {
    name: 'Chị Thu Phương',
    role: 'Phụ huynh bé Anna (14 tuổi)',
    avatar: '👩‍🦰',
    bgClass: 'bg-teal-400',
    content: 'Lộ trình giáo viên xây dựng rất sát thực tế với tình huống hội thoại thường nhật. Con không bị áp lực thành tích học thuộc lòng mà tiếp thu thông qua tranh luận debate rất tự nhiên.'
  }
]
</script>
