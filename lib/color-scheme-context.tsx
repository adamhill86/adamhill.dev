import { createContext, Dispatch, SetStateAction } from 'react';

export type ColorScheme = 'dark' | 'light';

export interface ColorSchemeState {
  value: ColorScheme;
  onChange: Dispatch<SetStateAction<ColorScheme>>;
}

const ColorSchemeContext = createContext<ColorSchemeState>({
  value: 'light',
  // TODO: fix this
  onChange: () => true,
});

export default ColorSchemeContext;
