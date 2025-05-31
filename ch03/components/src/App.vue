<template>
  <!-- snake case -->
  <my-first-component />
  <!-- camel case -->
  <MyFirstComponent />
  <MyFirstComponentWithHooks />
  <StaticMessage />
  <ReversedMessage />
  <UserWatcherComponent />
  <ListLayout />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MyFirstComponent from "./components/MyFirstComponent.vue";
import MyFirstComponentWithHooks from "./components/MyFirstComponentWithHooks.vue";
import StaticMessage from "./components/StaticMessage.vue";
import ReversedMessage from "./components/ReversedMessage.vue";
import UserWatcherComponent from "./components/UserWatcherComponent.vue";
import ListLayout from "./components/ListLayout.vue";

export default defineComponent({
  components: {
    MyFirstComponent,
    MyFirstComponentWithHooks,
    StaticMessage,
    ReversedMessage,
    UserWatcherComponent,
    ListLayout,
  },
});
</script>

<style scoped>
.wrapper :deep(p) {
  color: #000;
}
</style>
