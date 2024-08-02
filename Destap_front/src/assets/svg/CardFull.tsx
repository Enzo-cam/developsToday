import React from "react";

function CardFull({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="22"
      fill="none"
      viewBox="0 0 33 22"
      className={className}
    >
      <rect width="33" height="22" fill="#818181" rx="3"></rect>
      <path fill="#222325" d="M0 3H33V8H0z"></path>
      <rect width="6" height="4" x="4" y="11" fill="#B5B5B5" rx="2"></rect>
    </svg>
  );
}

export default CardFull;