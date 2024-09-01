import { Layout, Menu } from "antd";
import logo from "../../assets/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

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
];

const ManageRenLayout = () => {
  return (
    <Layout className="min-h-screen ">
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className=" mx-auto my-5 w-12">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <Menu
          theme="dark"
          className="px-2  "
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
            <Outlet />
          </div>
        </Content>
        <Footer className="text-center ">
          Charity website ©{new Date().getFullYear()} Created by Sharif
        </Footer>
      </Layout>
    </Layout>
  );
};

export default ManageRenLayout;
