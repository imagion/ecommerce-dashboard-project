'use client';

import { useEffect, useState } from 'react';
import { StoreModal } from '@/app/components/modals/StoreModal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <StoreModal />;
};
