<template>
  <div class="header">
    <div class="header__title">
      <SmartLink to="/">
        <span class="jp">キャタプレクシア</span>
        <b>&nbsp;◊&nbsp;</b>
        KATAPLEXIA
        <b>&nbsp;◊&nbsp;</b>
        blakesimpson.dev
      </SmartLink>
    </div>
    <div class="header__items">
      <SmartLink to="/about">about</SmartLink>
      <SmartLink to="/games">games</SmartLink>
      <SmartLink to="/projects">projects</SmartLink>
      <SmartLink to="/music">music</SmartLink>
      <SmartLink to="mailto: blakesimpson.dev@outlook.com"><b>&nbsp;◊&nbsp;</b>contact</SmartLink>
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
import SmartLink from "@/common/components/smart-link/smart-link.vue"
import router from "@/router"
import "./header.scss"

const onClickHeaderItem = (value: string): void => {
  router.push(value)
}

const onClickContact = () => {
  console.log('emailme')
}
</script>

