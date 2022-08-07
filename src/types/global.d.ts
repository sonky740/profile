import { ReactNode } from 'react';

declare global {
  declare module '*.jpg';
  declare module '*.png';
  declare module '*.woff';
  
  interface listType {
    title?: string;
    content: string;
  }

  interface DefaultFC {
    children: ReactNode;
  }
}
