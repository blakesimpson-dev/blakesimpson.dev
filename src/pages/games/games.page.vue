<template>
  <Page 
    pageTitle="Games"
  >
    <template #splash></template>
    <template #content>
      <div class="post-container">
        <Post
          v-for="post in posts"
          :title="post.title"
          :content="post.content"
          :images="post.images"
          :links="post.links"
        />
      </div>
    </template>
    <template #footer></template>
  </Page>
</template>

<script lang="ts">
export default {
  name: "GamesPage",
  inheritAttrs: false,
  customOptions: {},
}
</script>

<script setup lang="ts">
import { PostData } from "@/common/types"
import Post from "@/common/components/post/post.vue"
import Page from "@/common/components/page/page.vue"
import GamesData from "./games.data.json"
import "./games.page.scss"

const posts: Array<PostData> = GamesData
</script>
