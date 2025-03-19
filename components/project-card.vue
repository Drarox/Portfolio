<script setup lang="ts">
const props = defineProps<{
  title: string
  desc?: string
  img?: string
  tags?: string
  published?: string
  framework?: string
  link?: string
}>();
</script>

<template>
  <a
      :href="link" target="_blank"
      class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
  >
  <span
      class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

    <div class="sm:flex sm:justify-between sm:gap-4">
      <div>
        <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
          {{ title }}
        </h3>

<!--        <p class="mt-1 text-xs font-medium text-gray-600" v-if="jobtitle">As {{jobtitle}}</p>-->
        <span v-if="tags?.toLowerCase().includes('full')" class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Full Stack</span>
        <span v-if="tags?.toLowerCase().includes('backend')" class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Backend</span>
        <span v-if="tags?.toLowerCase().includes('mobile')" class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Mobile</span>
        <span v-if="tags?.toLowerCase().includes('devops')" class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">DevOps</span>
<!--        <span class="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">Pink</span>-->
        <span v-if="tags?.toLowerCase().includes('other')" class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Other</span>
        <span v-if="tags?.toLowerCase().includes('open')" class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Open Source</span>
      </div>

      <div class="hidden sm:block sm:shrink-0">
        <img
            v-if="img"
            alt=""
            :src="img"
            class="size-14 rounded-full object-contain shadow-xs"
        />
        <Icon v-if="!img" class="size-14 rounded-full object-cover shadow-xs text-black" name="uil:github" />
      </div>
    </div>

    <div class="mt-2" v-if="desc">
      <p class="text-sm text-pretty text-gray-500">
        {{desc}}
      </p>
    </div>

    <dl class="mt-5 flex gap-4 sm:gap-6">
      <div class="flex flex-col-reverse" v-if="published">
        <dd class="text-xs text-gray-500">{{published}}</dd>
        <dt class="text-sm font-medium text-gray-600">Published</dt>
      </div>

      <div class="flex flex-col-reverse" v-if="framework">
        <dd class="text-xs text-gray-500">{{framework}}</dd>
        <dt class="text-sm font-medium text-gray-600">Framework</dt>
      </div>
    </dl>
  </a>
</template>
