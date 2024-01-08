import Link from "next/link";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  const user = null;
  return (
    <div className="sticky inset-x-0 h-16 top-0 z-50 bg-white">
      <header className="relative bg-white">
        <div className="flex items-center h-16">
          <div className="ml-4 flex lg:ml-10">
            <Link href={"/"}>
              <Icons.logo className="h-10 w-10" />
            </Link>
          </div>

          <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
            <NavItems />
          </div>

          <div className="ml-auto flex items-center">
            <div className="hidden lg:flex lg:justify-end lg:items-center lg:space-x-6">
              {user ? null : (
                <Link
                  href={"/sign-in"}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  {" "}
                  Sign In{" "}
                </Link>
              )}

              {user ? null : (
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
              )}

              {user ? (
                <p></p>
              ) : (
                <Link
                  href={"/sign-up"}
                  className={buttonVariants({ variant: "ghost" })}
                  aria-hidden="true"
                >
                  Create Account
                </Link>
              )}

              {user ? null : (
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
              )}

              {user ? null : (
                <div className="flex lg:ml-6" aria-hidden="true">
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
