import React from "react";

function EditPen({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      fill="none"
      viewBox="0 0 13 13"
      className={className}
    >
      <path
        fill="currentColor"
        d="M9.794.177a2.319 2.319 0 012.527 3.782l-.337.336-3.28-3.279.337-.337a2.32 2.32 0 01.753-.502zM7.785 1.935l-6.71 6.71a.65.65 0 00-.167.289l-.885 3.245a.65.65 0 00.798.798l3.245-.885a.65.65 0 00.289-.168l6.71-6.71-3.28-3.279z"
      ></path>
    </svg>
  );
}

export default EditPen;
