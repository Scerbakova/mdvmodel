<template>
  <button @click="$emit('changeProp')">Toggle</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["changeProp"],
  name: "ToggleButton",
});
</script>
