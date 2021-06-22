import LinkTo, { Props as LinkToProps } from 'components/link-to/link-to';

export default function IconLink(
  {
    children,
    className,
    href,
    style,
  }: LinkToProps,
): JSX.Element {
  return (
    <LinkTo
      className={className}
      href={href}
      rel='nofollow noopener'
      style={{
        color: 'unset',
        display: 'block',
        width: '24px',
        height: '24px',
        ...style,
      }}
      target='_blank'>
      {children}
    </LinkTo>
  );
}
