<script lang="ts" setup>
defineProps(["error"]);
</script>

<template>
  <UApp>
    <NuxtLayout>
      <div class="grid h-screen place-content-center bg-gray-900">
        <h1 class="uppercase tracking-widest text-white dark:text-gray-400">{{ error.statusCode }} | Not Found</h1>
      </div>
    </NuxtLayout>
  </UApp>
</template>
