import styles from "./page.module.css";
import Button from "@/components/button";

export const metadata = {
  title:"ConvoGrid",
  description: 'Create Conversational AI Bots with ease',
  twitter: {
    card: 'summary_large_image',
    title: 'ConvoGrid',
    description: 'Create Conversational AI Bots with ease',
  },
  openGraph: {
    title: 'ConvoGrid',
    description: 'Create Conversational AI Bots with ease',
  },
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Button />
    </main>
  );
}
