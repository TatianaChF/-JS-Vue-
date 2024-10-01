import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { v4 as uuidv4 } from "uuid";

export const usePersonsStore = defineStore('personsData', () => {
    const persons = ref([]);
    const personsLocalStorage = localStorage.getItem("persons");

    if (personsLocalStorage) {
        persons.value = JSON.parse(personsLocalStorage);
    }

    const addPerson = (personName) => {
        persons.value.push({
            id: uuidv4(), 
            name: personName,
        })
    }

    const removePerson = (id) => {
        persons.value = persons.value.filter(person => person.id !== id);
    }

    // watch(
    //     () => persons,
    //     (state) => {
    //         localStorage.setItem("personsData", JSON.stringify(state));
    //     },
    //     { deep: true }
    // );

    return {persons, addPerson, removePerson}
}) 