'use client';
import React from 'react';
import Link from 'next/link';
import Image from "next/image";

type ProjectCardProps = {
    title: string;
    href: string;
    description: string;
    image: string;
};

export default function ProjectCard({ title, href, description, image }: ProjectCardProps) {
    return (
        <div className="p-6 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-gray-700 dark:text-gray-300 shadow-lg dark:shadow-xl border border-zinc-200 dark:border-zinc-800 flex flex-col h-full relative">
            <h3 className="font-bold tracking-tight text-gray-900 dark:text-white mb-3 text-lg">
                {title}
            </h3>
                <Image className="top-6 right-6" src={image} alt={"Tech-tilbud logo"} height={100} width={100}></Image>
            <p className="grow mb-4 leading-relaxed text-sm">{description}</p>
            <Link
                href={href}
                className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
                Visit
            </Link>
        </div>
    );
}
