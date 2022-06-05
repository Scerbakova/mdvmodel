<template>
  <div>
    <TaskTwoFirst />
    <TaskTwoSecond />
    <TaskTwoThird />
    <TaskTwoFourth />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskTwoFirst from "@/components/TaskTwo/TaskTwoFirst.vue";
import TaskTwoSecond from "@/components/TaskTwo/TaskTwoSecond.vue";
import TaskTwoThird from "@/components/TaskTwo/TaskTwoThird.vue";
import TaskTwoFourth from "@/components/TaskTwo/TaskTwoFourth.vue";

export default defineComponent({
  name: "TaskTwo",
  components: {
    TaskTwoFirst,
    TaskTwoSecond,
    TaskTwoThird,
    TaskTwoFourth,
  },
});
</script>
