import {SET_THEME} from '../actions/theme';

const {themes} = require('../../config/Main');

const initialState = {
  theme: themes.light,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        theme: themes[action.data],
      };
    default:
      return state;
  }
};
