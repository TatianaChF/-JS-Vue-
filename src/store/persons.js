import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

export const usePersonsStore = defineStore('persons', {
    state: () => ({
        persons: ['A', 'B', 'C']
    }),
    actions: {
        addPersonName(name) {
            this.persons.push(name);
        },

        deletePerson(name) {
            this.persons = this.persons.filter(person => person !== name);
        }
    }

})