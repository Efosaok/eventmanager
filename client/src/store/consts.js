import axios from 'axios';

axios.defaults.withCredentials = false;
export const API_PATH = 'http://localhost:5000/api/v2';

export const REQUEST_SIGNUP_USER = 'REQUEST_REGISTER_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const REQUEST_SIGNIN_USER = 'REQUEST_SIGNIN_USER';
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_ERROR = 'SIGNIN_ERROR';
export const SIGNOUT_USER = 'SIGNOUT_USER';

export const REQUEST_CREATE_CENTER = 'REQUEST_CREATE_CENTER';
export const CREATE_CENTER = 'CREATE_CENTER';

export const ACCOUNT_TYPE_GUEST = 0;
export const ACCOUNT_TYPE_SUPER_ADMIN = 1;
export const ACCOUNT_TYPE_ADMIN = 2;
export const ACCOUNT_TYPE_MEMBER = 3;