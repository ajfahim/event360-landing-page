import { CalendarDays, LayoutDashboard, ListCollapse } from "lucide-react";
import { Outlet } from "react-router-dom";
import Sidebar, { SidebarItem } from "../shared/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard />}
          text="Dashboard"
          link="dashboard"
        />
        <SidebarItem
          icon={<ListCollapse />}
          text="Event Items"
          link="/admin/event-items"
        />
        <SidebarItem
          icon={<CalendarDays />}
          text="Recent Events"
          link="/admin/recent-events"
        />
      </Sidebar>
      <div className="ml-3 mt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
