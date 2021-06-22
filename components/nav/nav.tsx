import LinkTo from 'components/link-to/link-to';
import ThemeToggle from 'components/theme-toggle/theme-toggle';

import { Col, Grid } from '@mantine/core';

export default function Nav(): JSX.Element {
  return (
    <nav>
      <Grid
        align='center'
        justify='space-between'
        style={{
          margin: 0,
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
