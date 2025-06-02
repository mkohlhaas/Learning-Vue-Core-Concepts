<template>
  <div>
    <h5>List Layout</h5>
    <ul>
      <li v-for="item in items" :key="item.id">
        <!-- <slot :item="item"> -->
        <!--   <div>{{ item.name }}</div> -->
        <!--   <div>{{ item.description }}</div> -->
        <!-- </slot> -->

        <slot name="thumbnail" :item="item" />
        <slot name="main" :item="item">
          <div>{{ item.name }}</div>
          <div>{{ item.description }}</div>
        </slot>
        <slot name="actions" :item="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Item {
  id: number;
  name: string;
  description: string;
  thumbnail?: string;
}

export default defineComponent({
  name: "ListLayout",
  data(): { items: Item[] } {
    return {
      items: [
        {
          id: 1,
          name: "Item 1",
          description: "This is item 1",
          thumbnail:
            "https://res.cloudinary.com/mayashavin/image/upload/v1643005666/Demo/supreme_pizza.jpg",
        },
        {
          id: 2,
          name: "Item 2",
          description: "This is item 2",
          thumbnail:
            "https://res.cloudinary.com/mayashavin/image/upload/v1643005666/Demo/hawaiian_pizza.jpg",
        },
        {
          id: 3,
          name: "Item 3",
          description: "This is item 3",
          thumbnail:
            "https://res.cloudinary.com/mayashavin/image/upload/v1643005666/Demo/pina_colada_pizza.jpg",
        },
      ],
    };
  },
});
</script>
