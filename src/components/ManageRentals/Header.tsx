import { useUser } from "@clerk/clerk-react";
import { FaRegCircleUser } from "react-icons/fa6";
const Header = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <header className="bg-[#001529] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative">
            <button className="bg-color-1 text-n-1 px-4 py-2 rounded-md flex items-center">
              My Campaign
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <button className="text-n-1 mr-4">name</button>
          <button className="text-n-1 w-12 h-12">
            {user ? (
              <img src={user.imageUrl} className="rounded-full" />
            ) : (
              <FaRegCircleUser />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
