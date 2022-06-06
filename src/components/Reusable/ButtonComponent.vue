<template>
  <button class="button" @click="$emit('changeProp')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["changeProp"],
  name: "ButtonComponent",
});
</script>

<style lang="scss"></style>
