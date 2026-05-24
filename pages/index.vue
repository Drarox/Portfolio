<template>
  <main>
    <div class="isolate -z-10">
      <div class="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-25rem]" aria-hidden="true">
        <div class="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-green-300 via-blue-500 to-purple-600 opacity-30 sm:left-[calc(100%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
      </div>
    </div>

    <section id="home" class="bg-gray-900 text-white flex justify-center px-4 py-24 lg:py-36">
      <div class="mx-auto max-w-screen-xl flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left lg:mb-8">

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

              <li>
                <a href="https://medium.com/@yannick.burkard/" rel="noreferrer" target="_blank" class="transition hover:opacity-75 text-gray-200" >
                  <span class="sr-only">Medium</span>
                  <Icon class="size-7" name="uil:medium-m" />
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
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

    <section id="technologies" class="bg-gray-100" >
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-12">
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
            >
          </div>
        </UCarousel>
      </div>
    </section>

    <section id="projects" class="bg-white" >
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {{ $t('projects.title') }}
        </h2>

        <p class="mt-4 text-center text-gray-700">{{ $t('projects.subtitle') }}</p>

        <div class="mt-8 flex flex-wrap justify-center gap-2">
          <button
            v-for="filter in projectFilters"
            :key="filter.key"
            type="button"
            class="rounded-full border px-4 py-2 text-sm font-medium transition"
            :class="selectedProjectTag === filter.key
              ? 'border-gray-200 bg-gray-200 text-gray-700'
              : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:text-gray-900'"
            @click="selectedProjectTag = filter.key"
          >
            {{ t(filter.label) }}
          </button>
        </div>

        <div class="mt-12 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.key"
            :title="project.title"
            :desc="project.desc"
            :published="project.published"
            :framework="project.framework"
            :tags="project.tags"
            :img="project.img"
            :link="project.link"
          />
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 pb-16 lg:pb-24 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center gap-4 rounded-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-6 shadow-lg sm:flex-row sm:justify-between" >
          <strong class="text-xl text-white sm:text-xl font-bold">{{ $t('lets_talk.title') }}</strong>

          <NuxtLink to="/contact" class="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-blue-500 md:text-indigo-600 hover:bg-transparent hover:text-white focus:ring-3 focus:outline-hidden">
            <span class="text-sm font-bold"> {{ $t('lets_talk.button') }} </span>

            <Icon name="uil:arrow-right" class="size-5" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n();

type ProjectTag = 'fullstack' | 'backend' | 'mobile' | 'devops' | 'other' | 'opensource';
type ProjectFilter = 'all' | ProjectTag;

type ProjectItem = {
  key: string;
  title: string;
  desc: string;
  published: string
  framework: string
  tags: string
  img?: string
  link?: string
}

const projectFilters: Array<{ key: ProjectFilter, label: string }> = [
  { key: 'all', label: 'projects.filters.all' },
  { key: 'fullstack', label: 'projects.filters.fullstack' },
  { key: 'backend', label: 'projects.filters.backend' },
  { key: 'mobile', label: 'projects.filters.mobile' },
  { key: 'devops', label: 'projects.filters.devops' },
  { key: 'opensource', label: 'projects.filters.opensource' },
  { key: 'other', label: 'projects.filters.other' }
];

const selectedProjectTag = ref<ProjectFilter>('all');

const normalizeTag = (tag: string): ProjectTag | '' => {
  const normalized = tag.toLowerCase().trim().replace(/\s+/g, '');

  if (normalized.startsWith('full')) return 'fullstack';
  if (normalized.startsWith('backend')) return 'backend';
  if (normalized.startsWith('mobile')) return 'mobile';
  if (normalized.startsWith('devops')) return 'devops';
  if (normalized.startsWith('other')) return 'other';
  if (normalized.startsWith('open')) return 'opensource';

  return '';
}

const getProjectTags = (tags: string): ProjectTag[] =>
  tags
    .split(',')
    .map((tag) => normalizeTag(tag))
    .filter((tag): tag is ProjectTag => Boolean(tag));

const projects = computed<ProjectItem[]>(() => [
  { key: 'oona', title: t('projects.oona.title'), desc: t('projects.oona.desc'), published: '2020', framework: 'Flutter & Express', tags: 'Full Stack,Mobile,Backend,devops', img: '/img/projects/oona.png', link: 'https://oona.win' },
  { key: 'dotc', title: t('projects.dotc.title'), desc: t('projects.dotc.desc'), published: '2023', framework: 'Unity & NestJS', tags: 'Backend,Mobile,devops', img: '/img/projects/jcvd.png', link: 'https://awarecorp-studios.com/dawn-of-the-chihuahuas/' },
  { key: 'zw', title: t('projects.zw.title'), desc: t('projects.zw.desc'), published: '2024', framework: 'Unity & NestJS', tags: 'Backend,Mobile,devops', img: '/img/projects/zw.png', link: 'https://oona-website.pages.dev/Zak&Wowo' },
  { key: 'recim_business', title: t('projects.recim_business.title'), desc: t('projects.recim_business.desc'), published: '2020', framework: 'Angular & Express', tags: 'fullstack,backend,devops', img: '/img/projects/recim.png' },
  { key: 'onao', title: t('projects.onao.title'), desc: t('projects.onao.desc'), published: '2024', framework: 'Nuxt & NestJS', tags: 'Full Stack,Backend,devops', img: '/img/projects/onao.png', link: 'https://beta.onao.com/map' },
  { key: 'revolut', title: t('projects.revolut.title'), desc: t('projects.revolut.desc'), published: '2023', framework: 'Express', tags: 'Backend,devops', img: '/img/projects/revolut.png', link: 'https://www.revolut.com/business/business-api/' },
  { key: 'liquidytics', title: t('projects.liquidytics.title'), desc: t('projects.liquidytics.desc'), published: '2025', framework: 'Bun + Hono & Nuxt', tags: 'Full Stack,backend,devops', img: '/img/projects/liquidytics.svg', link: 'https://liquidytics.xyz/' },
  { key: 'marketing_backoffice', title: t('projects.marketing_backoffice.title'), desc: t('projects.marketing_backoffice.desc'), published: '2022', framework: 'Vue & Express', tags: 'fullstack,backend,devops' },
  { key: 'gmd', title: t('projects.gmd.title'), desc: t('projects.gmd.desc'), published: '2025', framework: 'FastAPI & Nuxt', tags: 'Backend, fullstack', img: '/img/projects/gmd.svg', link: 'https://devis-gmd.pages.dev/' },
  { key: 'healthconnectlog', title: t('projects.healthconnectlog.title'), desc: t('projects.healthconnectlog.desc'), published: '2025', framework: 'Flutter', tags: 'Mobile,opensource', img: '/img/projects/healthconnectlog.png', link: 'https://github.com/Drarox/Health-Connect-Log' },
  { key: 'enphasy', title: t('projects.enphasy.title'), desc: t('projects.enphasy.desc'), published: '2025', framework: 'Bun & Hono', tags: 'Backend,opensource,devops', img: '/img/projects/enphasy.svg', link: 'https://github.com/Drarox/enphasy' },
  // { key: 'deepseek', title: t('projects.deepseek.title'), desc: t('projects.deepseek.desc'), published: '2025', framework: 'TypeScript', tags: 'other,opensource', img: 'github', link: 'https://github.com/Drarox/DeepSeek-Ext' },
  { key: 'lpcalc', title: t('projects.lpcalc.title'), desc: t('projects.lpcalc.desc'), published: '2025', framework: 'Vue', tags: 'Full Stack,opensource', img: '/img/projects/lpcalc.svg', link: 'https://github.com/Drarox/LP-Calculator' },
  // { key: 'portfolio', title: t('projects.portfolio.title'), desc: t('projects.portfolio.desc'), published: '2025', framework: 'Nuxt', tags: 'Full Stack,opensource,devops', img: 'github', link: 'https://github.com/Drarox/portfolio' },
  { key: 'google_youtube_redirect', title: t('projects.google_youtube_redirect.title'), desc: t('projects.google_youtube_redirect.desc'), published: '2023', framework: 'Javascript', tags: 'other,opensource', img: '/img/projects/gy.png', link: 'https://github.com/Drarox/GoogleYoutubeRedirect' },
  { key: 'json2zod', title: t('projects.json2zod.title'), desc: t('projects.json2zod.desc'), published: '2025', framework: 'Typescript', tags: 'other,opensource', img: '/img/projects/json2zod.svg', link: 'https://github.com/Drarox/json2zod' },
  { key: 'secusend', title: t('projects.secusend.title'), desc: t('projects.secusend.desc'), published: '2025', framework: 'Vue & Go', tags: 'fullstack,backend,devops', img: '/img/projects/secusend.svg', link: 'https://github.com/SecuSend' },
  { key: 'proxydash', title: t('projects.proxydash.title'), desc: t('projects.proxydash.desc'), published: '2026', framework: 'Vue & Bun', tags: 'fullstack,backend,devops,opensource', img: '/img/projects/proxydash.png', link: 'https://github.com/Drarox/ProxyDash' },
  { key: 'backend_benchmark', title: t('projects.backend_benchmark.title'), desc: t('projects.backend_benchmark.desc'), published: '2025', framework: 'Bash & Python', tags: 'backend,opensource,devops', img: 'github', link: 'https://github.com/Drarox/Backend-Benchmark' },
  { key: 'flutter2048', title: t('projects.flutter2048.title'), desc: t('projects.flutter2048.desc'), published: '2020', framework: 'Flutter', tags: 'mobile,open source', img: '/img/projects/2048.png', link: 'https://github.com/Drarox/Flutter_2048' },
  { key: 'arpg', title: t('projects.arpg.title'), desc: t('projects.arpg.desc'), published: '2026', framework: 'Bun + Hono & Nuxt', tags: 'fullstack,backend', img: '/img/projects/arpg.svg', link: 'https://arpg-pulse.pages.dev/' },
  { key: 'hyperevm', title: t('projects.hyperevm.title'), desc: t('projects.hyperevm.desc'), published: '2025', framework: 'Javascript', tags: 'other,opensource', img: '/img/projects/hyperevm.svg', link: 'https://github.com/Drarox/HyperEVM-Real-Time-Gas' },
  { key: 'node_milight', title: t('projects.node_milight.title'), desc: t('projects.node_milight.desc'), published: '2020', framework: 'Node.js', tags: 'Backend,opensource,devops', img: 'github', link: 'https://github.com/Drarox/Node_Milight_API' },
]);

const filteredProjects = computed(() => {
  if (selectedProjectTag.value === 'all')
    return projects.value

  return projects.value.filter((project) => getProjectTags(project.tags).includes(selectedProjectTag.value as ProjectTag));
});

const techItems = [
  '/img/tech/node.png',
  '/img/tech/nest.png',
  '/img/tech/sql.png',
  '/img/tech/go.png',
  '/img/tech/nuxt.png',
  '/img/tech/docker.png',
  '/img/tech/flutter.png',
  '/img/tech/express.png'
];
</script>
