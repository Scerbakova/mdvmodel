<template>
  <div class="wrapper">
    <BoxComponent :color="color" />
    <InputComponent :placeholder="placeholder" v-model="color" type="text" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BoxComponent from "@/components/Reusable/BoxComponent.vue";
import InputComponent from "../Reusable/InputComponent.vue";

export default defineComponent({
  name: "TaskOneFourth",
  components: {
    BoxComponent,
    InputComponent,
  },
  data: () => ({
    color: "Blue",
    placeholder: "Change color...",
  }),
});
</script>
