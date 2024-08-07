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
            console.log(this.person)
        },

        deletePerson(id) {
            console.log(id)
            console.log(this.persons)
            this.persons = this.persons.filter(person => person.id !== id)
        }
    }

}) 