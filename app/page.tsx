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
    images:"http://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/SM-Banner-YCWO.png"
  },
  openGraph: {
    title: 'ConvoGrid',
    description: 'Create Conversational AI Bots with ease',
    images:"http://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/SM-Banner-YCWO.png"
  },
}


export default function Home() {
  return (
    <main className={styles.main}>
      <Button />
    </main>
  );
}
