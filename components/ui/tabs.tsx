import React, { useState } from 'react';

export const Tabs = ({ defaultValue, children }: { defaultValue: string; children: React.ReactNode }) => {
  const [active, setActive] = useState(defaultValue);
  return React.Children.map(children, (child: any) => {
    if (child.type.displayName === 'TabsList') {
      return React.cloneElement(child, { active, setActive });
    }
    if (child.type.displayName === 'TabsContent' && child.props.value === active) {
      return child;
    }
    return null;
  });
};

export const TabsList = ({ children, active, setActive }: any) => (
  <div className="flex gap-2">{React.Children.map(children, child =>
    React.cloneElement(child, { active, setActive }))}</div>
);
TabsList.displayName = 'TabsList';

export const TabsTrigger = ({ value, children, active, setActive }: any) => (
  <button
    onClick={() => setActive(value)}
    className={`px-3 py-1 rounded ${active === value ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
  >
    {children}
  </button>
);
TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4">{children}</div>
);
TabsContent.displayName = 'TabsContent';