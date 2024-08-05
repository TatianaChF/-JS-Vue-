const saveToLocalStorage = (key, items) => {
    localStorage.getItem(key, JSON.stringify(items));
}