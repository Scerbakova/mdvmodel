<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    class="input__field"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', handleInputChange($event))"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => {
    const handleInputChange = (event: Event) =>
      (event.target as HTMLInputElement).value;

    return { handleInputChange };
  },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss"></style>
