<template>
  <div class="post">
    <div class="post__title">
      <span>{{ props.title }}</span>
    </div>

    <div v-if="props.links.length" class="post__links">
      <SmartLink v-for="link in props.links" :to="link.href">{{ link.content }}</SmartLink>
    </div>

    <div class="post__content">
      <span>{{ props.content }}</span>
    </div>

    <div class="post__images">
      <a v-for="image in props.images" :href="image.src" target="_blank" rel="noopener">
        <img :src="image.src" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Post",
  inheritAttrs: false,
  customOptions: {},
}
</script>

<script setup lang="ts">
import { ImageData, LinkData } from "@/common/types"
import SmartLink from "@/common/components/smart-link/smart-link.vue"
import "./post.scss"

interface PostProps {
  title: string
  content: string
  images: Array<ImageData>
  links: Array<LinkData>
}

const props = defineProps<PostProps>()
</script>
