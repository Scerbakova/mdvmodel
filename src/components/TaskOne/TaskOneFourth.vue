<template>
  <div>
    <BoxComponent :color="color"
      ><InputAlone :placeholder="placeholder" v-model="color" type="text" />
    </BoxComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputAlone from "../Reusable/InputAlone.vue";
import BoxComponent from "@/components/Reusable/BoxComponent.vue";

export default defineComponent({
  name: "TaskOneFourth",
  components: {
    InputAlone,
    BoxComponent,
  },
  data: () => ({
    color: "Blue",
    placeholder: "Change color...",
  }),
});
</script>
