"use client";
import SignUp from "../pages/SignUp";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Import 'useRouter' from next/navigation
import { Category } from "@/types";
import { Button } from 'flowbite-react';

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const router = useRouter(); // Use useRouter from next/navigation

  const userData = JSON.parse(localStorage.getItem('userData'));

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

  const handleLogoutClick = () => {
    localStorage.removeItem('userData');
    window.location.reload(); // Reload the page to update the navbar
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

{userData ? (
    <div className="flex items-center space-x-4" style={{ paddingLeft: "400px" }} >
      <p className="text-sm font-medium text-neutral-500">
        User: {userData.email}
      </p>
        <div className="flex flex-wrap gap-2">
          <Button color="light" onClick={handleLogoutClick}>
            Logout
          </Button>
        </div>
      </div>
    ) : (
      <div className="flex items-center space-x-4" style={{ paddingLeft: "430px" }}>
        <p className="text-sm font-small text-neutral-500" style={{ width: "110px", paddingLeft: "1px" }}>
          <strong>Welcome Guest</strong>
        </p>
        <Button color="light" onClick={handleLoginClick} style={{ width: "100px" }}>
            Login
        </Button>
        <Button color="light" onClick={handleSignUpClick} style={{ width: "100px" }}>
          Sign Up
        </Button>
      </div>
  )}
</nav>
  );
};

export default MainNav;
