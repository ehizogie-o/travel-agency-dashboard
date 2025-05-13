import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      <aside>Mobile Sidebar</aside>
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
