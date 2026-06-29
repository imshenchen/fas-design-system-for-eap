/**
 * DiaAutoLogo — FAS Design Kit
 *
 * DIA Auto 產品標誌（彩色 burst），來源：`img/DIAAuto_logo.svg`。
 * 以 inline SVG 提供，為 SideMenu `corp` 樣式 footer 的預設產品 Logo。
 * 內含 <linearGradient> / <clipPath>，其 id 以 useId() 去重，避免多實例衝突。
 */
import React, { useId } from 'react';

export interface DiaAutoLogoProps extends React.SVGProps<SVGSVGElement> {
  /** 無障礙標籤，預設 "DIA Auto" */
  title?: string;
}

export const DiaAutoLogo: React.FC<DiaAutoLogoProps> = ({
  title = 'DIA Auto',
  width = 44,
  height = 44,
  ...rest
}) => {
  const uid = useId().replace(/:/g, '');
  const clip = `dia-clip-${uid}`;
  const g0 = `dia-g0-${uid}`;
  const g1 = `dia-g1-${uid}`;
  const g2 = `dia-g2-${uid}`;
  const g3 = `dia-g3-${uid}`;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      {...rest}
    >
      <g clipPath={`url(#${clip})`}>
        <path d="M9.19999 18L22 21.8L34.8 18V26L22 22.2L9.19999 26V18Z" fill={`url(#${g0})`} />
        <path d="M6.40002 30.2002L21.8586 21.8588L30.2 6.40019L37.8 13.6002L22.1414 22.1416L13.8 37.6002L6.40002 30.2002Z" fill={`url(#${g1})`} />
        <path d="M13.8 6.40039L22.1414 21.859L37.6 30.2004L30.2 37.6004L21.8586 22.1418L6.39998 13.8004L13.8 6.40039Z" fill={`url(#${g2})`} />
        <path d="M26 15.2002L22.2 22.0002L26 28.8002L18 28.8002L21.8 22.0002L18 15.2002L26 15.2002Z" fill={`url(#${g3})`} />
        <rect x="2" y="18" width="8" height="8" rx="1" fill="#00ADEF" />
        <rect x="6.00002" y="6" width="8" height="8" rx="1" fill="#B9EB5F" />
        <rect x="18" y="8" width="8" height="8" rx="1" fill="#64D7D7" />
        <rect x="18" y="28" width="8" height="8" rx="1" fill="#64D7D7" />
        <rect x="6.00002" y="30" width="8" height="8" rx="1" fill="#B9EB5F" />
        <rect x="34" y="18" width="8" height="8" rx="1" fill="#00ADEF" />
        <rect x="30" y="30" width="8" height="8" rx="1" fill="#B9EB5F" />
        <rect x="30" y="6" width="8" height="8" rx="1" fill="#B9EB5F" />
      </g>
      <defs>
        <linearGradient id={g0} x1="9.19999" y1="22" x2="34.8" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00ADEF" stopOpacity="0.6" />
          <stop offset="0.5" stopColor="#00ADEF" stopOpacity="0" />
          <stop offset="1" stopColor="#00ADEF" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id={g1} x1="12.9491" y1="31.0512" x2="31.051" y2="12.9492" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B9EB5F" stopOpacity="0.6" />
          <stop offset="0.5" stopColor="#B9EB5F" stopOpacity="0" />
          <stop offset="1" stopColor="#B9EB5F" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id={g2} x1="12.949" y1="12.9494" x2="31.0509" y2="31.0514" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B9EB5F" stopOpacity="0.6" />
          <stop offset="0.5" stopColor="#B9EB5F" stopOpacity="0" />
          <stop offset="1" stopColor="#B9EB5F" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id={g3} x1="22" y1="15.2002" x2="22" y2="28.8002" gradientUnits="userSpaceOnUse">
          <stop stopColor="#64D7D7" stopOpacity="0.6" />
          <stop offset="0.5" stopColor="#64D7D7" stopOpacity="0" />
          <stop offset="1" stopColor="#64D7D7" stopOpacity="0.6" />
        </linearGradient>
        <clipPath id={clip}>
          <rect width="40" height="40" fill="white" transform="translate(2 2)" />
        </clipPath>
      </defs>
    </svg>
  );
};
