import { combineReducers, configureStore, createAction, createReducer, PayloadAction, UnknownAction } from "@reduxjs/toolkit";

// Define actions
const getSession = createAction<void>('session/GET');
const updateSession = createAction<{ isAuthenticated: boolean }>('session/UPDATE');

// Define initial state
interface SessionState {
  isAuthenticated: boolean;
}

const initialSessionState: SessionState = {
  isAuthenticated: false
};

// Define session reducer
const sessionReducer = createReducer(initialSessionState, (builder) => {
  builder
    .addCase(getSession, (state) => state)
    .addCase(updateSession, (state, action: PayloadAction<{ isAuthenticated: boolean }>) => {
      return { ...state, isAuthenticated: action.payload.isAuthenticated };
    });
});

// Define actions
const loginSuccess = createAction<{ session: SessionState }>('login/SUCCESS');

// Define initial app state
export interface AppState {
  session: SessionState;
}

const initialState: AppState = {
  session: initialSessionState
};

// Define app reducer
const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginSuccess, (state, action: PayloadAction<{ session: SessionState }>) => {
      return { ...state, session: { ...action.payload.session } }
    })
});

// Combine reducers
const combinedReducers = combineReducers({
  session: sessionReducer
});

// Combine appReducer with combinedReducer
const rootReducer = (state: AppState | undefined, action: UnknownAction) => combinedReducers(appReducer(state, action), action);

// Configure store
export const store = configureStore({
  reducer: rootReducer,
  devTools: true
});

export const actions = { loginSuccess };

