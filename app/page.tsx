import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Button>Hello</Button>
      <h1>{session?.user?.name}</h1>
      <img src={session?.user?.image} alt="Profile" />
    </div>
  );
}
