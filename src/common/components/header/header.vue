<template>
  <div class="header">
    <div class="header__title">
      <SmartLink class="smart-link--white" to="/">
        <span class="jp">キャタプレクシア</span>
        <span class="highlight">&nbsp;◊&nbsp;</span>
        <span>KATAPLEXIA</span>
        <span class="highlight">&nbsp;◊&nbsp;</span>
        <span>blakesimpson.dev</span>
      </SmartLink>
    </div>
    <div class="header__items">
      <SmartLink class="smart-link--white" to="/about">about</SmartLink>
      <SmartLink class="smart-link--white" to="/games">games</SmartLink>
      <SmartLink class="smart-link--white" to="/projects">projects</SmartLink>
      <SmartLink class="smart-link--white" to="/music">music</SmartLink>
      <SmartLink class="smart-link__mailto--white" to="mailto: blakesimpson.dev@outlook.com">
        <span class="highlight">&nbsp;◊&nbsp;</span>contact
      </SmartLink>
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

