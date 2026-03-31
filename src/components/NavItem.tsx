import Link from "next/link";
import React from "react";

type NavItemProps = {
    href: string;
    children: React.ReactNode;
};

export default function NavItem({ href, children }: NavItemProps) {
    return (
        <Link
            href={href}
            className="block text-center font-bold tracking-tight text-gray-900 dark:text-white hover:underline"
        >
            {children}
        </Link>
    );
}
