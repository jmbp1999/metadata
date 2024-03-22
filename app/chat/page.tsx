import { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {

  const product = await fetch(`https://o7wc2ghhopwh7yac3an4sy6nma0ptyhu.lambda-url.us-east-1.on.aws/`).then((res) => res.json());

  return {
    title: product.liveVersion.name,
    openGraph: {
      title: product.liveVersion.name,
      description: product.liveVersion.description,
      siteName: "ConvoGrid",
      images: [
        { url: product.liveVersion.profileUrl, width: 1200, height: 630 }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.liveVersion.name,
      description: product.liveVersion.description,
      images: [product.liveVersion.profileUrl],
    },
  };
}

export default function ChatPage() {
  return (
    <div>
      <h1>Chat Page</h1>
    </div>
  );
}
