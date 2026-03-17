"use client";

import { ReactNode } from "react";

interface DemoPanelProps {
  title: string;
  icon?: string;
  children: ReactNode;
  controls?: ReactNode;
}

export default function DemoPanel({ title, icon, children, controls }: DemoPanelProps) {
  return (
    <div className="demo-panel">
      <div className="demo-header">
        <div className="demo-dots">
          <div className="demo-dot" />
          <div className="demo-dot" />
          <div className="demo-dot" />
        </div>
        <div className="demo-title">
          {icon && <span>{icon}</span>}
          {title}
        </div>
        <div style={{ width: 52 }} />
      </div>
      <div className="demo-body">{children}</div>
      {controls && <div className="demo-controls">{controls}</div>}
    </div>
  );
}
