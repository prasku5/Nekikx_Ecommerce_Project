"use client";
import SignUp from "../pages/SignUp";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Import 'useRouter' from next/navigation
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const router = useRouter(); // Use useRouter from next/navigation

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const handleLoginClick = () => {
    router.push('/Login');
  };

  const handleSignUpClick = () => {
    router.push('/SignUp');
    // console.log('Sign Up')
  };

  return (
    <nav className="mx-6 flex items-center lg:space-x-6  space-x-4 ">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <button onClick={handleLoginClick} className="text-sm font-medium text-neutral-500 hover:text-black">
          Login
        </button>
        <button onClick={handleSignUpClick} className="text-sm font-medium text-neutral-500 hover:text-black">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default MainNav;
