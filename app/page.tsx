'use client';

import { useEffect } from 'react';
import { useStoreModal } from '@/app/hooks/useStoreModal';

export default function HomePage() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [onOpen, isOpen]);

  return (
    <div>
      <h1>Dashboard</h1>
      Page
    </div>
  );
}
