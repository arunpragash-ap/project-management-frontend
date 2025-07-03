
import { AppSidebar } from "@/components/layout/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "./app-header";

const AppLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-screen">
        <AppHeader />
        <div className="flex flex-1 flex-col gap-4 p-1.5 overflow-y-auto">
          <div className=" bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min m-2 p-1.5">
          {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AppLayout;