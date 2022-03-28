<template>
  <Page 
    pageTitle="About"
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
import "./about.page.scss"
</script>

