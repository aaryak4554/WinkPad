"use client";
import { useRouter } from "next/navigation";
import { useScrolling } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode";
import { Button } from "@/components/ui/button";
import { userAuth } from "@/components/providers/Auth_context";
// import { userAuth } from "@/app/_Context/Auth_context";

export const Navbar = () => {
  const scroll = useScrolling();
  const router = useRouter();
  const { user, logout } = userAuth();

  const handleLogout = async (e: any) => {
    await logout();
    router.push("/");
  };

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scroll && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {user ? (
          <Button value="sign-in" onClick={handleLogout}>
            Log-out
          </Button>
        ) : (
          <>
            <Button
              variant="ghost"
              value="sign-in"
              onClick={() => {
                router.push("/signUp");
              }}
            >
              Sign-In
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                router.push("/aboutUs");
              }}
            >
              About-Us
            </Button>
          </>
        )}

        <ModeToggle />
      </div>
    </div>
  );
};
