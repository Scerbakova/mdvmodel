<template>
  <div>
    <TitleComponent :title="title"
      ><InputWithButton
        :placeholder="placeholder"
        v-model="titleInput"
        type="text"
        @changeProp="title = titleInput"
      />
    </TitleComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputWithButton from "@/components/Reusable/InputWithButton.vue";
import TitleComponent from "../Reusable/TitleComponent.vue";

export default defineComponent({
  name: "TaskOneFirst",
  components: { InputWithButton, TitleComponent },
  data: () => ({
    title: "Title",
    titleInput: "Title",
    placeholder: "Update title...",
  }),
});
</script>
