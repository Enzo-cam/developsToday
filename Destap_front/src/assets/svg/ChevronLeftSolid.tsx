import React from 'react';

const ChevronLeftSolid = ({ className }: { className: string }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.9142 18.5858C16.3047 18.1953 16.3047 17.5621 15.9142 17.1716L10.6213 11.8787L15.9142 6.58578C16.3047 6.19526 16.3047 5.56209 15.9142 5.17157L15.2071 4.46446C14.8166 4.07394 14.1834 4.07394 13.7929 4.46446L7.43934 10.818C6.85355 11.4038 6.85355 12.3535 7.43934 12.9393L13.7929 19.2929C14.1834 19.6834 14.8166 19.6834 15.2071 19.2929L15.9142 18.5858Z" fill="currentColor"/>
    </svg>
  );
};

export default ChevronLeftSolid;
