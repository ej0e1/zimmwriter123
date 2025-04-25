import React from 'react';

export const Checkbox = ({ checked, onCheckedChange }: { checked: boolean; onCheckedChange: () => void }) => (
  <input type="checkbox" checked={checked} onChange={onCheckedChange} />
);