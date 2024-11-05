
import { Button } from "@/components/ui/button"
import { ChevronRight, Loader2, Mail } from "lucide-react";



export default function Page() {
    return (
        <div className="grid grid-cols-5 gap-2" >
            <Button>Default</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='destructive'>Destructive</Button>
            <Button variant='ghost' >Ghost</Button>
            <Button variant='link' >Link</Button>
            <Button variant='secondary' >Button</Button>
            <Button disabled >Disable</Button>
            <Button variant="success" >Success</Button>
            <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
            </Button>
            <Button>
                <Mail /> Login with Email
            </Button>
            <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button>
        </div>
    );
}