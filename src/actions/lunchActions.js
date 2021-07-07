export const ADD_DRINK = 'ADD_DRINK';
export const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});

export const ADD_CHIPS = 'ADD_CHIPS';
export const addChips = chips => ({
  type: ADD_CHIPS,
  payload: chips
});

export const ADD_SANDWICH = 'ADD_SANDWICH';
export const addSandwich = sandwich => ({
  type: ADD_SANDWICH,
  payload: sandwich
});

export const REMOVE_DRINK = 'REMOVE_DRINK';
export const removeDrink = () => ({
  type: REMOVE_DRINK
});

export const REMOVE_CHIPS = 'REMOVE_CHIPS';
export const removeChips = () => ({
  type: REMOVE_CHIPS
});

export const REMOVE_SANDWICH = 'REMOVE_SANDWICH';
export const removeSandwich = () => ({
  type: REMOVE_SANDWICH
});

export const ADD_FULL_BOAT = 'ADD_FULL_BOAT';
export const addFullBoat = (allItems) => ({
  type: ADD_FULL_BOAT,
  payload: allItems
});

export const REMOVE_FULL_BOAT = 'REMOVE_FULL_BOAT';
export const removeFullBoat = () => ({
  type: REMOVE_FULL_BOAT
});
