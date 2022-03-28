<template>
  <div class="post">
    <div class="post__title">
      <span>{{ props.title }}</span>
    </div>

    <div class="post__content">
      <span>{{ props.content }}</span>
    </div>

    <div class="post__images">
      <a v-for="image in props.images" :href="image.src">
        <img :src="image.src" />
      </a>
    </div>

    <div class="post__links">
      <a v-for="link in props.links" :href="link.href">{{ link.content }}</a>
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
import "./post.scss"

interface PostProps {
  title: string
  content: string
  images: Array<ImageData>
  links: Array<LinkData>
}

const props = defineProps<PostProps>()
</script>
