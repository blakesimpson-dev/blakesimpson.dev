<template>
  <div class="header">
    <div class="header__title">
      <a @click="onClickHeaderItem('/')">
        <span class="jp">キャタプレクシア</span>
        <b>&nbsp;◊&nbsp;</b>
        KATAPLEXIA
        <b>&nbsp;◊&nbsp;</b>
        blakesimpson.dev
      </a>
    </div>
    <div class="header__items">
      <a @click="onClickHeaderItem('/about')">about</a>
      <a @click="onClickHeaderItem('/games')">games</a>
      <a @click="onClickHeaderItem('/projects')">projects</a>
      <a @click="onClickHeaderItem('/music')">music</a>
      <a @click="onClickContact()"><b>&nbsp;◊&nbsp;</b>contact</a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Header",
  inheritAttrs: false,
  customOptions: {},
}
</script>

<script setup lang="ts">
import router from "@/router"
import "./header.scss"

const onClickHeaderItem = (value: string): void => {
  router.push(value)
}

const onClickContact = () => {
  console.log('emailme')
}
</script>

