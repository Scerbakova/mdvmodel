<template>
  <div class="wrapper">
    <TitleWithDescription :title="title" :description="description" />
    <InputComponent
      :placeholder="placeholderTitle"
      v-model="title"
      type="text"
    />
    <InputComponent
      :placeholder="placeholderDescription"
      v-model="description"
      type="text"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputComponent from "@/components/Reusable/InputComponent.vue";
import TitleWithDescription from "../Reusable/TitleWithDescription.vue";

export default defineComponent({
  name: "TaskTwoSecond",
  components: { InputComponent, TitleWithDescription },
  data: () => ({
    title: "Title",
    description: "Description",
    placeholderTitle: "Update title...",
    placeholderDescription: "Update description...",
  }),
});
</script>
