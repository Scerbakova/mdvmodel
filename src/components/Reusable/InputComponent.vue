<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    class="input__field"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', handleInputChange($event))"
    @change="$emit('changeProp')"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputAlone",
  methods: {
    handleInputChange(event: Event) {
      return (event.target as HTMLInputElement).value;
    },
  },
  props: ["placeholder", "modelValue"],
});
</script>

<style lang="scss"></style>
