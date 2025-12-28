import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { routes, notFoundPages, OlovaRouter } from '@/route.tree';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OlovaRouter routes={routes} notFoundPages={notFoundPages} />
  </StrictMode>
);
