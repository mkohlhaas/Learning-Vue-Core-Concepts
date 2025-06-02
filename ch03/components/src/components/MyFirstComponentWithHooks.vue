<template>
  <div>
    <h5>My First Component with Hooks</h5>
    <h2>I am {{ message }}</h2>
    <input v-model="message" type="text" placeholder="Enter your name" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyFirstComponentWithHooks",
  data() {
    return {
      message: "",
    };
  },
  setup() {
    console.log("setup hook triggered!");
    return {};
  },
  beforeCreate() {
    console.log("beforeCreate hook triggered!");
  },
  created() {
    console.log("created hook triggered!");
  },
  beforeMount() {
    console.log("beforeMount hook triggered!");
  },
  mounted() {
    console.log("mounted hook triggered!");
  },
  beforeUpdate() {
    console.log("beforeUpdate hook triggered!");
  },
  updated() {
    console.log("updated hook triggered!");
  },
  beforeUnmount() {
    console.log("beforeUnmount hook triggered!");
  },
});
</script>
