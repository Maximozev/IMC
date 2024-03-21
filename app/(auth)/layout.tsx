import Image from "next/image";
import { ReactNode } from "react";
import Logo from "../../public/IMC_logo.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#0C0011_40%,#63e_100%)]" />
      <div>{children}</div>
      <div>
        <Image
          src={Logo}
          alt="Logo"
          width={200}
          height={200}
          priority
          className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
        />
      </div>
    </div>
  );
}
