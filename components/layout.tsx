import Head from 'next/head';
import Image from 'next/image';
import portrait from 'public/images/portrait.jpg';

import { Text, Title } from '@mantine/core';

import LinkTo from './link-to/link-to';
import Nav from './nav/nav';

import styles from './layout.module.scss';

const name = '[Your Name]';
export const siteTitle = 'Adam Hill';

export function pageTitle(page: string): string {
  return `${page} | Adam Hill`;
}

interface Props {
  children: React.ReactNode;
  home?: boolean;
  page?: string;
}

export default function Layout(
  { children, home = false, page = 'Home' }: Props,
): JSX.Element {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Head>
          <meta
            content='Learn how to build a personal website using Next.js'
            name='description' />
          <meta
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            property='og:image' />
          <meta
            content={siteTitle}
            name='og:title' />
          <meta
            content='summary_large_image'
            name='twitter:card' />
          <title>{pageTitle(page)}</title>
        </Head>
        {/* TODO: Pull this out into the home page component */}
        <header className={styles.header}>
          <Image
            alt={name}
            className={styles.portrait}
            height={256}
            objectFit='cover'
            objectPosition='45% 50%'
            placeholder='blur'
            priority={true}
            src={portrait}
            width={256} />
          <div style={{
            flex: '1 1 100%',
            marginLeft: '32px',
          }}>
            <Title
              order={1}
              style={{
                fontSize: '56px',
              }}>
              Hi, I'm Adam!
            </Title>
            <Text size='xl'>
              Welcome to my website!
              The purpose of this site is for me to test things out & maybe show some things off.
              I'm a professional software engineer based in Virginia.
            </Text>
          </div>
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <LinkTo href='/'>← Back to home</LinkTo>
          </div>
        )}
      </div>
    </>
  );
}
