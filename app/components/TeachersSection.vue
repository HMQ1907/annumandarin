<template>
  <section class="py-24 bg-[#FAFAFE]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="section-badge">ĐỘI NGŨ CHUYÊN GIA</span>
        <h2 class="section-heading">Người Truyền Lửa Tận Tâm</h2>
        <p class="section-desc">100% giáo viên giàu kinh nghiệm thực tiễn đạt chuẩn quốc tế (HSK, TOCFL), thấu hiểu tâm lý trẻ và luôn biến giờ học thành hành trình khám phá.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(teacher, index) in teachers" :key="index"
          class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgb(99,102,241,0.1)] transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
          
          <!-- Avatar Area -->
          <div class="relative h-64 overflow-hidden" :class="teacher.bgClass">
            <div class="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
            <!-- We would put an actual cropped image here, using emoji avatar as placeholder for aesthetics -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-36 h-36 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-6xl shadow-2xl group-hover:scale-110 transition-transform duration-500 border-4 border-white/40">
                {{ teacher.avatar }}
              </div>
            </div>
            
            <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-black shadow-lg text-indigo-900 flex items-center gap-1.5">
              <span class="text-base">{{ teacher.flag }}</span> {{ teacher.country }}
            </div>
          </div>

          <!-- Info Area -->
          <div class="p-6 text-center">
            <h3 class="text-xl font-black text-indigo-950 mb-1">{{ teacher.name }}</h3>
            <p class="text-sm text-indigo-500 font-bold mb-4 uppercase tracking-wider">{{ teacher.role }}</p>
            <p class="text-gray-500 text-sm mb-5 leading-relaxed">{{ teacher.bio }}</p>

            <!-- Certs -->
            <div class="flex flex-wrap justify-center gap-2 pt-4 border-t border-gray-100">
              <span v-for="cert in teacher.certs" :key="cert"
                class="text-xs font-bold px-2 py-1 rounded-md bg-gray-50 text-gray-700 border border-gray-200">
                {{ cert }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const teachers = [
  {
    name: 'Vương Hiểu Lệ',
    role: 'Mầm non & Tiểu học',
    bio: 'Chuyên gia giáo dục sớm. Từng giảng dạy nhiều năm tại học viện Khổng Tử và hệ thống song ngữ.',
    avatar: '👩‍🏫',
    country: 'Trung Quốc',
    flag: '🇨🇳',
    bgClass: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
    certs: ['CTCSOL', 'B.A Education']
  },
  {
    name: 'An Hạ My',
    role: 'Quản lý học thuật',
    bio: 'Hơn 8 năm đào tạo Hán Ngữ YCT. Có tài kể chuyện và luôn truyền tải văn hóa Trung Hoa một cách tự nhiên.',
    avatar: '👩‍💼',
    country: 'Việt Nam',
    flag: '🇻🇳',
    bgClass: 'bg-gradient-to-br from-blue-400 to-blue-600',
    certs: ['HSK 6', 'M.Ed']
  },
  {
    name: 'Lý Tiểu Cương',
    role: 'Giáo viên Khẩu Ngữ',
    bio: 'Năng nổ, nhiệt huyết. Thích lồng ghép nghệ thuật thư pháp và thực tiễn vào ngôn ngữ.',
    avatar: '👨‍🏫',
    country: 'Đài Loan',
    flag: '🇹🇼',
    bgClass: 'bg-gradient-to-br from-teal-400 to-teal-600',
    certs: ['TOCFL 6', 'Thạc sĩ Ngôn Ngữ']
  },
  {
    name: 'Trần Đăng',
    role: 'Giáo viên Nâng Cao',
    bio: 'Kinh nghiệm luyện thi chứng chỉ HSK thực chiến. Áp dụng kỷ luật mềm giúp rèn giũa tự lập.',
    avatar: '🧑‍🏫',
    country: 'Việt Nam',
    flag: '🇻🇳',
    bgClass: 'bg-gradient-to-br from-amber-400 to-amber-600',
    certs: ['HSKK Cao cấp', 'Du học Trung Quốc']
  }
]
</script>
