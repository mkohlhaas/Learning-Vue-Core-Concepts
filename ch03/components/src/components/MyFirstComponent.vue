<template>
  <div>
    <h5>My First Component</h5>
    <h2>I am a a Vue component</h2>
    <h2>{{ message }}</h2>
    <h2>{{ reversedMessage }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyFirstComponent",
  data() {
    return {
      message: "Hello Vue",
      reversedMessage: "Hello Vue".split("").reverse().join(""),
    };
  },
  watch: {
    message(newValue: string, oldValue: string) {
      console.log(`new value: ${newValue}, old value: ${oldValue}`);
      this.reversedMessage = newValue.split("").reverse().join("");
    },
  },
});
</script>

<style></style>
