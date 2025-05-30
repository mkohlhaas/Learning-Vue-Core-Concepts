export const Collection = {
  data() {
    return {
      collection: {
        title: 'Watch Moonknight',
        description: 'Log in to Disney+ and watch all the chapters',
        priority: '5'
      }
    }
  },

  // template: `
  // <ul>
  //   <li v-for="(value, prop) in collection" :key="value">
  //   {{ prop }}: {{ value }}
  //   </li>
  // </ul>
  // `,

  template: `
  <ul>
    <li v-for="(value, prop, index) in collection" :key="index">
    {{ prop }}: {{ value }}
    </li>
  </ul>`,
};

export default Collection
