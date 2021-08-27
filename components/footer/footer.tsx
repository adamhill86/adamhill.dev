import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';
import { SiNextDotJs, SiTypescript } from 'react-icons/si';

import {
  ActionIcon,
  Col,
  Divider,
  Grid,
  Text,
  THEME_ICON_SIZES,
  Tooltip,
  useMantineTheme,
} from '@mantine/core';

import IconLink from '../icon-link/icon-link';
import LinkTo from '../link-to/link-to';
import MantineLogo from '../mantine-logo/mantine-logo';

import styles from './footer.module.scss';

export default function Footer(): JSX.Element {
  const theme = useMantineTheme();
  return (
    <footer>
      <Grid
        align='center'
        justify='space-between'
        style={{
          margin: 0,
          padding: '0 20px',
        }}>
        <Col
          span={3}
          style={{
            display: 'flex',
          }}>
          <Text
            component='p'
            style={{
              display: 'flex',
              marginRight: theme.spacing.xs,
            }}>
            Built with:
          </Text>
          <Tooltip label='Next.js'>
            <IconLink href='https://nextjs.org/'>
              <SiNextDotJs
                aria-label='Next.js'
                size={THEME_ICON_SIZES.sm} />
            </IconLink>
          </Tooltip>
          <Divider
            color={theme.black}
            margins='xs'
            orientation='vertical' />
          <Tooltip label='TypeScript'>
            <IconLink href='https://www.typescriptlang.org/'>
              <SiTypescript
                aria-label='TypeScript'
                size={THEME_ICON_SIZES.sm} />
            </IconLink>
          </Tooltip>
          <Divider
            color={theme.black}
            margins='xs'
            orientation='vertical' />
          <Tooltip label='Mantine'>
            <IconLink href='https://mantine.dev/'>
              <MantineLogo
                aria-label='Mantine'
                color={theme.black}
                size={THEME_ICON_SIZES.sm} />
            </IconLink>
          </Tooltip>
        </Col>
        <Col
          span={2}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Tooltip label='GitHub'>
            <ActionIcon
              aria-label='GitHub'
              className={styles.icon}
              radius='xl'
              size='lg'
              style={{
                marginRight: '16px',
              }}
              variant='filled'>
              <LinkTo
                href='https://github.com/adamhill86'
                rel='nofollow noopener'
                style={{
                  color: 'unset',
                  display: 'block',
                  width: '30px',
                  height: '30px',
                }}
                target='_blank'>
                <RiGithubFill
                  aria-label='GitHub'
                  size='30px' />
              </LinkTo>
            </ActionIcon>
          </Tooltip>
          <Tooltip label='LinkedIn'>
            <ActionIcon
              aria-label='LinkedIn'
              className={styles.icon}
              radius='xl'
              size='lg'
              variant='filled'>
              <LinkTo
                href='https://www.linkedin.com/in/adamhill86/'
                rel='nofollow noopener'
                style={{
                  color: 'unset',
                  display: 'block',
                  width: '24px',
                  height: '24px',
                }}
                target='_blank'>
                <RiLinkedinFill
                  aria-label='LinkedIn'
                  size='24px' />
              </LinkTo>
            </ActionIcon>
          </Tooltip>
        </Col>
      </Grid>
    </footer>
  );
}
