<template>
  <footer class="bg-indigo-950 text-indigo-100 pt-20 pb-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

        <!-- Brand -->
        <div class="lg:col-span-4">
          <NuxtLink to="/" class="flex items-center gap-2 mb-6 inline-flex">
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-pink-500 flex items-center justify-center text-white font-black text-2xl shadow-md">
              A
            </div>
            <span class="text-2xl font-extrabold text-white">
              Annu<span class="text-pink-400">Mandarin</span>
            </span>
          </NuxtLink>
          <p class="text-indigo-200/80 text-sm leading-relaxed mb-8 pr-4">
            Trao quyền cho thế hệ trẻ em Việt Nam vươn tầm thế giới qua nền tảng ngôn ngữ vững chắc. Học thật - Hiệu quả
            thật - Tương lai rộng mở.
          </p>
          <div class="flex items-center gap-3">
            <a href="#"
              class="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">fb</a>
            <a href="#"
              class="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">ig</a>
            <a href="#"
              class="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">yt</a>
            <a href="#"
              class="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">tt</a>
          </div>
        </div>

        <!-- Links -->
        <div class="lg:col-span-2">
          <h4 class="text-white font-bold text-lg mb-6 tracking-wide">Về Annu Mandarin</h4>
          <ul class="space-y-4 text-sm font-medium text-indigo-300">
            <li>
              <NuxtLink to="/" class="hover:text-white transition-colors">Giới thiệu chung</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/giao-vien" class="hover:text-white transition-colors">Đội ngũ giáo viên</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/giao-vien" class="hover:text-white transition-colors">Chứng nhận quốc tế</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/khoa-hoc" class="hover:text-white transition-colors">Cam kết kết quả</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <h4 class="text-white font-bold text-lg mb-6 tracking-wide">Chương Trình Học</h4>
          <ul class="space-y-4 text-sm font-medium text-indigo-300">
            <li>
              <NuxtLink to="/khoa-hoc" class="hover:text-white transition-colors">English Starters (3-5t)</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/khoa-hoc" class="hover:text-white transition-colors">Young Learners (6-8t)</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/khoa-hoc" class="hover:text-white transition-colors">Super Kids (8-11t)</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/khoa-hoc" class="hover:text-white transition-colors">IELTS Foundation (14-16t)</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Box -->
        <div class="lg:col-span-3">
          <h4 class="text-white font-bold text-lg mb-6 tracking-wide">Liên Hệ</h4>
          <div class="bg-indigo-900/50 rounded-2xl p-6 border border-indigo-800">
            <ul class="space-y-4 text-sm font-medium text-indigo-200">
              <li class="flex items-start gap-3">
                <span class="text-pink-400 mt-0.5">📍</span>
                <span>Tòa nhà Annu Mandarin, 123 Đường Tôn Đức Thắng, Quận 1, TP.HCM</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-pink-400">📞</span>
                <span class="font-bold text-white text-lg">[CREDIT_CARD_NUMBER]</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-pink-400">📧</span>
                <span>[EMAIL_ADDRESS]</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <!-- Bottom Frame -->
      <div
        class="border-t border-indigo-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-indigo-400 font-medium">
        <p>© 2026 Annu Mandarin Education. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white transition-colors">Điều khoản dịch vụ</a>
          <a href="#" class="hover:text-white transition-colors">Bảo mật thông tin</a>
        </div>
      </div>
    </div>
  </footer>
</template>
