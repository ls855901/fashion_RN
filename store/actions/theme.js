export const SET_THEME = 'SET_THEME';

export const setTheme = (theme) => {
  return (dispatch) => {
    dispatch({
      type: SET_THEME,
      data: theme,
    });
  };
};
