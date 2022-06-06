<template>
  <div class="wrapper">
    <p class="instruction">Toggle Square visibility on button click</p>
    <ButtonComponent @changeProp="changeProp">Toggle</ButtonComponent>
    <div class="box__container">
      <BoxComponent :color="color" :boxClass="boxClass" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BoxComponent from "@/components/Reusable/BoxComponent.vue";
import ButtonComponent from "../Reusable/ButtonComponent.vue";

export default defineComponent({
  name: "TaskTwoThird",
  components: {
    BoxComponent,
    ButtonComponent,
  },
  data: () => ({
    color: "Orange",
    boxClass: "box" || "hidden",
  }),
  methods: {
    changeProp() {
      if (this.boxClass === "box") {
        this.boxClass = "hidden";
      } else {
        this.boxClass = "box";
      }
    },
  },
});
</script>
