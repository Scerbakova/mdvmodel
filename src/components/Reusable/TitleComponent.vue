<template>
  <div>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleComponent",
  props: ["title"],
});
</script>
