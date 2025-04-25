import React from 'react';

export const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea className="border rounded px-3 py-2 w-full" rows={5} {...props} />
);