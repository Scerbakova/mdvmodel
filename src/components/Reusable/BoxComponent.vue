<template>
  <div :class="[boxClass]" :style="{ backgroundColor: color }"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxComponent",
  props: {
    color: {
      type: String,
      default: "Blue",
    },
    boxClass: {
      type: String,
      default: "box",
    },
  },
});
</script>
<style lang="scss"></style>
