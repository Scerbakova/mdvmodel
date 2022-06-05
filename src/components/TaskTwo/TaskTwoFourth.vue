<template>
  <div>
    <BoxComponent :color="color" :boxClass="boxClass">
      <p>Toggle Square visibility on checkbox click</p>
      <InputAlone type="checkbox" @changeProp="changeProp" />
      <!-- <ToggleButton @changeProp="changeProp" /> -->
    </BoxComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BoxComponent from "@/components/Reusable/BoxComponent.vue";
import InputAlone from "../Reusable/InputAlone.vue";

export default defineComponent({
  name: "TaskTwoFourth",
  components: {
    BoxComponent,
    InputAlone,
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
