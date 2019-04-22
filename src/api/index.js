const loadList = () => {
  let myList = [];
  if (localStorage.getItem('list')) {
    myList = JSON.parse(localStorage.getItem('list'));
  }
  return myList;
};

// Get all items
export const getAllItems = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(loadList());
  }, 1000);
});

// Add an item
export const addItem = item => new Promise((resolve) => {
  setTimeout(() => {
    const newList = loadList().concat(item);
    localStorage.setItem('list', JSON.stringify(newList));
    resolve(item);
  }, 1000);
});

// Delete an item
export const deleteItem = (id) => {
  const item = loadList().find(item => item.id === id);
  return new Promise((resolve) => {
    setTimeout(() => {
      const newList = loadList().filter(item => item.id !== id);
      localStorage.setItem('list', JSON.stringify(newList));
      resolve(item);
    }, 1000);
  });
};
