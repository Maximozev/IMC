import GithubSignInButton from "@/app/components/GithubSignInButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";
import SignOutButton from "@/app/components/SignOutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="mt-24 rounded bg-gray-600/10 px-6 py-10 md:mt-0 md:max-w-sm md:px-14">
        <form method="post" action="/api/auth/signin">
          <h1 className="text-3xl font-semibold text-white">Log in</h1>
          <div className="space-y-4 mt-5">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-[#333]"
            />

            <Button type="submit" className="w-full bg-[#9946B5] font-semibold">
              Log in
            </Button>
          </div>
        </form>
        <div className="text-gray-400 text-sm mt-2">
          Don't have an account?{" "}
          <Link className="text-white hover:underline" href="/sign-up">
            Sign-up
          </Link>
        </div>
        <div className="flex w-full justify-center items-center gap-x-3 mt-6">
          <GithubSignInButton />
          <GoogleSignInButton />
        </div>
      </div>
    </div>
  );
}
