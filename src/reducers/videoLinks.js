import {
  UPDATE_LINKS_LIST,
} from '../actions/VideoLinks';

const defaultState = {
  linksList: [],
  linksPlaceholder: 'Enter Twitch URL',
};

export default function videoLinks(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_LINKS_LIST:
      return {...state,
          linksList: action.linksList,
          linksPlaceholder: action.linksPlaceholder || defaultState.linksPlaceholder,
        }
    default:
      return state
  }
};
