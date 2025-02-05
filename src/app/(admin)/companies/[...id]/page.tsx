import Header from '@/app/components/header';

type PageProps = {
  params: Promise<{ id?: string[] }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id ? resolvedParams.id.join(', ') : 'All';

  return (
    <>
      <Header>Companies ({id})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
