<template>
  <div class="home-view-container">
    <h1>Pets</h1>
    {{ animalsCount }}
    {{ getAllCats.length }}
    <button class="btn btn-primary" @click="togglePetForm">Add new pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="petSpecies"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      showPetForm: false,
      petSpecies: ['cats', 'dogs'],
      formData: {
        name: '',
        age: 0,
        species: null,
      },
    };
  },
  methods: {
    ...mapActions(['addPet']),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const { species, name, age } = this.formData;
      const payload = {
        species,
        pet: {
          name,
          age,
        },
      };
      this.addPet(payload);
      // reset form after sumbit
      this.formData = {
        name: '',
        age: 0,
        species: null,
      };
      this.showPetForm = false;
    },
  },
  computed: {
    ...mapGetters(['animalsCount', 'getAllCats']),
  },
};
</script>
