import {
  combineReducers,
  createAction,
  createReducer,
  PayloadAction,
} from '@reduxjs/toolkit'
import {
  sessionReducer,
  SessionState,
  sessionState,
  updateSession,
} from './session.store'
import {
  layoutReducer,
  LayoutState,
  layoutState
} from './layout.store'

// Define initial app state
export interface AppState {
  session: SessionState,
  layout: LayoutState
}

// Define actions
const loginSuccess = createAction<{ session: SessionState }>('login/SUCCESS')

export const logoutSuccess = createAction<{ session: SessionState }>(
  'logout/SUCCESS'
)

const initialState: AppState = {
  session: sessionState,
  layout: layoutState
}

// Define app reducer
export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(
      loginSuccess,
      (state, action: PayloadAction<{ session: SessionState }>) => {
        return { ...state, session: { ...action.payload.session } }
      }
    )
    .addCase(
      logoutSuccess,
      (state, action: PayloadAction<{ session: SessionState }>) => {
        return { ...state, session: { ...action.payload.session } }
      }
    )
});

// Combine reducers
export const combinedReducers = combineReducers({
  session: sessionReducer,
  layout: layoutReducer
})

// Actions
export const actions = {
  loginSuccess,
  logoutSuccess,
  updateSession,
}
