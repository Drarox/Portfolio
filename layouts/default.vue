<script lang="ts" setup>
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
</script>

<template>
  <div id="default">
    <NuxtLoadingIndicator :throttle="0" :duration="3000"/>

    <TheHeader />

    <slot/>

    <TheFooter />
  </div>
</template>
