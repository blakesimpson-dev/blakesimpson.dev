<template>
  <a
    :class="{
      'smart-link__mailto': true,
      'smart-link__disabled': props.disabled
    }"
    v-if="isMailToLink"
    :href="to"
    target="_blank"
    rel="noopener"
  >
    <slot />
    <font-awesome-icon class="mailto-icon" :icon="['fas', 'envelope']" />
  </a>
  <a
    :class="{
      'smart-link__external': true,
      'smart-link__disabled': props.disabled
    }"
    v-else-if="isExternalLink"
    :href="to"
    target="_blank"
    rel="noopener"
  >
    <slot />
    <font-awesome-icon class="external-icon" :icon="['fas', 'external-link']" />
  </a>
  
  <router-link
    v-else
    :class="{
      'smart-link': true,
      'smart-link__disabled': props.disabled
    }"
    v-bind="$props"
  >
    <font-awesome-icon v-if="icon" :class="internalIconClass" :icon="icon" />
    <slot />
  </router-link>
</template>

<script lang="ts">
export default {
  name: "SmartLink",
  inheritAttrs: true,
  customOptions: {},
};
</script>

<script setup lang="ts">
import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faExternalLink as fasExternalLink, faEnvelope as fasEnvelope } from "@fortawesome/free-solid-svg-icons";
import { computed } from "@vue/reactivity";
import "./smart-link.scss";

library.add(fasExternalLink as IconDefinition, fasEnvelope as IconDefinition);

interface SmartLinkProps {
  to?: string;
  icon?: string | Array<string>;
  disabled?: boolean;
}

const props = withDefaults(defineProps<SmartLinkProps>(), {
  disabled: false,
});

const isExternalLink = computed((): boolean => {
  return typeof props.to === "string" && props.to.startsWith("http");
});

const isMailToLink = computed((): boolean => {
  return typeof props.to === "string" && props.to.startsWith("mailto");
});

const internalIconClass = computed((): Record<string, boolean> => {
  const classObject: Record<string, boolean> = {
    "internal-icon": true,
  };
  return classObject;
});
</script>
