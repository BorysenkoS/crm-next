'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';

export default function CompaniesButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/companies', { scroll: false })}>
      Companies
    </Button>
  );
}
