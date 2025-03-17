<script lang="ts" setup>
defineProps(["error"]);
</script>

<template>
  <div class="grid h-screen place-content-center bg-white px-4 dark:bg-gray-900">
    <h1 class="uppercase tracking-widest text-gray-500 dark:text-gray-400">{{ error.statusCode }} | Not Found</h1>
  </div>
</template>
