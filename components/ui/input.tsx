import React from 'react';

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className="border rounded px-3 py-2 w-full" {...props} />
);