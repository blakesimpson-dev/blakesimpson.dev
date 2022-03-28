<template>
  <Page 
    pageTitle="About"
    :videoBGSource="videoBackground"
  >
    <template #splash>
    </template>
    <template #content>
    </template>
    <template #footer>
    </template>
  </Page>
</template>

<script lang="ts">
export default {
  name: "AboutPage",
  inheritAttrs: false,
  customOptions: {},
}
</script>

<script setup lang="ts">
import Page from "@/common/components/page/page.vue"
import videoBackground from "@/assets/videos/kataplexia-1080.mp4"
import "./about.page.scss"
</script>

