<template>
  <div>
    <h5>User Watcher</h5>
    <div>
      <label for="name"
        >Name:
        <input v-model="user.name" placeholder="Enter your name" id="name" />
      </label>
    </div>
    <div>
      <label for="age"
        >Age:
        <input v-model="user.age" placeholder="Enter your age" id="age" />
      </label>
    </div>
    <div v-if="user.address">
      <label for="age"
        >City:
        <input
          v-model="user.address.city"
          placeholder="Enter your city"
          id="age"
        />
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { type WatchStopHandle, defineComponent } from "vue";

type User = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    country: string;
    zip: string;
  };
};

export default defineComponent({
  name: "UserWatcherComponent",
  data(): { user: User; stopWatchingAddressCityFn?: WatchStopHandle } {
    return {
      user: {
        name: "John",
        age: 30,
        address: {
          street: "123 Main St",
          city: "New York",
          country: "USA",
          zip: "10001",
        },
      },
      stopWatchingAddressCityFn: undefined, // function to stop watching
    };
  },
  created() {
    if (this.user.address) {
      console.log("Start watching user.address.city.");
      this.stopWatchingAddressCityFn = this.$watch(
        // what to watch
        "user.address.city",
        // watch handler
        (newValue: string, oldValue: string) => {
          console.log(this.user.age);
          if (this.user.age == 33) {
            console.log("I am not watching any more!");
            this.stopWatchingAddressCityFn!();
          }
          console.log("user.address.city watcher: ", { newValue, oldValue });
        },
      );
    }
  },
  beforeUnmount() {
    if (this.stopWatchingAddressCityFn) {
      this.stopWatchingAddressCityFn(); // stop watching
    }
  },
  watch: {
    user: {
      handler(newValue: User, oldValue: User) {
        console.log({ newValue, oldValue });
      },
      deep: true,
    },
    "user.name": {
      handler(newValue: string, oldValue: string) {
        console.log({ newValue, oldValue });
      },
    },
  },
});
</script>
