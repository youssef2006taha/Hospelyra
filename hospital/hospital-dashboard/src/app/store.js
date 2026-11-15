import { configureStore } from '@reduxjs/toolkit';
import langReducer from '../features/app/lang/langSlice.js';
import uiReducer from '../features/app/ui/uiSlice.js';
import toastReducer from '../features/app/ui/toast/toastSlice.js';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    lang: langReducer,
    toast: toastReducer,
  },
});