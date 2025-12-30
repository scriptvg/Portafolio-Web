import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CopyEmail } from "@/components/custom/CopyEmail";

export function UserCard({ name, title, description, avatar, email, children }) {
  return (
    <div className="flex flex-col gap-2 sm:gap-3 max-w-lg">
      <div className="flex items-center gap-2 sm:gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="text-base sm:text-lg font-bold">{name}</h3>
          <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">
            {title}
          </p>
        </div>

      </div>
      <div className="p-2 max-w-[20rem]">
        <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div className=" flex-col sm:flex-row flex gap-2">
        {email && <CopyEmail email={email} />}
        {children}
      </div>
    </div>
  )
}
