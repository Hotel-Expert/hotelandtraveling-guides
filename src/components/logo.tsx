import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <img
        src="https://www.hotelandtraveling.com/wp-content/uploads/2019/06/honkey-e1559738092492.jpg"
        alt="HotelAndTraveling.com logo"
        width={32}
        height={32}
        className="h-8 w-8 rounded-full object-cover"
      />
      <span className="text-primary hidden text-[19px] font-semibold tracking-tight sm:inline">
        HotelAndTraveling Guides
      </span>
      <span className="text-primary text-[18px] font-semibold tracking-tight sm:hidden">
        HT Guides
      </span>
    </div>
  );
};

export default Logo;
