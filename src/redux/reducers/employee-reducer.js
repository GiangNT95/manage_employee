import {
  EMPLOYEE_LIST,
  DELETE_EMPLOYEE,
  DELETED_EMPLOYEE,
  EMPLOYEE_LOADED,
  GET_EMPLOYEE_BY_ID,
  EMPLOYEE_UPDATING,
  UPDATED_EMPLOYEE,
  UPDATE_EMPLOYEE,
  GET_EMPLOYEE_LIST_FAIL,
  UPDATE_EMPLOYEE_FAIL,
  GET_EMPLOYEE_BY_ID_ERR,
  ADD_EMPLOYEE_FAIL,
  DELETE_FAIL,
  ADDED_EMPLOYEE,
} from "../types";

const initialState = {
  employeeList: [],
  error: false,
  loading: false,
  deleteEmployee: null,
  success: {},
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_LIST:
      return {
        ...state,
        loading: true,
      };
    case EMPLOYEE_LOADED:
      return {
        ...state,
        loading: false,
        error: null,
        employeeList: action.payload,
      };
    case GET_EMPLOYEE_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        employeeList: [],
      };

    case GET_EMPLOYEE_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case ADDED_EMPLOYEE:
      return {
        ...state,
        success: {
          added: true,
        },
      };

    case DELETE_EMPLOYEE:
      return {
        ...state,
        loading: true,
        deleteEmployee: action.payload,
      };

    case DELETED_EMPLOYEE: {
      return {
        ...state,
        loading: false,
        employeeList: state.employeeList.filter(
          (e) => e.id !== state.deleteEmployee
        ),
        deleteEmployee: null,
        success: {
          deleted: true,
        },
      };
    }
    case DELETE_FAIL:
    case GET_EMPLOYEE_BY_ID_ERR:
    case UPDATE_EMPLOYEE_FAIL:
    case ADD_EMPLOYEE_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case EMPLOYEE_UPDATING:
      return {
        ...state,
        loading: false,
        employeeUpdating: action.employeeUpdating,
      };

    case UPDATE_EMPLOYEE:
      return {
        ...state,
        loading: true,
      };
    case UPDATED_EMPLOYEE:
      return {
        ...state,
        loading: false,
        employeeUpdating: null,
        success: {
          updated: true,
        },
      };

    default:
      return state;
  }
};
export default employeeReducer;
