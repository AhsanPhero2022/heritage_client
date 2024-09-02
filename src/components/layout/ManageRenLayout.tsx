import { Layout, Menu, Button } from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Header from "../ManageRentals/Header";

import { GoSignOut } from "react-icons/go";
import { useAuth } from "@clerk/clerk-react";

const { Content, Footer, Sider } = Layout;

const items = [
  {
    key: 4,
    label: <NavLink to="/manage-rentals">User Profile</NavLink>,
  },
  {
    key: 3,
    label: <NavLink to="/manage-rentals/property-win">Win Property</NavLink>,
  },
  {
    key: 2,
    label: (
      <NavLink to="/manage-rentals/create-property">Add Properties</NavLink>
    ),
  },
  {
    key: 1,
    label: <NavLink to="/manage-rentals/all-property">All Property</NavLink>,
  },
  {
    key: 5,
    label: (
      <NavLink to="/manage-rentals/testimonials">Add Testimonials</NavLink>
    ),
  },
];

const ManageRenLayout = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/login");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <Layout className="min-h-screen">
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="mx-auto my-5 w-12">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <Menu
          theme="dark"
          className="px-2"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Content>
          <div
            style={{
              minHeight: 360,
            }}
          >
            <Header />
            <Outlet />
          </div>
        </Content>
        <Footer className="text-center">
          Charity website ©{new Date().getFullYear()} Created by Sharif
        </Footer>
        <div className="fixed bottom-4 left-4">
          <Button
            type="primary"
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-600"
          >
            Sign Out <GoSignOut className="font-bold text-xl" />
          </Button>
        </div>
      </Layout>
    </Layout>
  );
};

export default ManageRenLayout;
