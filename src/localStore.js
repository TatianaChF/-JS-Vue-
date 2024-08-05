const saveToLocalStorage = (key, items) => {
    localStorage.getItem(key, JSON.stringify(items));
}

const loadFromLocalStorage = (key) => {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : null; 
}

export { saveToLocalStorage, loadFromLocalStorage }