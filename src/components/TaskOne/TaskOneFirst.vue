<template>
  <div class="wrapper">
    <TitleComponent :title="title" />
    <InputComponent
      :placeholder="placeholder"
      v-model="titleInput"
      type="text"
    />
    <ButtonComponent @changeProp="title = titleInput">Change</ButtonComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleComponent from "../Reusable/TitleComponent.vue";
import ButtonComponent from "../Reusable/ButtonComponent.vue";
import InputComponent from "../Reusable/InputComponent.vue";

export default defineComponent({
  name: "TaskOneFirst",
  components: { TitleComponent, ButtonComponent, InputComponent },
  data: () => ({
    title: "Title",
    titleInput: "Title",
    placeholder: "Update title...",
  }),
});
</script>
