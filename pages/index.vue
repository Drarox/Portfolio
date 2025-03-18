<template>
  <section class="bg-gray-900 text-white h-[66vh] flex justify-center px-4">
    <div class="mx-auto max-w-screen-xl flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">

    <div class="mr-16 mb-6 lg:mb-0">
        <UAvatar src="/img/me.jpg" size="xxl" class="bg-gray-900" />
    </div>

      <div class="text-left">
        <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl" >
          Yannick <strong>Burkard</strong>
        </h1>

        <p class="mt-4 max-w-xl sm:text-xl/relaxed">
          Software Engineer, specializing in Backend & DevOps
        </p>

        <div class="mt-4 max-w-xl sm:text-xl/relaxed">
          <ul class="mt-8 flex justify-start gap-6 sm:mt-0">
            <li>
              <a href="https://www.linkedin.com/in/yannick-burkard/" rel="noreferrer" target="_blank" class="transition hover:opacity-75 text-gray-200" >
                <span class="sr-only">LinkedIn</span>
                <Icon class="size-7" name="uil:linkedin" />
              </a>
            </li>

            <li>
              <a href="https://github.com/Drarox" rel="noreferrer" target="_blank" class="transition hover:opacity-75 text-gray-200" >
                <span class="sr-only">GitHub</span>
                <Icon class="size-7" name="uil:github" />
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 my-6">
        <div>
          <div class="max-w-lg md:max-w-none">
            <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Aboute Me
            </h2>

            <p class="mt-4 text-gray-700">
              Passionate about technology since childhood, I’ve spent over a decade specializing in backend development and system administration. I build reliable, secure, and scalable applications with Node.js (Express, NestJS), Go, and PostgreSQL, while also managing deployments, cloud infrastructure, and server optimization with Linux and Docker.
            </p>
            <p class="mt-4 text-gray-700">
              With a degree in Computer Science from the University of Strasbourg, I started my career in traditional software companies before transitioning to freelance. In 2020, I co-founded Oona, where I lead development as CTO, building a mobile marketing and gaming platform with Flutter that supports local businesses. We also develop custom software and game solutions for enterprise clients. My expertise spans backend architecture, cloud infrastructure, and full-stack development with modern frameworks like Nuxt.js and Tailwind.
            </p>
            <p class="mt-4 text-gray-700">
              I thrive on solving complex technical challenges and turning ideas into efficient, real-world solutions.
            </p>
          </div>
        </div>
    </div>
  </section>

</template>

<script setup lang="ts">
</script>
