export const ThemeModes = {
  DARK: "dark",
  LIGHT: "light",
} as const;
export type ThemeMode = (typeof ThemeModes)[keyof typeof ThemeModes];