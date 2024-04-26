import { Metadata } from "next";
import styles from "./page.module.css";
import Button from "@/components/button";

export const metadata:Metadata = {
  title:"ConvoGrid",
  description: 'Create Conversational AI Bots with ease',
  twitter: {
    card: 'summary_large_image',
    title: 'ConvoGrid',
    description: 'Create Conversational AI Bots with ease',
    images:"https://intervee.s3.amazonaws.com/image.png"
  },
  openGraph: {
    title: 'ConvoGrid',
    description: 'Create Conversational AI Bots with ease',
    images:"https://intervee.s3.amazonaws.com/image.png"
  },
}


export default function Home() {
  return (
    <main className={styles.main}>
      <Button />
    </main>
  );
}
