// src/features/layout/layoutSlice.ts
import { createSlice } from "@reduxjs/toolkit";

type Theme = "light" | "dark" | "system";

interface LayoutState {
  theme: Theme;
  sidebarOpen: boolean;
}

const initialState: LayoutState = {
  theme: "light",
  sidebarOpen: true,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.theme.toString());
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setInitialTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleThemeMode, setInitialTheme } = layoutSlice.actions;
export default layoutSlice.reducer;
