import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ id?: string[] }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id ? resolvedParams.id.join(', ') : 'All';

  const parsedId = Number.parseInt(id);
  if (Number.isNaN(parsedId)) {
    notFound();
  }

  return (
    <>
      <Header>Companies ({id})</Header>
    </>
  );
}
