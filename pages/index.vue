<template>
  <div class="isolate -z-10">
    <div class="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-25rem]" aria-hidden="true">
      <div class="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-green-300 via-blue-500 to-purple-600 opacity-30 sm:left-[calc(100%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
  </div>

  <section class="bg-gray-900 text-white h-[66vh] flex justify-center px-4" id="home">
    <div class="mx-auto max-w-screen-xl flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">

    <div class="lg:mr-16 mb-6 lg:mb-0">
        <UAvatar src="/img/me.jpg" size="xxl" class="bg-gray-900" />
    </div>

      <div class="text-left">
        <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl" >
          Yannick <strong>Burkard</strong>
        </h1>

        <p class="mt-4 max-w-xl sm:text-xl/relaxed">
          {{ $t('home.subtitle') }}
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

  <section id="about">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 my-6">
        <div>
          <div class="max-w-lg md:max-w-none">
            <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-12">
              {{ $t('about.title') }}
            </h2>

            <p class="mt-4 text-gray-700">
              {{ $t('about.text1') }}
            </p>
            <p class="mt-4 text-gray-700">
              {{ $t('about.text2') }}
            </p>
            <p class="mt-4 text-gray-700">
              {{ $t('about.text3') }}
            </p>
          </div>
        </div>
    </div>
  </section>

  <section class="bg-gray-100" id="technologies">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
        {{ $t('technologies.title') }}
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

  <section class="bg-white" id="projects">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {{ $t('projects.title') }}
      </h2>

      <p class="mt-4 text-center text-gray-700">{{ $t('projects.subtitle') }}</p>

      <div class="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">

        <ProjectCard
            :title="t('projects.oona.title')"
            :desc="t('projects.oona.desc')"
            published="2020"
            framework="Flutter & Express"
            tags="Full Stack,Mobile,Backend,devops"
            img="/img/projects/oona.png"
            link="https://oona.win"
        />
        <ProjectCard
            :title="t('projects.dotc.title')"
            :desc="t('projects.dotc.desc')"
            published="2023"
            framework="Unity & NestJS"
            tags="Backend,Mobile,devops"
            img="/img/projects/jcvd.png"
            link="https://awarecorp-studios.com/dawn-of-the-chihuahuas/"
        />
        <ProjectCard
            :title="t('projects.zw.title')"
            :desc="t('projects.zw.desc')"
            published="2024"
            framework="Unity & NestJS"
            tags="Backend,Mobile,devops"
            img="/img/projects/zw.png"
            link="https://oona-website.pages.dev/Zak&Wowo"
        />
        <ProjectCard
            :title="t('projects.recim_business.title')"
            :desc="t('projects.recim_business.desc')"
            published="2020"
            framework="Angular & Express"
            img="/img/projects/recim.png"
            tags="fullstack,backend,devops"
        />
        <ProjectCard
            :title="t('projects.onao.title')"
            :desc="t('projects.onao.desc')"
            published="2024"
            framework="Nuxt & NestJS"
            tags="Full Stack,Backend,devops"
            img="/img/projects/onao.png"
            link="https://beta.onao.com/map"
        />
        <ProjectCard
            :title="t('projects.marketing_backoffice.title')"
            :desc="t('projects.marketing_backoffice.desc')"
            published="2022"
            framework="Vue & Express"
            tags="fullstack,backend,devops"
        />
        <ProjectCard
            :title="t('projects.node_milight.title')"
            :desc="t('projects.node_milight.desc')"
            published="2020"
            framework="Node.js"
            img="github"
            tags="Backend,opensource,devops"
            link="https://github.com/Drarox/Node_Milight_API"
        />
        <ProjectCard
            :title="t('projects.deepseek.title')"
            :desc="t('projects.deepseek.desc')"
            published="2025"
            framework="TypeScript"
            img="github"
            tags="other,opensource"
            link="https://github.com/Drarox/DeepSeek-Ext"
        />
        <ProjectCard
            :title="t('projects.google_youtube_redirect.title')"
            :desc="t('projects.google_youtube_redirect.desc')"
            published="2023"
            framework="Javascript"
            tags="other,opensource"
            img="/img/projects/gy.png"
            link="https://github.com/Drarox/GoogleYoutubeRedirect"
        />
        <ProjectCard
            :title="t('projects.flutter2048.title')"
            :desc="t('projects.flutter2048.desc')"
            published="2020"
            framework="Flutter"
            tags="mobile,open source"
            img="/img/projects/2048.png"
            link="https://github.com/Drarox/Flutter_2048"
        />
        <ProjectCard
            :title="t('projects.portfolio.title')"
            :desc="t('projects.portfolio.desc')"
            published="2025"
            framework="Nuxt"
            tags="Full Stack,opensource,devops"
            img="github"
            link="https://github.com/Drarox/portfolio"
        />
        <ProjectCard
            :title="t('projects.secusend.title')"
            :desc="t('projects.secusend.desc')"
            published="2023"
            framework="Vue & Go"
            img="github"
            tags="fullstack,backend,devops"
        />

      </div>
    </div>
  </section>

  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center gap-4 rounded-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-6 shadow-lg sm:flex-row sm:justify-between" >
        <strong class="text-xl text-white sm:text-xl font-bold">{{ $t('lets_talk.title') }}</strong>

        <NuxtLink to="/contact" class="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-blue-500 md:text-indigo-600 hover:bg-transparent hover:text-white focus:ring-3 focus:outline-hidden">
          <span class="text-sm font-bold"> {{ $t('lets_talk.button') }} </span>

          <Icon name="uil:arrow-right" class="size-5" />
        </NuxtLink>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
const { t } = useI18n();

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
