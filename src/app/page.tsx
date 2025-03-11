import styles from "./page.module.css";
import Hero from "@/components/Hero/hero";
import Menu from "@/components/Menu/menu";

export default function Home() {

  return (
    <div className={styles.page}>
      <Hero />
      <div id="keokuk" className={styles.about_section}>
        <Menu />
      </div>
    </div>
  );
}
