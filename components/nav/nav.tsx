import LinkTo from 'components/link-to/link-to';
import { FiSun } from 'react-icons/fi';

import { Col, Grid, ThemeIcon } from '@mantine/core';

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
              <LinkTo href='projects'>
                Projects
              </LinkTo>
            </li>
            <li>
              <LinkTo href='/blog'>
                Blog
              </LinkTo>
            </li>
            <li>
              <LinkTo href='music'>
                Music
              </LinkTo>
            </li>
            <ThemeIcon
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* TODO: Use this as the toggle for light/dark mode */}
              <FiSun />
            </ThemeIcon>
          </ul>
        </Col>
      </Grid>
    </nav>
  );
}
