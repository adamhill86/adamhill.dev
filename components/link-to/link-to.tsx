/* eslint-disable jsx-a11y/anchor-is-valid -- NextJS workaround, known issue */
import Link from 'next/link';

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function LinkTo({ href, children, className = '' }: Props): JSX.Element {
  return (
    <Link href={href}>
      <a className={className}>
        {children}
      </a>
    </Link>
  );
}

/* eslint-enable jsx-a11y/anchor-is-valid*/
