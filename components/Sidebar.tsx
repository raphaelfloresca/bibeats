"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Box from './Box'

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        },
    ], [pathname]);

    return (
        <div className="flex h-full">
            <div className="md-flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
                <Box>Sidebar Navigation</Box>
            </div>
        </div>
    );
}

export default Sidebar
