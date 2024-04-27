
import { Metadata, ResolvingMetadata } from "next";
import styles from "./page.module.css";
import Button from "@/components/button";


type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const product = await fetch(`https://o7wc2ghhopwh7yac3an4sy6nma0ptyhu.lambda-url.us-east-1.on.aws/`).then((res) => res.json());

  return {
    title: product.liveVersion.name,
    description:  product.liveVersion.description,
    openGraph: {
      title: product.liveVersion.name,
      description: product.liveVersion.description,
      siteName: "ConvoGrid",
      images:"https://convogenerator.vercel.app/api/og",
    },
    twitter: {
      card: "summary_large_image",
      title: product.liveVersion.name,
      description: product.liveVersion.description,
      images:"https://convogenerator.vercel.app/api/og"
    },
  };
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Button />
    </main>
  );
}
