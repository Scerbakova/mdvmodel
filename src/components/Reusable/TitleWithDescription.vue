<template>
  <div class="title__component">
    <h1 class="title">{{ title }}</h1>
    <h2 class="description">{{ description }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleWithDescription",
  props: ["title", "description"],
});
</script>
