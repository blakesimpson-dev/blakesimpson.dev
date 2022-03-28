<template>
  <ApplicationLayout>
    <router-view />
  </ApplicationLayout>
</template>

<script lang="ts">
export default {
  name: "Application",
  inheritAttrs: false,
  customOptions: {},
}
</script>

<script setup lang="ts">
import ApplicationLayout from "./layouts/application.layout.vue"
import "simplebar";
import "simplebar/dist/simplebar.css";
</script>