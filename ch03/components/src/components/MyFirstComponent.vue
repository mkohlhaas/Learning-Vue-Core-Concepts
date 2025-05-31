<template>
 <h2 class="heading">I am a a Vue component</h2>
 <h2 class="heading">{{ message }}</h2>
 <h2 class="heading">{{ reversedMessage }}</h2>
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

<style>
.heading {
 font-size: 16px;
}
</style>
