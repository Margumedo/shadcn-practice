

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const items = [
    {
        id: 'item-1',
        quiestion: "Is it accesible",
        answare: "Yes. It adhres to the WAI-ARIA desing pattern"
    },
    {
        id: 'item-2',
        quiestion: "How do I get started?",
        answare: "You can strart by reading the documentation"
    },
    {
        id: 'item-3',
        quiestion: "Can I use it on multiple projects?",
        answare: "Yes. It is licensed under the MIT license"
    }
]


export default function AccordionDemo() {
    return (
        <Accordion type="single" className="w-full">

            {items.map(item => (
                <AccordionItem value={item.id} key={item.id}>
                    <AccordionTrigger>{item.quiestion}</AccordionTrigger>
                    <AccordionContent>
                        {item.quiestion}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
