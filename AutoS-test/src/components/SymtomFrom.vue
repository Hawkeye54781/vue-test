<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>
<script>
import { server } from "../helper";
import axios from "axios";

export default {
  data() {
    return {
      symtomInput: "",
      matchingSymtoms: [],
    };
  },
  methods: {
    searchSymtom() {
      axios
        .get(`${server.baseURL}/api/symtoms`, {
          params: { searchText: this.symtomInput },
        })
        .then((data) => (this.matchingSymtoms = data.data));
    },
  },
};
</script>

<template>
  <div class="greetings">
    <h3 class="green">{{ msg }}</h3>
    <input v-model="symtomInput" />
    <button v-on:click="searchSymtom()">Search</button>
    <ul>
      <li v-for="(symtom, index) in matchingSymtoms" :key="index">
        <span> {{ symtom }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
