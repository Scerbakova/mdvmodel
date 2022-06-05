<template>
  <div class="title__component">
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleWithDescription",
  props: {
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Description",
    },
  },
});
</script>
