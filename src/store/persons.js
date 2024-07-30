import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

export const usePersonsStore = defineStore('persons', () => {
    let persons = ref(['A']);

    function addPersonName(name) {
        persons.push(name);
    }

    function deletePerson(name) {
        persons = persons.filter(person => person !== name);
    }

})