<template>
  <footer class="bg-gray-900 text-white">
    <div class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
      <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
        <a
            class="inline-block rounded-full p-2 shadow-sm transition sm:p-3 lg:p-4 bg-gray-700 text-blue-500 hover:bg-gray-600  cursor-pointer"
            @click="scrollToTop"
        >
          <span class="sr-only">Back to top</span>

          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
          >
            <path
                fill-rule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>

      <div class="lg:flex lg:items-end lg:justify-between">
        <div>
          <NuxtLink class="block" to="/#home">
            <div class="flex justify-center lg:justify-start text-teal-300">
              <img class="h-7" src="~/assets/img/yb_solo.svg" alt="logo">
            </div>
          </NuxtLink>

          <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400 lg:text-left" >
            Building Scalable & Secure Software
          </p>
        </div>

        <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12" >
          <li>
            <NuxtLink class="text-white hover:text-white/75" to="/">Home</NuxtLink>
          </li>

          <li>
            <NuxtLink class="text-white hover:text-white/75" to="#about">About Me</NuxtLink>
          </li>

          <li>
            <NuxtLink class="text-white hover:text-white/75" to="#projects">Projects</NuxtLink>
          </li>

          <li>
            <NuxtLink class="text-white hover:text-white/75" to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>

      <p class="mt-12 text-center text-sm lg:text-right text-gray-400">
        Copyright &copy; {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
