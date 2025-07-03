import { CalendarDemo } from "@/components/calendar-demo";
import AppLayout from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <AppLayout>
      Welcome to Project Management
      <div className="space-y-3">
        <CalendarDemo/>
        <Button className="">Hello welcome</Button>
      </div>
    </AppLayout>
  );
}
