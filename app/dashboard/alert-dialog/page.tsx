
'use client'


import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react";


export default function Page() {

    const [open, setOpen] = useState(false)

    return (
        <div className="grid grid-cols-4 gap-x-2 ">
            <AlertDialog open={open} onOpenChange={(open) => setOpen(open)}>
                <AlertDialogTrigger asChild>
                    <Button className="w-48" variant="outline">Show Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => console.log('Cancelar')}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => console.log('Continuar')} > Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <Button className="w-48" onClick={() => (setOpen(true))} >Open</Button>
        </div >
    );
}