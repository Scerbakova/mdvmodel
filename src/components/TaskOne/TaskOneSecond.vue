<template>
  <div>
    <TitleComponent :title="title"
      ><InputAlone :placeholder="placeholder" v-model="title" type="text" />
    </TitleComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleComponent from "../Reusable/TitleComponent.vue";
import InputAlone from "../Reusable/InputAlone.vue";

export default defineComponent({
  name: "TaskOneSecond",
  components: {
    TitleComponent,
    InputAlone,
  },
  data: () => ({
    title: "Title",
    placeholder: "Update title...",
  }),
});
</script>
