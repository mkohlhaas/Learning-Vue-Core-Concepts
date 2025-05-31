<!-- <script lang="ts"> -->
<!-- import { defineComponent } from 'vue'; -->
<!---->
<!-- export default defineComponent({ -->
<!--   setup() { -->
<!--     const message = 'Welcome to Vue 3!' -->
<!--     return { -->
<!--       message -->
<!--     } -->
<!--   } -->
<!-- }) -->
<!-- </script>  -->

<!-- using setup hook -->
<script setup lang="ts">
const message = "Welcome to Vue 3!";
</script>

<template>
  <h3>{{ message }}</h3>
</template>

<!-- <script lang="ts"> -->
<!-- import { defineComponent, h } from 'vue' -->
<!---->
<!-- export default defineComponent({ -->
<!--   setup() { -->
<!--     const message = 'Welcome to Vue 3!' -->
<!--     return () => h('div', message) -->
<!--   } -->
<!-- }) -->
<!-- </script> -->
