<template>
  <div>
    <TitleWithDescription :title="title" :description="description" />
    <InputWithButton
      :placeholder="placeholderTitle"
      v-model="titleInput"
      type="text"
      @changeProp="title = titleInput"
    />
    <InputWithButton
      :placeholder="placeholderDescription"
      v-model="descriptionInput"
      type="text"
      @changeProp="description = descriptionInput"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputWithButton from "@/components/Reusable/InputWithButton.vue";
import TitleWithDescription from "../Reusable/TitleWithDescription.vue";

export default defineComponent({
  name: "TaskTwoFirst",
  components: { InputWithButton, TitleWithDescription },
  data: () => ({
    title: "Title",
    titleInput: "Title",
    description: "Description",
    descriptionInput: "Description",
    placeholderTitle: "Update title...",
    placeholderDescription: "Update description...",
  }),
});
</script>
