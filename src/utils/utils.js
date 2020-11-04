import { PROJECT_TYPE, TABS } from '../store/qto.constants';

export function isObjectEmpty(obj) {
  if (obj.size === 0) return true;
  return Object.keys(obj).length === 0;
}

export function getSelectedTabValue(tab) {
  switch (tab) {
    case TABS.CURRENT_PROJECTS:
      return PROJECT_TYPE.CURRENT;
    case TABS.FEATURED_PROJECTS:
      return PROJECT_TYPE.FEATURED;
    default:
      break;
  }
}
