<template>
  <div>
    <BoxComponent :color="color" :boxClass="boxClass">
      <p>Toggle Square visibility on button click</p>
      <ToggleButton @changeProp="changeProp" />
    </BoxComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BoxComponent from "@/components/Reusable/BoxComponent.vue";
import ToggleButton from "./ToggleButton.vue";

export default defineComponent({
  name: "TaskTwoThird",
  components: {
    BoxComponent,
    ToggleButton,
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
