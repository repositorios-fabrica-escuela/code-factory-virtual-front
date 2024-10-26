import Link from "next/link";

interface NavLinkProps {
    href: string;
    text: string;
    active?: boolean;
}

const NavLink = ({ href, text, active = false }: NavLinkProps) => (
    <Link
        href={href}
        className={`transition-colors text-white hover:text-foreground mx-4 ${active ? 'text-foreground' : 'text-muted-foreground'}`}
    >
        {text}
    </Link>
);

export default NavLink;
