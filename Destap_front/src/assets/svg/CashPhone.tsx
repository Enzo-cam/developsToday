import React from "react";

const CashPhone = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="91"
      height="152"
      fill="none"
      viewBox="0 0 91 152"
      className={className}
    >
      <g filter="url(#filter0_d_231_1801)">
        <rect width="80" height="140" x="11" fill="#D9D9D9" rx="10"></rect>
        <rect
          width="76"
          height="136"
          x="13"
          y="2"
          stroke="#222325"
          strokeWidth="4"
          rx="8"
        ></rect>
      </g>
      <path
        fill="#222325"
        d="M34 5a4 4 0 014-4h27a4 4 0 014 4v1a4 4 0 01-4 4H38a4 4 0 01-4-4V5z"
      ></path>
      <rect width="45" height="3" x="29" y="126" fill="#222325" rx="1.5"></rect>
      <circle cx="51.5" cy="68.5" r="26.5" fill="#222325"></circle>
      <path
        fill="#D9D9D9"
        d="M41.328 57.306c-.967-1.321-.024-3.181 1.614-3.181h16.277c1.623 0 2.57 1.83 1.633 3.155l-7.223 10.21a2 2 0 000 2.31l7.223 10.212c.937 1.324-.01 3.155-1.633 3.155H42.942c-1.638 0-2.581-1.86-1.614-3.181l7.433-10.16a2 2 0 000-2.361l-7.433-10.159z"
      ></path>
      <path
        fill="#181A1B"
        d="M51.907 67.5a1 1 0 01-1.731 0l-5.63-9.75a1 1 0 01.866-1.5h11.259a1 1 0 01.866 1.5l-5.63 9.75zM50.175 70.5a1 1 0 011.733 0l5.629 9.75a1 1 0 01-.866 1.5H45.412a1 1 0 01-.866-1.5l5.63-9.75z"
      ></path>
      <path
        fill="#E59D30"
        d="M52.515 63.201c.326-.373.914.038.675.472l-1.462 2.662a.742.742 0 01-1.317-.03l-1.11-2.249-.552-1.334a1.364 1.364 0 01-.045-.918l.017-.055c.37-1.221 2.074-1.287 2.538-.099l.558 1.43c.113.29.493.356.698.121z"
      ></path>
      <path
        fill="#30E584"
        d="M46.377 79.006a1.412 1.412 0 012.098-.518l.16.116a1.578 1.578 0 001.84.013l.12-.084.524-.371a2 2 0 011.155-.367h1.908a.91.91 0 00.274-.042.91.91 0 011.117.522l.237.577a1.587 1.587 0 01-1.469 2.19h-6.697a1.412 1.412 0 01-1.267-2.036z"
      ></path>
      <defs>
        <filter
          id="filter0_d_231_1801"
          width="91"
          height="152"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="2"
            result="effect1_dropShadow_231_1801"
          ></feMorphology>
          <feOffset dx="-9" dy="10"></feOffset>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_231_1801"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_231_1801"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default CashPhone;