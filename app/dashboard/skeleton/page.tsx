import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";



const getData = async () => {

    await new Promise((resolve) => setTimeout(resolve, 3000))

    return '123456789'.split('')
}

export default async function Page() {

    const data = await getData();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {
                data.map((item, index) => (

                    <Card className="w-80" key={index}>
                        <CardHeader className="flex-row">
                            <Image
                                src="https://github.com/shadcn.png"
                                alt="shadcn"
                                width={50}
                                height={50}
                                className="rounded-full mr-3"
                            />
                            <div>
                                <CardTitle>Hola soy el titulo</CardTitle>
                                <CardDescription>Soy la descripcion</CardDescription>
                            </div>
                        </CardHeader>
                        <CardFooter className=" justify-end ">
                            <Button>Ver mas</Button>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>


    );
}