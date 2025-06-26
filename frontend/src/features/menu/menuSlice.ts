import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
  activeId: string | null;
  openMenus: { [key: string]: boolean };
}

const initialState: MenuState = {
  activeId: null,
  openMenus: {},
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setActiveId(state, action: PayloadAction<string>) {
      state.activeId = action.payload;
    },
    toggleMenu(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.openMenus[id] = !state.openMenus[id];
    },
    closeAllMenus(state) {
      state.openMenus = {};
    },
  },
});

export const { setActiveId, toggleMenu, closeAllMenus } = menuSlice.actions;

export default menuSlice.reducer;
