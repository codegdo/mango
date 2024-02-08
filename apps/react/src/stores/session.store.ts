import { PayloadAction, createAction, createReducer } from '@reduxjs/toolkit'

// Define initial state
export interface SessionState {
  isAuthenticated: boolean
}

// Define actions
export const getSession = createAction<void>('session/GET')
export const updateSession = createAction<{ isAuthenticated: boolean }>(
  'session/UPDATE'
)

export const sessionState: SessionState = {
  isAuthenticated: false,
}

// Define session reducer
export const sessionReducer = createReducer(sessionState, (builder) => {
  builder
    .addCase(getSession, (state) => state)
    .addCase(
      updateSession,
      (state, action: PayloadAction<{ isAuthenticated: boolean }>) => {
        return { ...state, isAuthenticated: action.payload.isAuthenticated }
      }
    )
})
