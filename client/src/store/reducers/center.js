import {
  FETCHING_CENTER_CONTACTS,
  RECEIVED_CENTER_CONTACTS,
  RECEIVED_CENTERS,
  FETCHING_CENTERS,
  FETCHING_CENTER,
  RECEIVED_CENTER,
  FETCHING_CENTERS_EVENTS,
  RECEIVED_CENTERS_EVENTS,
  FETCHING_ADMIN_CENTERS,
  RECEIVED_ADMIN_CENTERS,
  FETCHING_ADMIN_CENTERS_ERROR,
  CREATING_NEW_CENTER,
  CREATING_NEW_CENTER_ERROR,
  CREATED_NEW_CENTER,
  RESET_CREATE_NEW_CENTER,
} from '../actions/types';

const defaultCenter = {
  contacts: [],
  centers: [],
  eventCenter: [],
  center: {},
  events: {
    getCenterContact: null,
    getCenters: null,
    getCenter: null,
    getEvents: null,
    createCenter: null,
  },
};

export default (state = defaultCenter, action) => {
  switch (action.type) {
    case RESET_CREATE_NEW_CENTER:
    case CREATING_NEW_CENTER:
    case CREATING_NEW_CENTER_ERROR:
    case CREATED_NEW_CENTER:
      return { ...state, events: { ...state.events, createCenter: action.type } };
    case FETCHING_CENTERS:
      return { ...state, events: { ...state.events, getCenters: action.type } };
    case RECEIVED_CENTER_CONTACTS:
      return Object.assign({}, state, {
        ...state,
        contacts: action.contacts,
        events: { ...state.events, getCenterContact: action.type },
      });
    case RECEIVED_CENTERS:
      return Object.assign({}, state, { ...state, centers: action.centers });
    case FETCHING_CENTER:
      return { ...state, center: {}, events: { ...state.events, getCenter: action.type } };
    case RECEIVED_CENTER:
      return {
        ...state,
        center: action.center,
        events: { ...state.events, getCenter: action.type },
      };
    case FETCHING_CENTERS_EVENTS:
      return { ...state, events: { ...state.events, getEvents: action.type } };
    case RECEIVED_CENTERS_EVENTS:
      return {
        ...state,
        eventCenter: action.events,
        events: { ...state.events, getEvents: action.type },
      };
    case RECEIVED_ADMIN_CENTERS:
      return {
        ...state,
        centers: action.centers,
        events: { ...state.events, getCenters: action.type },
      };

    case FETCHING_ADMIN_CENTERS:
    case FETCHING_ADMIN_CENTERS_ERROR:
      return {
        ...state,
        events: { ...state.events, getCenters: action.type },
      };
    default:
      return state;
  }
};
