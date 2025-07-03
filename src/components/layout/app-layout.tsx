
import { AppSidebar } from "@/components/layout/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "./header/app-header";
import { Card } from "../ui/card";

const AppLayout = ({ children }: {children:React.ReactNode}) => {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <SidebarInset className="h-screen">
        <AppHeader />
        <div className="flex flex-1 flex-col gap-4 p-1.5 overflow-y-auto">
          <Card className="  min-h-[100vh] flex-1 rounded-xl md:min-h-min m-2 p-1.5">
          {children}
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AppLayout;