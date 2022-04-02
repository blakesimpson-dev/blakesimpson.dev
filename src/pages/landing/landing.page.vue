<template>
  <Page 
    pageTitle="Landing"
  >
    <template #splash>
      <div class="splash">
        <div class="splash__header">
          <div class="splash-row">
            <div class="splash-item--one">BS</div>
            <div class="splash-item--two">developer</div>
          </div>
          <div class="splash-row">
            <div class="splash-item--three">musician</div>
          </div>
        </div>
        <div class="splash__footer">
          <span class="jp" >空調;自然に対する人間の勝利。</span>Air conditioning; Man's triumph over nature.
        </div>
      </div>
    </template>
    <template #content>
      <img src="/assets/images/kataplexia-vape.jpg" style="max-width: 200px" />
    </template>
    <template #footer>
      <img src="/assets/images/kataplexia-vape.jpg" style="max-width: 200px" />
    </template>
  </Page>
</template>

<script lang="ts">
export default {
  name: "LandingPage",
  inheritAttrs: false,
  customOptions: {},
}
</script>

<script setup lang="ts">
import Page from "@/common/components/page/page.vue"
import "./landing.page.scss"
</script>

