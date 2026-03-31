'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type ProjectCardProps = {
    title: string;
    href: string;
    description: string;
};

export default function ProjectCard({ title, href, description }: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="w-full">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="block text-center font-bold tracking-tight text-gray-900 dark:text-white hover:underline w-full items-center justify-center gap-2"
            >
                {title}
            </button>

            {isExpanded && (
                <div className="mt-3 p-4 bg-zinc-100 dark:bg-zinc-900 rounded text-sm text-gray-700 dark:text-gray-300">
                    <p>{description}</p>
                    <Link
                        href={href}
                        className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        Visit
                    </Link>
                </div>
            )}
        </div>
    );
}
