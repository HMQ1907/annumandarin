<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="section-badge">CHƯƠNG TRÌNH ĐÀO TẠO</span>
        <h2 class="section-heading">Khóa Học Theo <span class="gradient-text">Độ Tuổi</span></h2>
        <p class="section-desc">Mỗi giai đoạn phát triển đòi hỏi một phương pháp tiếp cận riêng. Chúng tôi thiết kế khóa học bám sát tâm lý lứa tuổi.</p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-14">
        <button v-for="tab in tabs" :key="tab.key"
          @click="activeTab = tab.key"
          class="px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border-2"
          :class="activeTab === tab.key 
            ? 'border-indigo-500 bg-indigo-500 text-white shadow-md transform -translate-y-1' 
            : 'border-gray-200 text-gray-500 hover:border-indigo-300 hover:text-indigo-600'">
          {{ tab.icon }} {{ tab.label }}
        </button>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(course, i) in filteredCourses" :key="course.title"
          class="bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgb(99,102,241,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col">
          
          <!-- Image/Gradient Top -->
          <div class="h-48 relative overflow-hidden flex-shrink-0" :class="course.bgClass">
            <!-- Overlay Pattern -->
            <div class="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')]"></div>
            
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-7xl drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500">{{ course.icon }}</span>
            </div>
            
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-4 py-1.5 text-xs font-black text-indigo-900 shadow-sm">
              {{ course.age }}
            </div>
          </div>

          <!-- Body -->
          <div class="p-8 flex flex-col flex-grow">
            <h3 class="text-2xl font-black text-indigo-950 mb-3">{{ course.title }}</h3>
            <p class="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">{{ course.description }}</p>

            <div class="flex flex-wrap gap-2 mb-8">
              <span v-for="tag in course.tags" :key="tag"
                class="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-50 text-gray-600 border border-gray-100">
                {{ tag }}
              </span>
            </div>

            <!-- Footer -->
            <div class="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
              <div>
                <span class="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">Học phí từ</span>
                <div class="text-lg font-black text-indigo-600">{{ course.price }}</div>
              </div>
              <NuxtLink to="/dang-ky" class="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('all')

const tabs = [
  { key: 'all', label: 'Tất Cả', icon: '🎒' },
  { key: 'preschool', label: 'Mầm Non (3-6 tuổi)', icon: '🧒' },
  { key: 'primary', label: 'Tiểu Học (6-11 tuổi)', icon: '👦' },
  { key: 'secondary', label: 'THCS (11-16 tuổi)', icon: '🧑' }
]

const courses = [
  {
    title: 'English Starters',
    description: 'Làm quen ngôn ngữ thứ hai với phương pháp "Tắm ngôn ngữ", vừa học vừa chơi thông qua tương tác giàu trí tưởng tượng.',
    icon: '🦄',
    age: '3-5 tuổi',
    category: 'preschool',
    bgClass: 'bg-gradient-to-br from-purple-400 to-indigo-500',
    tags: ['Phản xạ tự nhiên', 'Vận động tư duy'],
    price: '1.500.000đ/th'
  },
  {
    title: 'English Movers',
    description: 'Xây dựng móng từ vựng và ngữ âm (Phonics) vững chắc, giúp trẻ tự tin phát âm đúng như người bản xứ.',
    icon: '🚀',
    age: '5-6 tuổi',
    category: 'preschool',
    bgClass: 'bg-gradient-to-br from-pink-400 to-rose-500',
    tags: ['Phonics', 'Đọc hiểu cơ bản'],
    price: '1.800.000đ/th'
  },
  {
    title: 'Young Learners',
    description: 'Bứt phá 4 kỹ năng Nghe-Nói-Đọc-Viết. Khóa học bám sát khung kỳ thi chứng chỉ Cambridge YLE uy tín.',
    icon: '🏆',
    age: '6-8 tuổi',
    category: 'primary',
    bgClass: 'bg-gradient-to-br from-cyan-400 to-blue-500',
    tags: ['Cambridge YLE', 'Ngữ pháp'],
    price: '2.000.000đ/th'
  },
  {
    title: 'Super Kids',
    description: 'Rèn luyện khả năng giao tiếp lưu loát và tư duy hệ thống bằng tiếng Anh. Chinh phục điểm cao Movers & Flyers.',
    icon: '⭐',
    age: '8-11 tuổi',
    category: 'primary',
    bgClass: 'bg-gradient-to-br from-emerald-400 to-teal-500',
    tags: ['Thuyết trình', 'Movers/Flyers'],
    price: '2.200.000đ/th'
  },
  {
    title: 'Teen English',
    description: 'Giáo trình trung học nâng cao, lồng ghép phát triển Kỹ Năng Mềm (4Cs: Giao tiếp, Tư duy phản biện, Sáng tạo, Hợp tác).',
    icon: '🎯',
    age: '11-14 tuổi',
    category: 'secondary',
    bgClass: 'bg-gradient-to-br from-orange-400 to-amber-500',
    tags: ['KET/PET', 'Kỹ năng thế kỷ 21'],
    price: '2.500.000đ/th'
  },
  {
    title: 'IELTS Foundation',
    description: 'Chinh phục chứng chỉ quốc tế quyền lực. Chiến lược lấy trọn điểm 4 kỹ năng chuyên sâu cho học sinh cấp 2, cấp 3.',
    icon: '🎓',
    age: '14-16 tuổi',
    category: 'secondary',
    bgClass: 'bg-gradient-to-br from-violet-500 to-fuchsia-500',
    tags: ['IELTS Academic', 'Môi trường du học'],
    price: '3.000.000đ/th'
  }
]

const filteredCourses = computed(() => {
  if (activeTab.value === 'all') return courses
  return courses.filter(c => c.category === activeTab.value)
})
</script>
