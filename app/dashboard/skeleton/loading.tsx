import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton";

import Image from "next/image";

export default function Loading() {

    const data = Array.from({ length: 9 })
    return (

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {
                data.map((item, index) => (

                    <Card className="w-80" key={index}>
                        <CardHeader className="flex-row">
                            <Skeleton className="h-12 w-12 rounded-full mr-3" />

                            <div className="flex-grow">
                                <Skeleton className="h-4 w-1/2 " />
                                <Skeleton className="h-3 w-full mt-2" />
                            </div>
                        </CardHeader>
                        <CardFooter className=" justify-end ">
                            <Skeleton className="h-10 w-1/3 rounded-lg" />
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}