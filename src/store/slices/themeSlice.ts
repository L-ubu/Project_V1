import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  currentTheme: Theme;
  systemTheme: 'light' | 'dark';
  isDark: boolean;
}

const initialState: ThemeState = {
  currentTheme: 'system',
  systemTheme: 'light',
  isDark: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;
      state.isDark = action.payload === 'dark' || 
        (action.payload === 'system' && state.systemTheme === 'dark');
    },
    setSystemTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.systemTheme = action.payload;
      if (state.currentTheme === 'system') {
        state.isDark = action.payload === 'dark';
      }
    },
  },
});

export const { setTheme, setSystemTheme } = themeSlice.actions;

export default themeSlice.reducer;
