# Worcket Challenge - Simple React App

## Requirements
Create a React app that allows the user to make a supermarket list.

### Specs:

The app has 3 sections:
- The item count (0)
- An "Add Item" button (1)
- A list of items (2)
- An item form within a modal (3)
- When user clicks (1) it must show a modal (3) with an item form. The item is just a plain string so a text input with a save and cancel button is enought. "Save" option must control that the input is not empty and add the item to the list and close modal. "Cancel" just close the modal.
- Each element of the list (2) display the item text and also has a button with the option "Remove". Clicking that button remove the item from the list.
- When the list is empty, it should show a "List is empty" message.
- It's not posible to edit items in this version just add and remove.

### Restrictions:

- It must be a project created with create-eact-app. App must run with just npm/yarn start.
- Use just plain react (no state manager library).
- Persist items in memory, but prepare the app structure to add server-side comunication when needed. (i.e.: You must have an api.js file that expose functions to get all items, to add an item and to remove an item. These functions must return promises but internally can just add and remove items from an array in memory or save in local storage. You must also use the npm package delay or similar to emulate async and to see how the app behaves when is loading).

### Styles

- Use flexbox and plain CSS preferently (*).
- Try to implement the given design as similar as possible.

*This means that can not use a UI library (like bootstrap) for this, but you can use a css preprocesor, css modules or styles-coponents if you like. Althought we recomend to just use the default configuration for styles that comes with create-react-app.


### Deploy

Use a service like https://zeit.co/now or https://surge.sh/ to deploy the app. Send us the url along with the github repo.

### Instructions

#### `npm install`

#### `npm run start`


### [Now Deploy Link](https://supermarket-list-lhlyybbavg.now.sh/)
