<template>
  <div>
    <TaskOneFirst />
    <TaskOneSecond />
    <TaskOneThird />
    <TaskOneFourth />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskOneFirst from "@/components/TaskOne/TaskOneFirst.vue";
import TaskOneSecond from "@/components/TaskOne/TaskOneSecond.vue";
import TaskOneThird from "@/components/TaskOne/TaskOneThird.vue";
import TaskOneFourth from "@/components/TaskOne/TaskOneFourth.vue";

export default defineComponent({
  name: "TaskOne",
  components: {
    TaskOneFirst,
    TaskOneSecond,
    TaskOneThird,
    TaskOneFourth,
  },
});
</script>
