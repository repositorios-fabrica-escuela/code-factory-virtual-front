import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";

interface MobileMenuProps {
    renderNavLinks: () => JSX.Element | null;
}

const MobileMenu = ({ renderNavLinks }: MobileMenuProps) => (
    <Sheet>
        <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="left">
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
            <nav className="grid gap-6 text-lg font-medium">
                <Logo />
                {renderNavLinks()}
            </nav>
        </SheetContent>
    </Sheet>
);

export default MobileMenu;
