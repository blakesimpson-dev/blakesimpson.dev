<template>
  <Header />
  <slot />
</template>

<script lang="ts">
export default {
  name: "ApplicationLayout",
  inheritAttrs: false,
  customOptions: {},
}
</script>

<script setup lang="ts">
import Header from "@/common/components/header/header.vue"
</script>

