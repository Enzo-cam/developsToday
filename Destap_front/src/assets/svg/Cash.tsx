import React from 'react';

const Cash = ({className}: {className: string}) => {
  return (
<svg className={className} viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.28571C1 2.60067 2.72176 0.999999 5.22727 0.999999L27.7727 1C30.2782 1 32 2.60067 32 4.28571L32 15.7143C32 17.3993 30.2782 19 27.7727 19L5.22727 19C2.72176 19 1 17.3993 1 15.7143L1 4.28571Z" stroke="currentColor" stroke-linecap="round"  stroke-linejoin="round"/>
<circle fill="currentColor" cx="11" cy="6" r="1"/>
<circle fill="currentColor" cx="11" cy="14" r="1"/>
<path d="M16.5 15.5C22 15.5 22 4 16.5 4" stroke="currentColor"/>
</svg>
  );
};

export default Cash;