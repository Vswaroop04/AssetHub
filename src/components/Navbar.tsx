import Link from "next/link";
import { Icons } from "./Icons";

const Navbar = () => {
  return (
    <div className="sticky inset-x-0 h-16 top-0 z-50 bg-white">
          <header className="relative bg-white">
              <div className="flex items-center h-16">
                  <div className="ml-4 flex lg:ml-0">
                      <Link href={"/"}>
                          <Icons.logo className="h-10 w-10"/>
                      </Link>
                  </div>

                  <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch"> </div>
              </div>
      </header>
    </div>
  );
};

export default Navbar;
