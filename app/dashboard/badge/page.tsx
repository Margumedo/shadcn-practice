import { Badge } from "@/components/ui/badge";




export default function Page() {
    return (
        <div className="grid grid-cols-7 gap-3" >
            <Badge>Badge</Badge>
            <Badge variant="destructive" >Destructive</Badge>
            <Badge variant='outline'>Outline</Badge>
            <Badge variant='secondary'>Secondary</Badge>
            <Badge capitalize variant='info'>info</Badge>
            <Badge capitalize variant='success'>success</Badge>


        </div>
    );
}