import Link from "next/link";
import Image from "next/image";

const Logo = () => (
    <div className="flex">
        <Link href="/#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
            <Image
                src="/logo2.svg"
                alt="Acme Inc Logo"
                width={120}
                height={40}
                className="h-18 w-auto"
                priority
            />
            <span className="font-roboto font-black text-white text-[6vw] sm:text-[5vw] md:text-[3vw]">Singapur</span>
        </Link>
    </div>
);

export default Logo;
