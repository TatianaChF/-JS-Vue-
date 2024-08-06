import { defineStore } from 'pinia'

export const usePersonsStore = defineStore('persons', {
    state: () => {
        const personsData = localStorage.getItem('personsData');
        return {
            persons: personsData || []
        }
    },
    actions: {
        addPerson(person) {
            this.persons.push(person);
        },

        deletePerson(name) {
            this.personsName = this.personsName.filter(person => person !== name);
        }
    }

})