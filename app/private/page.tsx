import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { logout } from "@/actions/auth";
import { Button } from "@/components/ui/button";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <section className="text-center">
      <h1 className="text-3xl  py-5">Hello {data.user.email}</h1>
      <form className="space-x-3">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
        <Button formAction={logout} variant={"destructive"}>
          Logout
        </Button>
      </form>
    </section>
  );
}
