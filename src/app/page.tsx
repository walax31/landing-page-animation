import dynamic from "next/dynamic";
import styles from "./page.module.css";

const Scene = dynamic(() => import("@/component/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex h-[100vh]">
      <Scene />
    </main>
  );
}
