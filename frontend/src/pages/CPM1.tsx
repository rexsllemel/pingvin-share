'use client';
import { useEffect } from 'react';

export function CPM1() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://groleegni.net/401/8671199';
    script.async = true;
    script.onload = () => console.log('Script loaded successfully');
    script.onerror = (e) => console.error('Failed to load script:', e);

    (document.body || document.documentElement).appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 mt-4 flex items-center justify-center bg-white">
      {/* Additional UI or elements can go here */}
    </div>
  );
}