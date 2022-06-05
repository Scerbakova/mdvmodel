<template>
  <div>
    <BoxComponent :color="color"
      ><InputWithButton
        :placeholder="placeholder"
        v-model="colorInput"
        type="text"
        @changeProp="color = colorInput"
    /></BoxComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputWithButton from "@/components/Reusable/InputWithButton.vue";
import BoxComponent from "@/components/Reusable/BoxComponent.vue";

export default defineComponent({
  name: "TaskOneThird",
  components: {
    InputWithButton,
    BoxComponent,
  },
  data: () => ({
    color: "Blue",
    colorInput: "Blue",
    placeholder: "Change color...",
  }),
});
</script>
