import { NavLink } from 'react-router';

import { House, Plus, Settings } from 'lucide-react';

import { sidebarItems } from '@/lib/dummy-data';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/ui/components/ui/sidebar';

import ThemeSwitch from '../theme-switch';
import { AddGames } from './add-games';

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="mt-10">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            className="hover:bg-sidebar hover:text-sidebar-foreground active:bg-sidebar active:text-sidebar-foreground cursor-default"
                            asChild
                        >
                            <div className="flex items-center gap-4">
                                <ThemeSwitch />
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            // className="hover:bg-sidebar hover:text-sidebar-foreground active:bg-sidebar active:text-sidebar-foreground cursor-default"
                            asChild
                        >
                            <NavLink to="/">
                                <House />
                                <span>Home</span>
                            </NavLink>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Games</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <NavLink to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <AddGames>
                            <SidebarMenuButton asChild variant={'outline'}>
                                <NavLink to="/settings">
                                    <Settings /> <span>Settings</span>
                                </NavLink>
                            </SidebarMenuButton>
                        </AddGames>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <AddGames>
                            <SidebarMenuButton className="bg-primary">
                                <Plus /> Add Game
                            </SidebarMenuButton>
                        </AddGames>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
