"use client"

import axios from "axios";
import * as z from "zod";
import { Heading } from "@/components/heading";
import { ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { fromSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loder";
import Replicate from 'replicate';



const ImagePage = () => {        
    const router = useRouter();
    const [image, setImage] = useState<string>();
    const form =useForm<z.infer<typeof fromSchema>>({
        resolver:zodResolver(fromSchema),
        defaultValues:{
            prompt: ""
        }
   });

   const isloading = form.formState.isSubmitting;

   const onsubmit = async (values: z.infer<typeof fromSchema>) => {
        try {
           setImage(undefined);
            const response = await axios.post("/api/image", values);

            setImage(response.data[0]);


            form.reset();

        } catch (error: any){
            //to open pro model
            console.log(error);
        } finally {
            router.refresh();
        }
   };
    return (
        <div>
            <Heading
                title="Image Generation"
                description="Turn your prompt into images."
                icon={ImageIcon}
                iconColor="text-red-500"
                bgColor="bg-red-500/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form 
                            onSubmit={form.handleSubmit(onsubmit)}
                            className="
                            roundedlg
                            border
                            w-full
                            p-4
                            px-3
                            md:px-6
                            focus-within:shadow-sm
                            grid
                            grid-cols-12
                            gap-2
                            "
                        >
                        <FormField
                            name="prompt"
                            render={({field}) =>(
                              <FormItem className="col-span-12 lg:col-span-10">
                                <FormControl className="m-0 p-0">
                                    <Input
                                        className="border-0 outline-none
                                        focus-visible:ring-0
                                        focus-visible:ring-transperent" 
                                        disabled={isloading}
                                        placeholder="A cat playing with a ball"
                                        {...field}
                                    />

                                </FormControl>
                              </FormItem>  
                            )}
                        
                        />
                        <Button className="col-span-12 lg:col-span-2
                        w-full" disabled={isloading}>
                            Answer
                        </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    {isloading && (
                        <div className="p-8 rounded-lg w-full flex items-center
                        justify-center bg-muted">
                            <Loader />
                        </div>
                    )}
                    {!image && !isloading && (
                        <Empty label="No image generated." />
                    )}
                    {image && (
                      <img  src={image} alt="Generated image" className="max-w-full h-auto"/>
                    )}
                </div>
            </div>
        </div>
     );
}

export default ImagePage; 