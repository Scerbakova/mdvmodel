<template>
  <div class="wrapper">
    <TitleComponent :title="title" />
    <InputComponent
      :placeholder="placeholder"
      v-model="titleInput"
      type="text"
      v-focus
    />
    <ButtonComponent @changeProp="(title = titleInput), (titleInput = '')"
      >Change</ButtonComponent
    >
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
    titleInput: "",
    placeholder: "Update title...",
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
