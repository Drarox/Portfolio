<script setup lang="ts">
defineProps<{
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
      class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8"
  >
  <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />

    <div class="sm:flex sm:justify-between sm:gap-4">
      <div>
        <h3 class="text-lg font-bold text-gray-900 sm:text-xl hover:underline mb-1" >
          {{ title }}
        </h3>

<!--        <p class="mt-1 text-xs font-medium text-gray-600" v-if="jobtitle">As {{jobtitle}}</p>-->
        <div class="mt-2 flex flex-wrap gap-1">
          <span v-if="tags?.toLowerCase().includes('full')" class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">Full Stack</span>
          <span v-if="tags?.toLowerCase().includes('backend')" class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">Backend</span>
          <span v-if="tags?.toLowerCase().includes('mobile')" class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">Mobile</span>
          <span v-if="tags?.toLowerCase().includes('devops')" class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">DevOps</span>
          <span v-if="tags?.toLowerCase().includes('other')" class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">Other</span>
          <span v-if="tags?.toLowerCase().includes('open')" class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">Open Source</span>
        </div>
      </div>

      <div class="hidden sm:block sm:shrink-0">
        <img
            v-if="img && img !== 'github'"
            alt=""
            :src="img"
            class="size-14 rounded-full object-contain shadow-xs"
        >
        <Icon v-if="img === 'github'" class="size-14 rounded-full object-cover shadow-xs text-black" name="uil:github" />
        <Icon v-if="!img" class="size-14 rounded-full object-cover shadow-xs text-black" name="uil:code" />
      </div>
    </div>

    <div v-if="desc" class="mt-2">
      <p class="text-sm text-pretty text-gray-500">
        {{desc}}
      </p>
    </div>

    <dl class="mt-5 flex gap-4 sm:gap-6">
      <div v-if="published" class="flex flex-col-reverse">
        <dd class="text-xs text-gray-500">{{published}}</dd>
        <dt class="text-sm font-medium text-gray-600">{{ $t('projects.published') }}</dt>
      </div>

      <div v-if="framework" class="flex flex-col-reverse">
        <dd class="text-xs text-gray-500">{{framework}}</dd>
        <dt class="text-sm font-medium text-gray-600">{{$t('projects.framework')}}</dt>
      </div>
    </dl>
  </a>
</template>
