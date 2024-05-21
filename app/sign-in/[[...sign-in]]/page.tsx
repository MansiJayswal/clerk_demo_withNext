import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex items-center justify-center flex-col gap-10'>
      <h1 className='text-2xl font-bold mt-10'>SignIn your Account</h1>
      <SignIn />
    </div>
  );
}