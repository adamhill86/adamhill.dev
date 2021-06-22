// TODO: Fix all these linting issues
/* eslint-disable func-names -- Deal with this later */
/* eslint-disable @typescript-eslint/typedef -- Deal with this later */
/* eslint-disable react/display-name -- Deal with this later */
/* eslint-disable @typescript-eslint/explicit-function-return-type -- Type defs come from next/dist */

import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { createGenerateId, JssProvider, SheetsRegistry } from 'react-jss';

interface InitialProps {
  styles: JSX.Element;
  html: string;
  head?: (JSX.Element | null)[];
}

// eslint-disable-next-line @typescript-eslint/naming-convention -- Custom Next Document component
export default class _Document extends Document {
  public static async getInitialProps(context: DocumentContext): Promise<InitialProps> {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = context.renderPage;

    context.renderPage = () => originalRenderPage({
      // eslint-disable-next-line react/require-optimization -- Not necessary here
      enhanceApp: App => function (props): JSX.Element {
        return (
          <JssProvider
            generateId={generateId}
            registry={registry}>
            <App {...props} />
          </JssProvider>
        );
      },
    });

    const initialProps = await Document.getInitialProps(context);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id='mantine-ssr-styles'>{registry.toString()}</style>
        </>
      ),
    };
  }

  public render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='/favicon.ico'
            rel='icon' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

/* eslint-enable func-names */
/* eslint-enable @typescript-eslint/typedef */
/* eslint-enable react/display-name */
/* eslint-enable @typescript-eslint/explicit-function-return-type */
