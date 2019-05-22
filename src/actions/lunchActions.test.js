import { addDrink, ADD_DRINK, addSandwich, ADD_SANDWICH, addChips, ADD_CHIPS, REMOVE_DRINK, removeDrink, REMOVE_SANDWICH, removeSandwich, removeChips, REMOVE_CHIPS } from './lunchActions';

describe('lunch actions', () => {
  it('adds a drink', () => {
    expect(addDrink('pepsi')).toEqual({
      type: ADD_DRINK,
      payload: 'pepsi'
    });
  });

  it('adds chips', () => {
    expect(addChips('lays')).toEqual({
      type: ADD_CHIPS,
      payload: 'lays'
    });
  });

  it('adds a sandwich', () => {
    expect(addSandwich('sub')).toEqual({
      type: ADD_SANDWICH,
      payload: 'sub'
    });
  });

  it('removes a drink', () => {
    expect(removeDrink()).toEqual({
      type: REMOVE_DRINK
    });
  });

  it('removes chips', () => {
    expect(removeChips()).toEqual({
      type: REMOVE_CHIPS
    });
  });
  
  it('removes a sandwich', () => {
    expect(removeSandwich()).toEqual({
      type: REMOVE_SANDWICH
    });
  });

});
