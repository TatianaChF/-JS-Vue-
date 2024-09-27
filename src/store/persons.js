import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const usePersonsStore = defineStore('personsData', () => {
    const persons = ref([]);

    const personsLocalStorage = localStorage.getItem("personsData");

    if (personsLocalStorage) {
        persons.value = JSON.parse(personsLocalStorage)._value;
    }

    const addPerson = (person) => {
        persons.value.push(person);
    }

    const removePerson = (id) => {
        persons.value = persons.value.filter(person => person.id !== id);
    }

    watch(
        () => persons,
        (state) => {
            localStorage.setItem("personsData", JSON.stringify(state));
        },
        { deep: true }
    );

    return {persons, addPerson, removePerson}
}) 