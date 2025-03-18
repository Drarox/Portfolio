<script lang="ts" setup>
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";
</script>

<template>
  <NuxtLoadingIndicator :throttle="0" :duration="3000"/>

  <Header />

  <slot/>

  <Footer />

</template>
