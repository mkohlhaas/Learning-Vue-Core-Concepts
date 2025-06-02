<template>
  <!-- snake case -->
  <my-first-component />
  <!-- camel case -->
  <MyFirstComponent />
  <MyFirstComponentWithHooks />
  <StaticMessage />
  <ReversedMessage />
  <UserWatcherComponent />
  <ProductItemList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MyFirstComponent from "./components/MyFirstComponent.vue";
import MyFirstComponentWithHooks from "./components/MyFirstComponentWithHooks.vue";
import StaticMessage from "./components/StaticMessage.vue";
import ReversedMessage from "./components/ReversedMessage.vue";
import UserWatcherComponent from "./components/UserWatcherComponent.vue";
import ProductItemList from "./components/ProductItemList.vue";

export default defineComponent({
  components: {
    MyFirstComponent,
    MyFirstComponentWithHooks,
    StaticMessage,
    ReversedMessage,
    UserWatcherComponent,
    ProductItemList,
  },
});
</script>

<style scoped>
.wrapper :deep(p) {
  color: #000;
}
</style>
