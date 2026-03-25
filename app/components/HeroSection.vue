<template>
  <section class="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FAFAFE]">
    <!-- Background Decor -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <!-- Gradient Blobs -->
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
      <div class="absolute top-1/2 -right-32 w-[30rem] h-[30rem] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-delayed"></div>
      <div class="absolute -bottom-40 left-1/4 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-soft"></div>

      <!-- Floating Elements -->
      <div class="absolute top-32 right-1/4 text-6xl font-black text-indigo-100 animate-float delay-100 select-none">A</div>
      <div class="absolute bottom-40 left-16 text-5xl font-black text-pink-100 animate-float delay-500 select-none">B</div>
      <div class="absolute top-1/2 right-12 text-7xl font-black text-purple-100 animate-float delay-300 select-none">C</div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <!-- Text content -->
        <div class="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <div class="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-2 mb-8 animate-fade-down">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
            <span class="text-indigo-800 text-sm font-bold tracking-wide">Tuyển sinh rộn ràng 2026</span>
          </div>

          <h1 class="text-5xl lg:text-6xl xl:text-7xl font-black text-indigo-950 leading-[1.15] mb-6 animate-fade-up delay-100">
            Khơi Dậy <br class="hidden lg:block" />
            <span class="gradient-text">Đam Mê</span> <br class="hidden lg:block" />
            Tiếng Anh.
          </h1>

          <p class="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed font-medium animate-fade-up delay-200">
            Giúp con tự tin giao tiếp cùng 100% giáo viên bản xứ. Phương pháp hiện đại, kết quả khác biệt, chuẩn quốc tế ngay từ nhỏ.
          </p>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
            <NuxtLink to="/dang-ky" class="btn-primary text-lg">
              Đăng Ký Học Thử Miễn Phí
            </NuxtLink>
            <NuxtLink to="/khoa-hoc" class="btn-secondary text-lg">
              Xem Các Khóa Học
            </NuxtLink>
          </div>

          <!-- Stats list aligned properly -->
          <div class="mt-12 pt-8 border-t border-indigo-100/50 flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 animate-fade-up delay-400">
            <div class="text-center lg:text-left">
              <div class="text-3xl font-black text-indigo-950 mb-1">5000+</div>
              <div class="text-gray-500 text-sm font-semibold">Học viên</div>
            </div>
            <div class="hidden sm:block w-px h-12 bg-indigo-100/80"></div>
            <div class="text-center lg:text-left">
              <div class="text-3xl font-black text-indigo-950 mb-1">50+</div>
              <div class="text-gray-500 text-sm font-semibold">Giáo viên bản xứ</div>
            </div>
            <div class="hidden md:block w-px h-12 bg-indigo-100/80"></div>
            <div class="text-center lg:text-left">
              <div class="text-3xl font-black text-indigo-950 mb-1">10+</div>
              <div class="text-gray-500 text-sm font-semibold">Cơ sở toàn quốc</div>
            </div>
          </div>
        </div>

        <!-- Image side: balanced and professional -->
        <div class="lg:h-[600px] flex items-center justify-center relative animate-scale-in delay-200 mt-10 lg:mt-0">
          <div class="relative w-full max-w-lg">
            <!-- Decorative outline -->
            <div class="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-[2.5rem] blur-xl opacity-30 animate-pulse-soft"></div>
            
            <!-- Main Image -->
            <div class="relative bg-white p-3 rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
              <img src="/images/hero-banner.png" alt="Trẻ em vui học tiếng Anh" class="rounded-[1.5rem] w-full object-cover aspect-[4/3]" />
            </div>

            <!-- Floating Badge Left -->
            <div class="absolute -left-8 top-12 bg-white rounded-2xl p-4 shadow-xl z-20 animate-float delay-100 flex items-center gap-3">
              <div class="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold">✓</div>
              <div>
                <div class="font-bold text-indigo-950 text-sm">Cambridge</div>
                <div class="text-gray-500 text-xs font-semibold">Đối tác chuẩn</div>
              </div>
            </div>

            <!-- Floating Badge Right -->
            <div class="absolute -right-6 bottom-16 bg-white rounded-2xl p-4 shadow-xl z-20 animate-float-delayed delay-300 flex items-center gap-3">
              <div class="w-12 h-12 bg-yellow-100 flex items-center justify-center text-2xl rounded-full">⭐</div>
              <div>
                <div class="font-bold text-indigo-950 text-sm">Đánh giá 4.9/5</div>
                <div class="text-gray-500 text-xs font-semibold">2000+ phụ huynh</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
