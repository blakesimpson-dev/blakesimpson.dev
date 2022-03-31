<template>
  <video autoplay muted loop class="video-background">
    <source :src="videoBGSource" type="video/mp4" />
  </video>

  <div class="content">
    <div v-if="$slots.splash" class="content__splash">
      <slot name="splash"></slot>
    </div>
    <div class="content__panel">
      <slot name="content"></slot>
    </div>
    <div class="content__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Page",
  inheritAttrs: false,
  customOptions: {},
}
</script>

<script setup lang="ts">
import "./page.scss"

interface PageProps {
  pageTitle: string
  videoBGSource?: string;
}

withDefaults(defineProps<PageProps>(), {
  videoBGSource: "/assets/videos/kataplexia-1080.mp4"
})
</script>

