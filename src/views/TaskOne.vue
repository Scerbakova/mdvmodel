<template>
  <div>
    <TitleComponent :title="title"
      ><InputWithButton
        :placeholder="placeholder"
        v-model="title1"
        type="text"
        @changeTitle="title = title1"
      />
    </TitleComponent>

    <TitleComponent :title="title2"
      ><InputAlone :placeholder="placeholder" v-model="title2" type="text" />
    </TitleComponent>

    <BoxComponent :title="title4"
      ><InputWithButton
        :placeholder="placeholder1"
        v-model="title5"
        type="text"
        @changeTitle="title4 = title5"
    /></BoxComponent>

    <BoxComponent :title="title6"
      ><InputAlone :placeholder="placeholder1" v-model="title6" type="text" />
    </BoxComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputWithButton from "@/components/InputWithButton.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import InputAlone from "../components/InputAlone.vue";
import BoxComponent from "@/components/BoxComponent.vue";

export default defineComponent({
  name: "TaskOne",
  components: { InputWithButton, TitleComponent, InputAlone, BoxComponent },
  data: () => ({
    title: "Title",
    title1: "Title",
    title2: "Title",
    title4: "Blue",
    title5: "Blue",
    title6: "Blue",
    placeholder: "Update title...",
    placeholder1: "Change color...",
  }),
});
</script>
