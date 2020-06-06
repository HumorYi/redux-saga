import { LOGIN_SAGA } from './const'

export const login = payload => ({ type: LOGIN_SAGA, payload })

// import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_SAGA } from './const'
// import LoginService from '../service/login'

// export const login = payload => ({type: LOGIN_SUCCESS, payload});

// login
// getMoreUserInfo

// export function login(userInfo) {
//   return async function(dispatch) {
//     dispatch({type: REQUEST});
//     const res = await loginPromise(dispatch, userInfo);
//     res && getMoreUserInfo(dispatch, res);
//   };
// }

// export const login = userInfo => dispatch => {
//   dispatch({type: REQUEST});
//   LoginService.login(userInfo).then(
//     res => {
//       // dispatch({type: LOGIN_SUCCESS, payload: {...res}});
//       getMoreUserInfo(dispatch, res);
//     },
//     err => {
//       dispatch({type: LOGIN_FAILURE, payload: err});
//     }
//   );
// };

/* export const loginPromise = (dispatch, userInfo) => {
  return LoginService.login(userInfo).then(
    res => res,
    err => dispatch({ type: LOGIN_FAILURE, payload: err })
  )
}

export const getMoreUserInfo = (dispatch, userInfo) => {
  return LoginService.getMoreUserInfo(userInfo).then(
    res => {
      dispatch({ type: LOGIN_SUCCESS, payload: { ...res } })
      return res
    },
    err => {
      dispatch({ type: LOGIN_FAILURE, payload: err })
    }
  )
} */

// 同步的方式处理异步请求
