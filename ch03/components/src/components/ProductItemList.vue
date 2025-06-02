<template>
  <div>
    <h5>Product Item List</h5>
    <ListLayout v-slot="{ item }">
      <img
        v-if="item.thumbnail"
        :src="item.thumbnail"
        :alt="item.name"
        width="200"
      />
      <div>{{ item.name }}</div>
    </ListLayout>

    <ListLayout>
      <template #thumbnail="{ item }">
        <img
          v-if="item.thumbnail"
          :src="item.thumbnail"
          :alt="item.name"
          width="200"
        />
      </template>

      <template #main="{ item, price }">
        <div>{{ item.name }}</div>
        <div>{{ item.description }}</div>
        <div>{{ price }}</div>
      </template>

      <template #actions>
        <div>
          <button>Add to cart</button>
        </div>
      </template>
    </ListLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListLayout from "./ListLayout.vue";

export default defineComponent({
  name: "ProductItemList",
  components: { ListLayout },
  data() {
    return {
      price: 100,
    };
  },
});
</script>
