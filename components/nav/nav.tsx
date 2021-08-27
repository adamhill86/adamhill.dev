import { createUseStyles } from 'react-jss';

import { Col, Grid, theming } from '@mantine/core';

import LinkTo from '../link-to/link-to';
import ThemeToggle from '../theme-toggle/theme-toggle';

interface Props {
  style?: React.CSSProperties;
}

export default function Nav({ style }: Props): JSX.Element {
  const useStyles = createUseStyles(
    theme => ({
      wrapper: {
        background: theme.white,
      },
    }),
    { theming },
  );
  const classes = useStyles();
  return (
    <nav
      className={classes.wrapper}
      style={style}>
      <Grid
        align='center'
        justify='space-between'
        style={{
          margin: 0,
          padding: '0 20px',
        }}>
        <Col span={2}>
          <LinkTo href='/'>
            Adam Hill
          </LinkTo>
        </Col>
        <Col span={4}>
          <ul style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <li>
              <LinkTo href='/projects'>
                Projects
              </LinkTo>
            </li>
            <li>
              <LinkTo href='/blog'>
                Blog
              </LinkTo>
            </li>
            <li>
              <LinkTo href='/music'>
                Music
              </LinkTo>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </Col>
      </Grid>
    </nav>
  );
}
