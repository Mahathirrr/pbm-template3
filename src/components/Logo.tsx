import React from "react";

export const Logo = ({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 5L26.5 8.75V16.25L20 20L13.5 16.25V8.75L20 5Z"
      fill="currentColor"
    />
    <path
      d="M28.5 12L35 15.75V23.25L28.5 27L22 23.25V15.75L28.5 12Z"
      fill="currentColor"
      fillOpacity="0.8"
    />
    <path
      d="M11.5 12L18 15.75V23.25L11.5 27L5 23.25V15.75L11.5 12Z"
      fill="currentColor"
      fillOpacity="0.8"
    />
    <path
      d="M20 24L26.5 27.75V35.25L20 39L13.5 35.25V27.75L20 24Z"
      fill="currentColor"
      fillOpacity="0.6"
    />
  </svg>
);
