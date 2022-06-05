<template>
  <div class="title__component">
    <div class="controls">
      <slot></slot>
    </div>
    <div class="box" v-bind:style="{ backgroundColor: title }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleComponent",
  props: {
    title: {
      type: String,
      default: "Blue",
    },
  },
});
</script>
<style lang="scss">
.title__component {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 30px auto;
  border: 2px solid black;
  max-width: 500px;
  align-items: center;
  padding: 20px;
}
.box {
  width: 100px;
  height: 100px;
}
.controls {
  display: flex;
  gap: 40px;
}
</style>
