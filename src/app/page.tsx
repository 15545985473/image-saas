'use client'
import { useState } from 'react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from "@/components/Textarea";
import { trpcClientReact } from '@/utils/api';

export default function Home() {  
  const res = trpcClientReact.hello.useQuery();
  console.log(res, trpcClientReact.hello, Object.keys(trpcClientReact.hello),'=======')

  return <div className="h-screen flex justify-center items-center">
    <form className="w-full max-w-xl flex flex-col gap-4">
      <h1 className="text-center text-2xl font-bold">Create App</h1>
      <Input name='name' placeholder="App Name" />
      <Textarea name="description" placeholder="Description" />
      <Button type="submit">Submit</Button>
    </form>
    {res.data?.name}
  </div>
}
