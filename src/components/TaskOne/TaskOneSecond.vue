<template>
  <div class="wrapper">
    <TitleComponent :title="title" />
    <InputComponent :placeholder="placeholder" v-model="title" type="text" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleComponent from "../Reusable/TitleComponent.vue";
import InputComponent from "../Reusable/InputComponent.vue";

export default defineComponent({
  name: "TaskOneSecond",
  components: {
    TitleComponent,
    InputComponent,
  },
  data: () => ({
    title: "Title",
    placeholder: "Update title...",
  }),
});
</script>
