<template>
  <div class="title__component">
    <h1>{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleComponent",
  props: {
    title: {
      type: String,
      default: "Title",
    },
  },
});
</script>
