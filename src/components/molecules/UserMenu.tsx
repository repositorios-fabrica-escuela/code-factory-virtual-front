import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, LogOut } from "lucide-react";
import { PopInfo } from "@/components/organisms/PopInfo";

interface UserMenuProps {
    userInfo?: {
        fullName?: string;
        email?: string;
        phoneNumber?: string;
    } | null;
}

const UserMenu = ({ userInfo }: UserMenuProps) => {
    

    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <PopInfo
                    fullName={userInfo?.fullName}
                    email={userInfo?.email}
                    phoneNumber={userInfo?.phoneNumber}
                    trigger={
                        <Button variant="ghost" size="icon" className="rounded-full h-18 w-18">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className="sr-only">Open user menu</span>
                        </Button>
                    }
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center" >
                    <LogOut className="mr-2 h-4 w-4" />
                    Salir
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserMenu;
