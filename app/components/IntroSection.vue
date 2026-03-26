<template>
  <section class="py-24 bg-white relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Image (balanced, crisp) -->
        <div class="relative lg:-mt-10">
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-100 to-pink-100 rounded-full blur-3xl opacity-60"></div>
          <div class="relative aspect-square max-w-md mx-auto">
            <img src="/images/hero-banner.png" alt="Về trung tâm" class="rounded-[2.5rem] w-full h-full object-cover shadow-2xl z-10 relative" style="object-position: 70% 50%" />
            
            <!-- Deco Element -->
            <div class="absolute -bottom-8 -right-8 w-40 h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM2MzY2RjEiLz48L3N2Zz4=')] opacity-20 z-0"></div>
          </div>
        </div>

        <!-- Right: Content -->
        <div>
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full font-bold text-sm mb-6">
            ✨ Về Annu Mandarin
          </div>

          <h2 class="text-4xl lg:text-5xl font-extrabold text-indigo-950 mb-6 leading-[1.2]">
            Hơn cả một nơi học tiếng Anh.
          </h2>

          <p class="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
            Với khao khát mang đến nền tảng giáo dục quốc tế cho trẻ em Việt, Annu Mandarin kết hợp phương pháp học chủ động (Active Learning) và công nghệ số, biến mỗi giờ học thành một hành trình khám phá đầy màu sắc và tiếng cười.
          </p>

          <!-- Core values -->
          <div class="grid sm:grid-cols-2 gap-6 mb-10">
            <div class="flex gap-4">
              <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl flex-shrink-0">
                🎯
              </div>
              <div>
                <h4 class="font-bold text-indigo-950 mb-1">Chuẩn Xác</h4>
                <p class="text-sm text-gray-500 font-medium">Giáo trinh 100% chuẩn Cambridge & Oxford.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-2xl flex-shrink-0">
                ❤️
              </div>
              <div>
                <h4 class="font-bold text-indigo-950 mb-1">Tận Tâm</h4>
                <p class="text-sm text-gray-500 font-medium">Giáo viên theo sát tiến độ từng học viên.</p>
              </div>
            </div>
          </div>

          <NuxtLink to="/giao-vien" class="btn-primary w-full sm:w-auto">
            Tìm Hiểu Đội Ngũ Giáo Viên
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
