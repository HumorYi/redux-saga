// 调用异步操作 call
// 状态更新 put
// 做监听 takeEvery

import {
  call,
  fork,
  take,
  // takeEvery,
  put
} from 'redux-saga/effects'
import { login, getMoreUserInfo } from '../service/login'
import { LOGIN_SAGA, LOGIN_SUCCESS, LOGIN_FAILURE, REQUEST } from './const'

// worker saga
function* loginHandle({ payload }) {
  yield put({
    type: REQUEST
  })

  try {
    // 调用异步操作
    let res = yield call(login, payload)
    let res1 = yield call(getMoreUserInfo, res)
    // 状态更新;
    yield put({
      type: LOGIN_SUCCESS,
      payload: { ...res1 }
    })
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      payload: err
    })
  }
}

// watcher saga

function* loginSaga() {
  yield takeEvery(LOGIN_SAGA, loginHandle)

  /* while (true) {
    console.log('listen') //sy-log
    const action = yield take(LOGIN_SAGA)
    // call 阻塞型调用 就generator函数在调用结束之前不能执行或者处理其他事情
    // fork非阻塞型调用 任务会在后台启动 调用者可以继续自己的流程 不用等待fork结束
    yield call(loginHandle, action)
    console.log('action', action)
  } */
}

// takeEvery 一直监听，原理是死循环 take
const takeEvery = (pattern, saga, ...args) =>
  fork(function* () {
    while (true) {
      // take 只监听一次
      const action = yield take(pattern)
      yield fork(saga, action, ...args)
    }
  })

export default loginSaga
