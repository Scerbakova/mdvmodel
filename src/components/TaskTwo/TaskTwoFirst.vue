<template>
  <div class="wrapper">
    <TitleWithDescription :title="title" :description="description" />
    <div class="input--field__button">
      <InputComponent
        :placeholder="placeholderTitle"
        v-model="titleInput"
        type="text"
        v-focus
      />
      <ButtonComponent @changeProp="title = titleInput">Change</ButtonComponent>
    </div>
    <div class="input--field__button">
      <InputComponent
        :placeholder="placeholderDescription"
        v-model="descriptionInput"
        type="text"
      />
      <ButtonComponent @changeProp="description = descriptionInput"
        >Change</ButtonComponent
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleWithDescription from "../Reusable/TitleWithDescription.vue";
import ButtonComponent from "../Reusable/ButtonComponent.vue";
import InputComponent from "../Reusable/InputComponent.vue";

export default defineComponent({
  name: "TaskTwoFirst",
  components: {
    TitleWithDescription,
    ButtonComponent,
    InputComponent,
  },
  data: () => ({
    title: "Title",
    titleInput: "Title",
    description: "Description",
    descriptionInput: "Description",
    placeholderTitle: "Update title...",
    placeholderDescription: "Update description...",
  }),
  directives: {
    focus: {
      mounted: (el) => {
        el.focus();
      },
    },
  },
});
</script>
