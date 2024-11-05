
'use client'

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";




export default function Page() {


    const [date, setDate] = useState<Date | undefined>(new Date())

    const smallDate = date?.toLocaleDateString('es-ES', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    })

    const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([])

    return (
        <div className="flex flex-col gap-4 sm:flex sm:flex-row sm:flex-wrap">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => (date.getDay() == 0 || date.getDay() == 6)}
            />
            <Calendar
                mode="multiple"
                selected={multipleDates}
                onSelect={setMultipleDates}
                className="rounded-md border"
                disabled={(date) => (date < new Date())}
            />
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => (date.getMonth() > 9)}
            />

            <div>
                <h1 className="text-xl border-b">Informacion</h1>
                <span>{smallDate}</span>
                <p>{multipleDates?.map((date) => date.toDateString()).join(', ')}</p>
            </div>
        </div>


    );
}