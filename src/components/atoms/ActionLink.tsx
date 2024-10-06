import Link from "next/link";

interface ActionLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export const ActionLink = ({ href, children, className }: ActionLinkProps) => (
    <Link href={href} className={`text-sm ${className}`}>
        {children}
    </Link>
);