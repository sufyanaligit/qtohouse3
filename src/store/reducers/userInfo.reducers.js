import { fromJS } from 'immutable';
import ACTIONS from '../qto.constants';

export default (
  state = fromJS({ userInfo: {}, isLoginModal: false }),
  action
) => {
  switch (action.type) {
    case ACTIONS.SET_LOGIN_STATE_BEGIN: {
      return state
        .set('isLoginModal', action.payload)
        .setIn(['userInfo', 'error'], false);
    }
    case ACTIONS.VALIDATE_LOGIN.PENDING: {
      return state.setIn(['userInfo', 'loading'], true);
    }
    case ACTIONS.VALIDATE_LOGIN.SUCCESS: {
      const { data } = action;
      localStorage.setItem('QTOUserId', data.LoginID);
      return state
        .setIn(['userInfo', 'loading'], false)
        .setIn(
          ['userInfo', 'isLoggedIn'],
          data.MessageCode === 1 ? true : false
        )
        .setIn(['userInfo', 'isRoleAdmin'], data.AdminInd)
        .setIn(['userInfo', 'userName'], data.LoginID)
        .setIn(['userInfo', 'error'], false)
        .set('isLoginModal', false);
    }
    case ACTIONS.VALIDATE_LOGIN.ERROR: {
      const { error } = action;
      localStorage.setItem('QTOUserToken', '');
      return state
        .setIn(['userInfo', 'loading'], false)
        .setIn(['userInfo', 'error'], true)
        .setIn(
          ['userInfo', 'isLoggedIn'],
          error.MessageCode === 1 ? true : false
        )
        .setIn(['applicationErrors', 'error'], true)
        .setIn(['applicationErrors', 'message'], error.message);
    }
    case ACTIONS.VALIDATE_USER_SESSION.PENDING: {
      return state.setIn(['userInfo', 'loading'], true);
    }
    case ACTIONS.VALIDATE_USER_SESSION.SUCCESS: {
      const { data } = action;
      return state
        .setIn(['userInfo', 'loading'], false)
        .setIn(['userInfo', 'isLoggedIn'], true)
        .setIn(['userInfo', 'isRoleAdmin'], data.ADMN_IND)
        .setIn(['userInfo', 'userName'], data.LOGN_ID)
        .setIn(['userInfo', 'error'], false)
        .setIn(['userInfo', 'loggedInUserDetails'], data)
        .set('isLoginModal', false);
    }
    case ACTIONS.VALIDATE_USER_SESSION.ERROR: {
      return state
        .setIn(['userInfo', 'loading'], false)
        .setIn(['userInfo', 'isLoggedIn'], false)
        .setIn(['userInfo', 'error'], true)
        .set('isLoginModal', false);
    }
    case ACTIONS.CLEAR_USER_SESSION: {
      localStorage.removeItem('QTOUserId');
      return state.set('userInfo', {});
    }
    default:
      return state;
  }
};
