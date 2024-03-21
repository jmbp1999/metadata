"use client";
import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/chat?bot=129302");
  };

  return (
    <button style={{ padding: "40px" ,"cursor":"pointer"}} onClick={handleButtonClick}>
      Go to Chat
    </button>
  );
}
