import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";
// import OpenAI from "openai";

const replicate =new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!
});

export async function POST(
  req: Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt  } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

 
    if (!prompt) {
      return new NextResponse("prompt are required", { status: 400 });
    }

    const response = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
       { 
        input:{
          prompt
        }
       });
    
    return NextResponse.json(response);
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};