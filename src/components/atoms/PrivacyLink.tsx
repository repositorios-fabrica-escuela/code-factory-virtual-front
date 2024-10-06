import Link from "next/link";

interface PrivacyLinkProps {
  href: string;
  children: React.ReactNode;
}

export const PrivacyLink = ({ href, children }: PrivacyLinkProps) => (
  <Link
    className="underline underline-offset-4 hover:text-primary"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </Link>
);