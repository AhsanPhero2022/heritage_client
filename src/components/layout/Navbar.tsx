import { useState } from "react";
import Container from "../ui/Container";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button } from "../ui/button";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "sonner";

const NavItems = [
  { id: "1", name: "Home", route: "/" },
  { id: "2", name: "Buy", route: "/buyScreen" },
  { id: "3", name: "Sell", route: "/details" },
  { id: "4", name: "All", route: "/allProperties" },
  { id: "5", name: "Sorted", route: "/sorted" },
  { id: "6", name: "About", route: "/about" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useUser();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("You have successfully signed out!");
    } catch (error) {
      toast.error("Error signing out. Please try again.");
    }
  };

  return (
    <div className="bg-[#ECF5FF] z-[999] border-b-2 border-secondary py-1 text-[#000000]">
      <Container>
        <header className=" mx-auto flex justify-between items-center z-50 ">
          <nav
            className={
              mobileMenuOpen
                ? "w-full lg:w-fit lg:static absolute top-[60px] left-0 lg:bg-none bg-[#ECF5FF] transition-all duration-500 lg:z-0 -z-50"
                : "w-full lg:w-fit lg:static absolute top-[-550px] left-0 transition-all duration-500 lg:z-0 -z-50"
            }
          >
            <div className="hidden lg:block">
              <ul className="flex justify-end items-center gap-2 lg:flex-row flex-col lg:py-0 py-10">
                {NavItems.map((navItem) => (
                  <Link key={navItem.id} to={navItem.route}>
                    <li className="lg:mb-0 mb-5 cursor-pointer text-sm group relative px-2 md:text-[18px] ">
                      {navItem.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            <div className="block lg:hidden">
              <ul className="flex justify-end items-center gap-2 lg:flex-row flex-col lg:py-0 py-10 bg-[#ECF5FF] border-b border-secondary">
                {NavItems.map((navItem) => (
                  <li
                    key={navItem.id}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="w-full lg:w-fit text-center py-2 cursor-pointer group text-sm relative md:text-[18px] "
                  >
                    <Link to={navItem.route}>{navItem.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="lg:hidden">
            {mobileMenuOpen ? (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:text-[18px] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            ) : (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:text-[18px] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            )}
          </div>

          <div className="lg:me-12 xl:me-12 md:me-8">
            <Link to="/" className="cursor-pointer">
              <img src={logo} className="w-[53px] h-20" alt="" />
            </Link>
          </div>

          <div className="">
            <ul className="flex justify-end items-center gap-2 flex-row py-0">
              <li className="cursor-pointer text-sm group relative px-2 md:text-[18px] ">
                <Link to="/manage-rentals">Manage Rentals</Link>
              </li>
              <Link to="/signIn">
                <li className="cursor-pointer text-sm font-semibold group relative px-2 md:text-[18px] ">
                  {user ? (
                    <Button onClick={handleSignOut} variant={"outline"}>
                      Sign Out
                    </Button>
                  ) : (
                    <Link to="/login">
                      <Button variant={"outline"}>Sign in</Button>
                    </Link>
                  )}
                </li>
              </Link>
            </ul>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default Navbar;
