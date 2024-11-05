import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";




export default function Page() {
    return (
        <div className="h-[450px] flex justify-center items-center gap-2">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <h1>@Shadcn</h1>

        </div>
    );
}