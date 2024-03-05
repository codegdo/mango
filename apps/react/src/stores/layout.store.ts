import { PayloadAction, createAction, createReducer } from '@reduxjs/toolkit';

// Define initial state
export interface LayoutState {
  [key: string]: string
}

// Define actions
export const updateLayout = createAction<{ base: string }>(
  'layout/UPDATE'
)

export const layoutState: LayoutState = {}

// Define session reducer
export const layoutReducer = createReducer(layoutState, (builder) => {
  builder
    .addCase(
      updateLayout,
      (state, action: PayloadAction<{ base: string }>) => {
        return { ...state, base: action.payload.base }
      }
    )
})
