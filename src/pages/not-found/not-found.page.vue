<template>
  PAGE NOT FOUND
  <img :src="debugImage" style="max-width: 200px" />
</template>

<script lang="ts">
export default {
  name: "LandingPage",
  inheritAttrs: false,
  customOptions: {},
}
</script>

<script setup lang="ts">
import debugImage from "@/assets/images/kataplexia-vape.png"
import "./not-found.page.scss"
</script>

