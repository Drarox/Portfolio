<template>
  <header class="bg-gray-900 text-white">
    <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      <a class="block text-teal-300" href="#">
        <span class="sr-only">Home</span>
        <img class="h-7" src="~/assets/img/yb_solo.svg" alt="logo">
      </a>

      <div class="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a
                  class="transition text-white hover:text-white/75"
                  href="#"
              >
                Home
              </a>
            </li>

            <li>
              <a
                  class="transition text-white hover:text-white/75"
                  href="#"
              >
                About Me
              </a>
            </li>

            <li>
              <a
                  class="transition text-white hover:text-white/75"
                  href="#"
              >
                Services
              </a>
            </li>

            <li>
              <a
                  class="transition text-white hover:text-white/75"
                  href="#"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                  class="transition text-white hover:text-white/75"
                  href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <button
              class="block rounded-sm p-2.5 transition md:hidden bg-gray-800 text-white hover:text-white/75"
          >
            <span class="sr-only">Toggle menu</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>
