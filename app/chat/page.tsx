import { ImageResponse } from "@vercel/og";
import { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function GET(request: Request) {
  try {
 
    return new ImageResponse(
      (
        <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
          <div tw="bg-gray-50 flex w-full">
            <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
              <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
                <span>Ready to dive in?</span>
                <span tw="text-indigo-600">ConvoGrid</span>
              </h2>
              <div tw="mt-8 flex md:mt-0">
                <div tw="flex rounded-md shadow">
                  <a tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white">
                    Get started
                  </a>
                </div>
                <div tw="ml-3 flex rounded-md shadow">
                  <a tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    )
  } catch (e: any) {
    return new Response("Failed to generate OG image", { status: 500 })
  }

}
export default function ChatPage() {
  return (
    <div>
      <h1>Chat Page</h1>
    </div>
  );
}
