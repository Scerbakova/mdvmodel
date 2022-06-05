<template>
  <div>
    <TitleWithDescription :title="title" :description="description" />
    <InputAlone :placeholder="placeholderTitle" v-model="title" type="text" />
    <InputAlone
      :placeholder="placeholderDescription"
      v-model="description"
      type="text"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputAlone from "@/components/Reusable/InputAlone.vue";
import TitleWithDescription from "../Reusable/TitleWithDescription.vue";

export default defineComponent({
  name: "TaskTwoSecond",
  components: { InputAlone, TitleWithDescription },
  data: () => ({
    title: "Title",
    description: "Description",
    placeholderTitle: "Update title...",
    placeholderDescription: "Update description...",
  }),
});
</script>
