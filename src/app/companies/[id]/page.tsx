import Header from '@/app/components/header';

// type PageProps = {
//   params: { id: string };
// };

// export function generateStaticParams(): { id: string }[] {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }];
// }

export default function Page() {
  return (
    <>
      <Header>Companies</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
