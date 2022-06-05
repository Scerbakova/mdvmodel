import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TaskOne from "../views/TaskOne.vue";
import TaskTwo from "../views/TaskTwo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "task1",
    component: TaskOne,
  },
  {
    path: "/task2",
    name: "task2",
    component: TaskTwo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
