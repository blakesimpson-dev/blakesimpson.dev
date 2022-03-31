<template>
  <Page 
    pageTitle="Music"
  >
    <template #splash>
      <div class="splash">
        <div class="splash__header">
          <span class="jp">空調;自然に対する人間の勝利。</span>Air conditioning;
          Man's triumph over nature.
        </div>
        <div class="splash__footer">
          <div class="track-container">
            <div v-for="iframe in soundcloudIFrames" class="track">
              <iframe
                :width="iframe.width"
                :height="iframe.height"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                :src="getSoundcloudIFrameSource(iframe)"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </Page>
</template>

<script lang="ts">
export default {
  name: "MusicPage",
  inheritAttrs: false,
  customOptions: {},
}
</script>

<script setup lang="ts">
import { SoundcloudIFrame } from "@/common/types"
import Page from "@/common/components/page/page.vue"
import MusicData from "./music.data.json"
import "./music.page.scss"

const DefaultSoundcloudIFrame = {
  width: "400px",
  height: "400px",
  color: "%23ff985a",
  hideRelated: true,
  showComments: false,
  showUser: false,
  showReposts: false,
  showTeaser: false,
  visual: true,
}

const soundcloudIFrames: Array<SoundcloudIFrame> = MusicData.map(
  (data: Partial<SoundcloudIFrame>) => ({
    ...DefaultSoundcloudIFrame,
    id: data.id!,
    autoPlay: data.autoPlay!,
    href: data.href!,
    title: data.title!,
  }),
)

const getSoundcloudIFrameSource = (iframe: SoundcloudIFrame): string => {
  const items: Array<string> = [
    `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${iframe.id}`,
    `&color=${iframe.color}`,
    `&auto_play=${iframe.autoPlay}`,
    `&hide_related=${iframe.hideRelated}`,
    `&show_comments=${iframe.showComments}`,
    `&show_user=${iframe.showUser}`,
    `&show_reposts=${iframe.showReposts}`,
    `&show_teaser=${iframe.showTeaser}`,
    `&visual=${iframe.visual}`,
  ]
  return items.join("")
}
</script>
