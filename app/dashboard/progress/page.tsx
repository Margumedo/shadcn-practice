

"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


export default function Page() {

    const [progress, setProgress] = useState(1);


    useEffect(() => {
        const timer = setInterval(() => {

            setProgress((prev: number) => {
                if (prev >= 100) {
                    clearInterval(timer)
                    return 100
                }
                return prev + 1;
            })
        }, 100)

        return () => clearTimeout(timer)

    }, [])

    return (
        <div>
            <Progress value={progress}
                indicatorColor={
                    cn({
                        "bg-red-500": progress < 20,
                        "bg-yellow-500": progress >= 20 && progress < 50,
                        "bg-emerald-400": progress >= 50 && progress < 95,
                        "bg-green-500": progress >= 95,
                    })
                }
                className="w-full" />
        </div>
    );
}