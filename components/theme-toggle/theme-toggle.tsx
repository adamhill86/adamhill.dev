import ColorSchemeContext, { ColorScheme } from 'lib/color-scheme-context';
import { SetStateAction, useContext } from 'react';
import { FiSun } from 'react-icons/fi';
import { RiMoonClearLine } from 'react-icons/ri';

import { ActionIcon } from '@mantine/core';
import { Nullary, Unary } from '@perfective/common/function';

export default function ThemeToggle(): JSX.Element {
  const { value, onChange } = useContext(ColorSchemeContext);
  const dark = value === 'dark';

  return (
    <ActionIcon
      color={dark ? 'yellow' : 'blue'}
      title='Toggle color scheme'
      variant='outline'
      onClick={handleColorSchemeChange(dark, onChange)}>
      {dark
        ? (
          <FiSun />
        )
        : (
          <RiMoonClearLine />
        )}
    </ActionIcon>
  );
}

function handleColorSchemeChange(
  usingDarkTheme: boolean,
  onChange: Unary<SetStateAction<ColorScheme>, void>,
): Nullary<void> {
  return (): void => onChange(usingDarkTheme ? 'light' : 'dark');
}
