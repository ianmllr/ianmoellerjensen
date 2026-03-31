'use client';
type AsciiNameProps = {
    text: string
}

export default function AsciiArt({ text }: AsciiNameProps) {
    return (
        <pre className="whitespace-pre text-center font-mono text-[8px] leading-none text-gray-900 dark:text-white bg-zinc-50 dark:bg-zinc-900">
            {text}
    </pre>
    );
}
