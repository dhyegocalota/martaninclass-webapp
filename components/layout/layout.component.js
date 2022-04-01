import MartanLogo from "components/martan-logo";

import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <MartanLogo className={styles.logo} />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
