<template>
  <div class="container">
    <nav class="navigation">
      <router-link class="navigation__link" to="/">Task One</router-link> |
      <router-link class="navigation__link" to="/task2">Task Two</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/Styles/styles.scss";
</style>
