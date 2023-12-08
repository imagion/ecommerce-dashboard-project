'use client';

import { Modal } from '@/app/components/ui/modal';

export default function HomePage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Modal
        title='New title'
        description='New description'
        isOpen
        onClose={() => {}}>
        Children
      </Modal>
    </div>
  );
}
