import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Let's Chat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("Let's Chat-theme", theme);
    set({ theme });
  },
}));
