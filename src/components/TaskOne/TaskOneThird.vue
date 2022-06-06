<template>
  <div class="wrapper">
    <BoxComponent :color="color" />
    <InputComponent
      :placeholder="placeholder"
      v-model="colorInput"
      type="text"
    />
    <ButtonComponent @changeProp="(color = colorInput), (colorInput = '')"
      >Change</ButtonComponent
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BoxComponent from "@/components/Reusable/BoxComponent.vue";
import ButtonComponent from "../Reusable/ButtonComponent.vue";
import InputComponent from "../Reusable/InputComponent.vue";

export default defineComponent({
  name: "TaskOneThird",
  components: {
    BoxComponent,
    ButtonComponent,
    InputComponent,
  },
  data: () => ({
    color: "Blue",
    colorInput: "",
    placeholder: "Change color...",
  }),
});
</script>
