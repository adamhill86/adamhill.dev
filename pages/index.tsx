/* eslint-disable jsx-a11y/anchor-is-valid -- NextJS Workaround */
import { GetStaticProps } from 'next';
import Link from 'next/link';

import Date from '@components/date';
import Layout from '@components/layout';
import { getSortedPostsData } from '@lib/posts';

import utilStyles from '../styles/utils.module.scss';

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}): JSX.Element {
  return (
    <Layout
      home={true}
      page='Home'>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you'll be building a site like this in
          {' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>
          {'.)\r'}
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{'Blog'}</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li
              key={id}
              className={utilStyles.listItem}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

/* eslint-enable jsx-a11y/anchor-is-valid */
