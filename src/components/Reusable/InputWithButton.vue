<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    class="input__field"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', handleInputChange($event))"
  />
  <button @click="$emit('changeProp')">Change</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["update:modelValue", "changeProp"],
  name: "InputWithButton",
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
