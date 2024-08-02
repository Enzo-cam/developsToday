import React from 'react';

const SuccessPhone = ({ className }: { className: string }) => {
  return (
<svg className={className} width="91" height="152" viewBox="0 0 91 152" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_51_165)">
<rect x="11" width="80" height="140" rx="10" fill="#D9D9D9"/>
<rect x="13" y="2" width="76" height="136" rx="8" stroke="#222325" stroke-width="4"/>
</g>
<path d="M34 5C34 2.79086 35.7909 1 38 1H65C67.2091 1 69 2.79086 69 5V6C69 8.20914 67.2091 10 65 10H38C35.7909 10 34 8.20914 34 6V5Z" fill="#222325"/>
<rect x="29" y="126" width="45" height="3" rx="1.5" fill="#222325"/>
<circle cx="51.5" cy="68.5" r="26.5" fill="#222325"/>
<path d="M42 69.7143L48.1318 76L61 64" stroke="#30E584" stroke-width="5" stroke-linecap="round"/>
<defs>
<filter id="filter0_d_51_165" x="0" y="0" width="91" height="152" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_51_165"/>
<feOffset dx="-9" dy="10"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_165"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_165" result="shape"/>
</filter>
</defs>
</svg>
  );
};

export default SuccessPhone;
