/// <reference types="vite/client" />

declare module '*.svg' {
  import * as React from 'react';

  const content: string;
  export default content;
}
