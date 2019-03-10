/*
 * action types
 */

export const UPDATE_LINKS_LIST = 'UPDATE_LINKS_LIST';

/*
 * action creators
 */

export function updateLinksList(linksList, linksPlaceholder) {
  return { type: UPDATE_LINKS_LIST, linksList, linksPlaceholder }
};
