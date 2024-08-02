import React from "react";

function EditPenLine({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="28"
      fill="none"
      viewBox="0 0 27 28"
      className={className}
    >
      <path
        fill="currentColor"
        d="M23.203 22.86H3.797c-.467 0-.844.39-.844.874v.985c0 .12.095.218.211.218h20.672a.216.216 0 00.21-.218v-.985c0-.484-.376-.875-.843-.875zM6.795 20.562c.053 0 .105-.006.158-.014l4.435-.807a.255.255 0 00.14-.076L22.705 8.075a.275.275 0 00.077-.193.282.282 0 00-.077-.193l-4.382-4.547a.256.256 0 00-.188-.08.256.256 0 00-.187.08L6.771 14.732a.28.28 0 00-.074.146l-.778 4.599a.949.949 0 00.248.815c.174.175.393.27.628.27z"
      ></path>
    </svg>
  );
}

export default EditPenLine;
