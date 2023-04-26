export const authDoctorHeader = (thunkAPI) => {
  return {
    headers: {
      Authorization: `Bearer ${thunkAPI.getState().doctorAuth.token}`,
    },
  };
};
