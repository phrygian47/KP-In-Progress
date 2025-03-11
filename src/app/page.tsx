import styles from "./page.module.css";
import Hero from "@/components/Hero/hero";
import Menu from "@/components/Menu/menu";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero /> {/* Temporary video placeholder, waiting input from sponsor */}
      <div id="keokuk" className={styles.about_section}>
        <Menu /> {/* About section for Keokuk. Waiting input from sponsor */}
      </div>
    </div>
  );
}
