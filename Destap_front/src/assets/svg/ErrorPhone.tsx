import React from 'react';

const ErrorPhone = ({ className }) => (
  <svg className={className} width="91" height="152" viewBox="0 0 91 152" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_51_106)">
      <rect x="11" width="80" height="140" rx="10" fill="#D9D9D9" />
      <rect x="13" y="2" width="76" height="136" rx="8" stroke="#222325" stroke-width="4" />
    </g>
    <path d="M34 5C34 2.79086 35.7909 1 38 1H65C67.2091 1 69 2.79086 69 5V6C69 8.20914 67.2091 10 65 10H38C35.7909 10 34 8.20914 34 6V5Z" fill="#222325" />
    <rect x="29" y="126" width="45" height="3" rx="1.5" fill="#222325" />
    <circle cx="51.5" cy="68.5" r="26.5" fill="#222325" />
    <path d="M52 52L66.7224 77.5H37.2776L52 52Z" fill="#8C1D18" stroke="#8C1D18" stroke-width="4" />
    <path d="M50.0364 61.9906C49.9557 60.9351 50.7766 60.0277 51.8349 60.0026C52.9316 59.9765 53.8094 60.9062 53.7204 61.9996L53.2111 68.2617C53.155 68.9514 52.5873 69.4874 51.8956 69.5038C51.1767 69.5209 50.5702 68.9722 50.5154 68.2552L50.0364 61.9906Z" fill="white" />
    <circle cx="52" cy="73" r="2" fill="white" />
    <defs>
      <filter id="filter0_d_51_106" x="0" y="0" width="91" height="152" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_51_106" />
        <feOffset dx="-9" dy="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_106" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_106" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default ErrorPhone;