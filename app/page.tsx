import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen gap-4">
     
     
      <Button asChild size={"lg"}>
        <Link href="/login">Login</Link>
      </Button>
      or
      <Button variant={"outline"} asChild size={"lg"}>
        <Link href="/signup">SignUp</Link>
      </Button>
    </div>
  );
}
