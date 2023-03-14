import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
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
  UPDATE_USER_ADMIN_BEGIN,
  SET_EDIT_USER,
  UPDATE_USER_ADMIN_SUCCESS,
  UPDATE_USER_ADMIN_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  DELETE_USER_ADMIN_BEGIN,
  GET_ALL_DOCTORS_BEGIN,
  GET_ALL_DOCTORS_SUCCESS,
  GET_ALL_CLINICS_BEGIN,
  GET_ALL_CLINICS_SUCCESS,
  CREATE_CLINIC_ADMIN_BEGIN,
  CREATE_CLINIC_ADMIN_SUCCESS,
  CREATE_CLINIC_ADMIN_ERROR,
  SET_EDIT_CLINIC,
  UPDATE_CLINIC_ADMIN_SUCCESS,
  UPDATE_CLINIC_ADMIN_BEGIN,
  UPDATE_CLINIC_ADMIN_ERROR,
  SET_EDIT_DOCTOR,
  DELETE_DOCTOR_ADMIN_BEGIN,
  UPDATE_DOCTOR_ADMIN_ERROR,
  UPDATE_DOCTOR_ADMIN_SUCCESS,
  UPDATE_DOCTOR_ADMIN_BEGIN,
} from "./action";
import { initialState } from "./appContext";
const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please, provide all values",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      doctor: action.payload.doctor,
      token: action.payload.token,
      role: action.payload.role,
      showAlert: true,
      alertType: "success",
      alertText: "User created! Redirecting...",
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      doctor: action.payload.doctor,
      token: action.payload.token,
      role: action.payload.role,
      showAlert: true,
      alertType: "success",
      alertText: "Login Successful! Redirecting...",
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      doctor: action.payload.doctor,
      token: action.payload.token,
      role: action.payload.role,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === UPDATE_DOCTOR_ADMIN_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPDATE_DOCTOR_ADMIN_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Doctor Updated!",
    };
  }
  if (action.type === UPDATE_DOCTOR_ADMIN_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_ALL_USERS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if (action.type === GET_ALL_USERS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      users: action.payload.users,
      totalUsers: action.payload.totalUsers,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === GET_ALL_DOCTORS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if (action.type === GET_ALL_DOCTORS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      doctors: action.payload.doctors,
      totalDoctors: action.payload.totalDoctors,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === GET_ALL_CLINICS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if (action.type === GET_ALL_CLINICS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      clinics: action.payload.clinics,
      totalClinics: action.payload.totalClinics,
      numOfPages: action.payload.numOfPages,
    };
  }

  if (action.type === SET_EDIT_USER) {
    const user = state.users.find((user) => user._id === action.payload.id);
    console.log(user);
    const {
      _id,
      firstName,
      lastName,
      email,
      phone,
      city,
      street,
      role,
      appointments,
    } = user;
    return {
      ...state,
      editUserId: _id,
      firstName,
      lastName,
      email,
      phone,
      city,
      street,
      role,
      appointments,
    };
  }
  if (action.type === SET_EDIT_CLINIC) {
    const clinic = state.clinics.find(
      (clinic) => clinic._id === action.payload.id
    );
    const { _id, organization, email, phone, city, street, isVerified } =
      clinic;
    return {
      ...state,
      isEditing: true,
      editClinicId: _id,
      organization,
      email,
      phone,
      city,
      street,
      isVerified,
    };
  }
  if (action.type === SET_EDIT_DOCTOR) {
    const doctor = state.doctors.find(
      (doctor) => doctor._id === action.payload.id
    );
    const {
      _id,
      firstName,
      lastName,
      phone,
      role,
      dateOfBirth,
      experience,
      startTime,
      endTime,
      interval,
      email,
      docType,
      clinic,
    } = doctor;
    return {
      ...state,
      editDoctorId: _id,
      firstName,
      lastName,
      dateOfBirth,
      phone,
      role,
      email,
      docType,
      clinic,
      startTime,
      endTime,
      interval,
      experience,
    };
  }
  if (action.type === UPDATE_CLINIC_ADMIN_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPDATE_CLINIC_ADMIN_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Clinic Updated!",
    };
  }
  if (action.type === UPDATE_CLINIC_ADMIN_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === UPDATE_USER_ADMIN_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPDATE_USER_ADMIN_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User Updated!",
    };
  }
  if (action.type === UPDATE_USER_ADMIN_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === CREATE_CLINIC_ADMIN_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_CLINIC_ADMIN_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Clinic was created!",
    };
  }
  if (action.type === CREATE_CLINIC_ADMIN_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === DELETE_USER_ADMIN_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === DELETE_DOCTOR_ADMIN_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      organization: "",
      email: "",
      phone: "",
      city: "",
      street: "",
      isVerified: false,
    };
    return { ...state, ...initialState };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
