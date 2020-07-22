<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.species | removeS }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Bread: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      animal: {},
    };
  },
  mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id];
    this.animal = animal;
  },
  computed: {
    ...mapState(['cats', 'dogs']),
  },
  filters: {
    removeS(word) {
      return word.replace(/(\w+)(s)$/i, '$1');
    },
  },
};
</script>
