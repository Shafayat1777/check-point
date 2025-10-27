import { Outlet } from 'react-router';

import { AppSidebar } from '@/ui/components/sidebar/sidebar';
import { SidebarProvider, SidebarTrigger } from '@/ui/components/ui/sidebar';

import BreadcrumbTabs from '../components/breadcrumb';

const Index = () => {

    return (
        <SidebarProvider>
            <div className="flex flex-1 pt-10">
                <AppSidebar />
                <SidebarTrigger />
                <div className="w-full">
                    <BreadcrumbTabs className="mt-10" />
                    <Outlet />
                </div>
            </div>
        </SidebarProvider>
    );
};

export default Index;
