import ColorSchemeContext, { ColorScheme } from 'lib/color-scheme-context';
import { AppProps } from 'next/app';
import { useMemo, useState } from 'react';

import { MantineProvider } from '@mantine/core';

import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const value = useMemo(() => ({
    value: colorScheme,
    onChange: setColorScheme,
  }), [colorScheme, setColorScheme]);

  // TODO: Make whole app themeable
  return (
    <ColorSchemeContext.Provider value={value}>
      <MantineProvider theme={{
        black: 'rgba(0, 0, 0, 0.8)',
        colorScheme,
      }}>
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}
