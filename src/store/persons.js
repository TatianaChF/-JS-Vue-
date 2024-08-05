import { defineStore } from 'pinia'

export const usePersonsStore = defineStore('persons', {
    state: () => {
        const personsData = localStorage.getItem('personsData');
        return {
            personsName: personsData || []
        }
    },
    actions: {
        addPersonName(name) {
            this.personsName.push(name);
        },

        deletePerson(name) {
            this.personsName = this.personsName.filter(person => person !== name);
        }
    }

})