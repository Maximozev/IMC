import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function SignUp() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="mt-24 rounded bg-gray-600/10 px-6 py-10 md:mt-0 md:max-w-sm md:px-14">
        <form>
          <h1 className="text-3xl font-semibold text-white">Sign-up</h1>
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
            <Input
              type="password"
              name="password"
              placeholder="Repeat Password"
              className="bg-[#333]"
            />
            <Button type="submit" className="w-full bg-[#9946B5] font-semibold">
              Sign Up
            </Button>
          </div>
        </form>
        <div className="text-gray-400 text-sm mt-2">
          Already have an account?{" "}
          <Link className="text-white hover:underline" href="/login">
            Log in
          </Link>
        </div>
        <div className="flex w-full justify-center items-center gap-x-3 mt-6">
          <Button variant="outline" size="icon">
            <FaGithub />
          </Button>
          <Button variant="outline" size="icon">
            <FaGoogle />
          </Button>
        </div>
      </div>
    </div>
  );
}
