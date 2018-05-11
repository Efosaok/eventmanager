import axios from 'axios';

axios.defaults.withCredentials = false;
export const TOKEN_EXPIRED = 'TOKEN_EXPIRED';

/* ******************** Action Types ****************** */
// Signup Actions Types
export const REQUEST_SIGNUP_USER = 'REQUEST_REGISTER_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const UPDATING_USER_REQUEST = 'UPDATING_USER_REQUEST';
export const UPDATED_USER = 'UPDATED_USER';
export const UPDATING_USER_ERROR = 'UPDATING_USER_ERROR';
export const RESET_UPDATE_STATE = 'RESET_UPDATE_STATE';

// Create Center Action Types
export const RECEIVED_CENTER_CONTACTS = 'RECEIVED_CENTER_CONTACTS';
export const FETCHING_CENTER_CONTACTS = 'FETCHING_CENTER_CONTACTS';
export const RESET_FETCHING_CENTER_CONTACTS = 'RESET_FETCHING_CENTER_CONTACTS';

export const CREATING_NEW_CENTER = 'CREATING_NEW_CENTER';
export const CREATED_NEW_CENTER = 'CREATED_NEW_CENTER';
export const CREATING_NEW_CENTER_ERROR = 'CREATING_NEW_CENTER_ERROR';
export const RESET_CENTER_CREATION_STATE = 'RESET_CENTER_CREATION_STATE';

// Update Center
export const UPDATING_CENTER = 'UPDATING_CENTER';
export const UPDATED_CENTER = 'UPDATED_CENTER';
export const UPDATING_CENTER_ERROR = 'UPDATING_CENTER_ERROR';
export const RESET_UPDATING_CENTER_STATE = 'RESET_UPDATING_CENTER_STATE';

// Create Event
export const CREATED_EVENT = 'CREATED_EVENT';
export const REQUEST_CREATE_EVENT = 'REQUEST_CREATE_EVENT';
export const CREATE_EVENT_ERROR = 'CREATE_EVENT_ERROR';
export const RESET_EVENT_STATE = 'RESET_EVENT_STATE';

// Update Event
export const REQUEST_UPDATE_EVENT = 'REQUEST_UPDATE_EVENT';
export const UPDATE_EVENT_ERROR = 'UPDATE_EVENT_ERROR';
export const UPDATED_EVENT = 'UPDATED_EVENT';
export const RESET_UPDATE_EVENT_STATE = 'RESET_UPDATE_EVENT_STATE';

// List User
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const RECEIVED_USER = 'RECEIVED_USER';

// List Centers
export const RECEIVED_CENTERS = 'RECEIVED_CENTERS';
export const FETCHING_CENTERS = 'FETCHING_CENTERS';
export const FETCHING_CENTERS_ERROR = 'FETCHING_CENTERS_ERROR';

export const RECEIVED_CENTER = 'RECEIVED_CENTER';
export const FETCHING_CENTER = 'FETCHING_CENTER';
export const FETCHING_CENTER_ERROR = 'FETCHING_CENTER_ERROR';
export const RESET_FETCHING_CENTER = 'RESET_FETCHING_CENTER';

export const FETCHING_ADMIN_CENTERS = 'FETCHING_ADMIN_CENTERS';
export const RECEIVED_ADMIN_CENTERS = 'RECEIVED_ADMIN_CENTERS';
export const FETCHING_ADMIN_CENTERS_ERROR = 'FETCHING_ADMIN_CENTERS_ERROR';

export const FETCHING_CENTERS_EVENTS = 'FETCHING_CENTERS_EVENTS';
export const RECEIVED_CENTERS_EVENTS = 'RECEIVED_CENTERS_EVENTS';
export const FETCHING_CENTERS_EVENTS_ERRORS = 'FETCHING_CENTERS_EVENTS_ERRORS';

// Get Events Actions
export const FETCHING_EVENTS = 'FETCHING_EVENTS';
export const RECEIVED_EVENTS = 'RECEIVED_EVENTS';
export const FETCHING_EVENTS_ERROR = 'EVENT_ERROR';

// Signin user
export const REQUEST_SIGNIN_USER = 'REQUEST_SIGNIN_USER';
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_ERROR = 'SIGNIN_USER_ERROR';

// Signout Actions Types
export const SIGNOUT_USER = 'SIGNOUT_USER';

export const SEARCHING_CENTER = 'SEARCHING_CENTER';
export const SEARCH_RESULT = 'SEARCH_RESULT';
