<template>
  <div class="isolate">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-25rem]" aria-hidden="true">
      <div class="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-green-300 via-blue-500 to-purple-600 opacity-30 sm:left-[calc(100%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
  </div>

  <section class="bg-gray-900 text-white h-[66vh] flex justify-center px-4">
    <div class="mx-auto max-w-screen-xl flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">

    <div class="lg:mr-16 mb-6 lg:mb-0">
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
            <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-12">
              About Me
            </h2>

            <p class="mt-4 text-gray-700">
              Passionate about technology since childhood, I’ve spent over a decade specializing in backend development and system administration. I build reliable, secure, and scalable applications with Node.js (Express, NestJS), Go, and PostgreSQL, while also managing deployments, cloud infrastructure, and server optimization with Linux and Docker.
            </p>
            <p class="mt-4 text-gray-700">
              With a degree in Computer Science from the University of Strasbourg, I started my career in traditional software companies before transitioning to freelance. In 2020, I co-founded Oona (formerly Rec'im), where I lead development as CTO, building a mobile marketing and gaming platform with Flutter that supports local businesses. We also develop custom software and game solutions for enterprise clients. My expertise spans backend architecture, cloud infrastructure, and full-stack development with modern frameworks like Nuxt and Tailwind.
            </p>
            <p class="mt-4 text-gray-700">
              I thrive on solving complex technical challenges and turning ideas into efficient, real-world solutions.
            </p>
          </div>
        </div>
    </div>
  </section>

  <section class="bg-gray-100">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
        Technologies
      </h2>

      <UCarousel
          v-slot="{ item }"
          loop
          auto-scroll
          :items="techItems"
          :ui="{ item: 'basis-3xs sm:basis-1/2 md:basis-1/3 lg:basis-1/4 h-40 flex items-center justify-center' }"
          class="mt-12"
      >
        <div class="flex items-center justify-center h-full">
          <img
              alt=""
              :src="item"
              class="max-h-32 max-w-58 object-contain"
          />
        </div>
      </UCarousel>
    </div>
  </section>

  <section class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Projects
      </h2>

      <p class="mt-4 text-center text-gray-700">Selection of my some of my projects</p>

      <div class="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">

        <ProjectCard
            title="Oona"
            desc="Mobile & Web marketing and gaming platform that supports local businesses."
            published="2020"
            framework="Flutter & Express"
            tags="Full Stack,Mobile,Backend,devops"
            img="/img/projects/oona.png"
            link="https://oona.win"
        />
        <ProjectCard
            title="VAN DAMME : Dawn of Chihuahuas"
            desc="Endless runner game with JCVD to rescue dogs."
            published="2023"
            framework="Unity & NestJS"
            tags="Backend,Mobile,devops"
            img="/img/projects/jcvd.png"
            link="https://awarecorp-studios.com/dawn-of-the-chihuahuas/"
        />
        <ProjectCard
            title="Zak & Wowo"
            desc="Mobile game for the movie Zak & Wowo."
            published="2024"
            framework="Unity & NestJS"
            tags="Backend,Mobile,devops"
            img="/img/projects/zw.png"
            link="https://oona-website.pages.dev/Zak&Wowo"
        />
        <ProjectCard
            title="Onao"
            desc="Real estate website with an interactive 3D map."
            published="2024"
            framework="Nuxt & NestJS"
            tags="Full Stack,Backend,devops"
            img="/img/projects/onao.png"
            link="https://beta.onao.com/"
        />
        <ProjectCard
            title="Rec'im Business"
            desc="Dashboard for businesses to interact with the Rec'im app."
            published="2020"
            framework="Angular & Express"
            img="/img/projects/recim.png"
            tags="fullstack,backend,devops"
        />
        <ProjectCard
            title="Marketing Backoffice"
            desc="Backoffice for marketing experience for multiple clients like Yves Saint Laurent, Kenzo, Hugo Boss, Lancôme, Versace, and others."
            published="2022"
            framework="Vue & Express"
            tags="fullstack,backend,devops"
        />
        <ProjectCard
            title="GoogleYoutubeRedirect"
            desc="Browser extension to redirect Google search results to YouTube videos for Chrome, Brave, Edge, Firefox."
            published="2023"
            framework="Javascript"
            tags="other,opensource"
            img="/img/projects/gy.png"
            link="https://github.com/Drarox/GoogleYoutubeRedirect"
        />
        <ProjectCard
            title="Node_Milight_API"
            desc="Simple API running in NodeJS Express for controlling your Mi-Light lights. Compatible Google Home and Amazon Alexa."
            published="2020"
            framework="Node.js"
            img="github"
            tags="Backend,opensource,devops"
            link="https://github.com/Drarox/Node_Milight_API"
        />
        <ProjectCard
            title="DeepSeek-Ext"
            desc="Simple DeepSeek Chat VSCode Extension using Ollama locally."
            published="2025"
            framework="TypeScript"
            img="github"
            tags="other,opensource"
            link="https://github.com/Drarox/DeepSeek-Ext"
        />
        <ProjectCard
            title="Portfolio"
            desc="My personal portfolio website using Nuxt & Tailwind."
            published="2025"
            framework="Nuxt"
            tags="Full Stack,opensource,devops"
            img="github"
            link="https://github.com/Drarox/portfolio"
        />
        <ProjectCard
            title="Flutter_2048"
            desc="Simple 2048 game made with Flutter for iOS, Android and Web."
            published="2020"
            framework="Flutter"
            tags="mobile,open source"
            img="/img/projects/2048.png"
            link="https://github.com/Drarox/Flutter_2048"
        />
        <ProjectCard
            title="SecuSend"
            desc="Send secure encrypted messages with self-destructing links."
            published="2023"
            framework="Vue & Go"
            img="github"
            tags="fullstack,backend,devops"
        />

      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
const techItems = [
  '/img/tech/node.png',
  '/img/tech/nest.png',
  '/img/tech/sql.png',
  '/img/tech/go.png',
  '/img/tech/nuxt.png',
  '/img/tech/docker.png',
  '/img/tech/flutter.png',
  '/img/tech/express.png'
]
</script>
