import React from 'react';
import { Company, getCompany } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import Header from '@/app/components/header';

export interface PageProps {
  params: { id: string };
}

// This function is asynchronous so params can be awaited
export default async function Page({ params }: PageProps) {
  // Wait for params to resolve before using its value
  const { id } = await params; // Await the params

  const queryClient = getQueryClient();

  // Fetch data for the company using the id
  await queryClient.prefetchQuery({
    queryKey: ['companies', id],
    queryFn: () => getCompany(id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  // Retrieve company data from the cache
  const company = queryClient.getQueryData(['companies', id]) as Company;

  return <Header>{company?.title ?? 'Company not found'}</Header>;
}
