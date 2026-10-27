import { configureStore } from '@reduxjs/toolkit'
import langReducer from '../features/app/lang/langSlice.js'
import layoutReducer from '../features/app/layout/layoutSlice.js'
import uiReducer from '../features/app/ui/uiSlice.js'
import toastReducer from '../features/app/ui/toast/toastSlice.js'

export const store = configureStore({
  reducer: {
    lang: langReducer,
    layout: layoutReducer,
    ui: uiReducer,
    toast: toastReducer,
  },
})
