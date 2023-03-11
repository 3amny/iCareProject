import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  LOGOUT_USER,
  GET_ALL_USERS_BEGIN,
  GET_ALL_USERS_SUCCESS,
  SET_EDIT_USER,
  HANDLE_CHANGE,
  UPDATE_USER_ADMIN_BEGIN,
  UPDATE_USER_ADMIN_SUCCESS,
  CLEAR_VALUES,
  UPDATE_USER_ADMIN_ERROR,
  DELETE_USER_ADMIN_BEGIN,
} from "./action";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const role = localStorage.getItem("role");
const initialState = {
  isLoading: false,
  showAlert: false,
  editUserId: "",
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token || "",
  role: role || "",
  users: [],
  totalUsers: 0,
  numOfPages: 1,
  page: 1,
};

//change to redux toolkit
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });
  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 2000);
  };
  const addUserToLocalStorage = ({ user, token, role }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user", JSON.stringify(user));
    localStorage.removeItem("token", token);
    localStorage.removeItem("role", role);
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/register", currentUser);
      const { user, token, role } = data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, role },
      });
      addUserToLocalStorage({ user, token, role });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token, role } = data;
      console.log(user.firstName);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, role },
      });
      addUserToLocalStorage({ user, token, role });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("/auth/update", currentUser);

      const { user, role, token } = data;

      dispatch({ type: UPDATE_USER_SUCCESS, payload: { user, role, token } });
      addUserToLocalStorage({ user, role, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };
  const registerDoctor = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const { data } = await authFetch.post(
        "/doctor/auth/register",
        currentUser
      );
      const { user, token, role } = data;

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, role },
      });
      addUserToLocalStorage({ user, token, role });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const loginDoctor = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post(
        "/api/v1/doctor/auth/login",
        currentUser
      );
      const { user, token } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const getUsers = async () => {
    let url = `/admin/users`;
    dispatch({ type: GET_ALL_USERS_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { users, totalUsers, numOfPages } = data;
      dispatch({
        type: GET_ALL_USERS_SUCCESS,
        payload: {
          users,
          totalUsers,
          numOfPages,
        },
      });
    } catch (error) {
      console.log(error.response);
    }
    clearAlert();
  };
  const handleChange = ({ name, value }) => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: { name, value },
    });
  };
  const setEditUser = (id) => {
    dispatch({ type: SET_EDIT_USER, payload: { id } });
  };
  const updateUserAdmin = async () => {
    dispatch({ type: UPDATE_USER_ADMIN_BEGIN });
    try {
      const {
        firstName,
        lastName,
        city,
        street,
        phone,
        role,
        email,
        appointments,
      } = state;
      await authFetch.patch(`/admin/users/${state.editUserId}`, {
        firstName,
        lastName,
        city,
        street,
        phone,
        role,
        email,
        appointments,
      });
      dispatch({ type: UPDATE_USER_ADMIN_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: UPDATE_USER_ADMIN_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };
  const deleteUserAdmin = async (id) => {
    dispatch({ type: DELETE_USER_ADMIN_BEGIN });
    try {
      await authFetch.delete(`/admin/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error.response);
    }
  };
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        registerDoctor,
        loginDoctor,
        updateUser,
        logoutUser,
        getUsers,
        updateUserAdmin,
        deleteUserAdmin,
        setEditUser,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
