/* eslint-disable jsx-a11y/anchor-is-valid -- NextJS workaround, known issue */
import Link from 'next/link';

export interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  rel?: string;
  style?: React.CSSProperties;
  target?: string;
}

export default function LinkTo(
  {
    children,
    className,
    href,
    rel,
    style,
    target,
  }: Props,
): JSX.Element {
  return (
    <Link href={href}>
      <a
        className={className}
        rel={rel}
        style={style}
        target={target}>
        {children}
      </a>
    </Link>
  );
}

/* eslint-enable jsx-a11y/anchor-is-valid*/
