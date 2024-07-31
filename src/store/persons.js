import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

export const usePersonsStore = defineStore('persons', {
    state: () => ({
        persons: ['A', 'B', 'C']
    })

})

/* let persons = ref(['A', 'B', 'C']);

    function addPersonName(name) {
        persons.push(name);
    }

    function deletePerson(name) {
        persons = persons.filter(person => person !== name);
    } */