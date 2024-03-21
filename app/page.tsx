import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/chat?bot=129302");
  };

  return (
    <main className={styles.main}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleButtonClick}>
          Go to Chat
        </button>
      </div>
    </main>
  );
}
