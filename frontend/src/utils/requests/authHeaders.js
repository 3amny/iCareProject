export const authUserHeader = (thunkAPI) => {
  return {
    headers: {
      Authorization: `Bearer ${thunkAPI.getState().user.token}`,
    },
  };
};
