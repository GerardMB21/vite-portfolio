import { configureStore } from '@reduxjs/toolkit';
import finish from './slices/finish.slice';
import icons from './slices/icons.slice';
import elements from './slices/elements.slice';
import selected from './slices/selected.slice';
import toggle from './slices/toggle.slice';

export default configureStore({
  reducer: {
    finish,
    icons,
    elements,
    selected,
    toggle,
	},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});