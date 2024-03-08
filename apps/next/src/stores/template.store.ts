import { PayloadAction, createAction, createReducer } from '@reduxjs/toolkit';

// Define initial state
export interface TemplateState {
  [key: string]: string
}

// Define actions
export const updateTemplate = createAction<{ base: string }>(
  'template/UPDATE'
)

export const templateState: TemplateState = {}

// Define session reducer
export const templateReducer = createReducer(templateState, (builder) => {
  builder
    .addCase(
      updateTemplate,
      (state, action: PayloadAction<{ base: string }>) => {
        return { ...state, base: action.payload.base }
      }
    )
})
