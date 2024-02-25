"use client"

import axios from "axios";
import * as z from "zod";
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { fromSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OpenAI from "openai";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loder";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import { cn } from "@/lib/utils";

const ConversationPage = () => {        
    const router = useRouter();
    const [messages, setMessages] = useState<OpenAI.Chat.ChatCompletionCreateMessageParam[]>([]);
    const form =useForm<z.infer<typeof fromSchema>>({
        resolver:zodResolver(fromSchema),
        defaultValues:{
            prompt: ""
        }
   });

   const isloading = form.formState.isSubmitting;

   const onsubmit = async (values: z.infer<typeof fromSchema>) => {
        try {
            const userMessage: OpenAI.Chat.ChatCompletionCreateMessageParam = {
                role: "user",
                content: values.prompt,
            };
            const newMessage = [...messages, userMessage]

            const response = await axios.post("/api/conversation" ,{
                messages:newMessage,
            });

            setMessages((current) =>[...current, userMessage, response.data]);

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
                title="Conversation"
                description="AI conversation"
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
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
                                        placeholder="What is the weather today?"
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
                    {messages.length === 0 && !isloading && (
                        <Empty label="No conversation started." />
                    )}
                    <div className="flex flex-col-reverse gap-y-4">
                       {messages.map((message) =>(
                            <div 
                                key={message.content}
                                className={cn(
                                    "p-8 w-full flex items-start gap-x-88 rounded-lg",
                                    message.role === "user"
                                    ? "bg-white border border-black border-opacity-10"
                                    : "bg-muted"
                                )}
                            >{message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                            <div
                              className="text-sm overflow-hidden leading-7"
                              dangerouslySetInnerHTML={{
                                __html: message.content
                                  ? message.content.replace(/\n/g, "<br />")
                                  : "",
                              }}
                            />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ConversationPage