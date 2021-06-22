import { AriaAttributes } from 'react';

interface Props extends AriaAttributes {
  color?: string;
  size?: string | number;
}

export default function MantineLogo({
  color = '#339AF0',
  size,
  ...others
}: Props): JSX.Element {
  const modifiedSize = typeof size === 'number'
    ? `${size.toString(10)}px`
    : size;

  return (
    <svg
      {...others}
      height={modifiedSize}
      viewBox='0 0 500 500'
      width={modifiedSize}
      xmlns='http://www.w3.org/2000/svg'>
      <g
        fill='none'
        fillRule='evenodd'>
        <rect
          fill={color}
          height='500'
          rx='250'
          width='500' />
        <g fill='#FFF'>
          <path
            d='M202.055 135.706c-6.26 8.373-4.494 20.208 3.944 26.42 29.122 21.45 45.824 54.253 45.824 90.005 0 35.752-16.702 68.559-45.824 90.005-8.436 6.215-10.206 18.043-3.944 26.42 6.26 8.378 18.173 10.13 26.611 3.916a153.835 153.835 0 0024.509-22.54h53.93c10.506 0 19.023-8.455 19.023-18.885 0-10.43-8.517-18.886-19.023-18.886h-29.79c8.196-18.594 12.553-38.923 12.553-60.03s-4.357-41.436-12.552-60.03h29.79c10.505 0 19.022-8.455 19.022-18.885 0-10.43-8.517-18.886-19.023-18.886h-53.93a153.835 153.835 0 00-24.509-22.54c-8.438-6.215-20.351-4.46-26.61 3.916z'
            fillRule='nonzero' />
          <path d='M171.992 246.492c0-15.572 12.624-28.195 28.196-28.195 15.572 0 28.195 12.623 28.195 28.195 0 15.572-12.623 28.196-28.195 28.196-15.572 0-28.196-12.624-28.196-28.196z' />
        </g>
      </g>
    </svg>
  );
}
