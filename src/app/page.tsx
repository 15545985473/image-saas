import Image from "next/image";
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from "@/components/Textarea";
import { db } from '@/server/db/db';

export default async function Home() {
  const users = await db.query?.Users?.findMany();

  console.log(users, db.query, '======slp')

  return <div className="h-screen flex justify-center items-center">
    <form className="w-full max-w-xl flex flex-col gap-4">
      <h1 className="text-center text-2xl font-bold">Create App</h1>
      <Input name='name' placeholder="App Name" />
      <Textarea name="description" placeholder="Description" />
      <Button type="submit">Submit</Button>
    </form>
    <div>11{users?.map(item => <p key={item.name}>{item.name}</p>)}</div>
  </div>
}
