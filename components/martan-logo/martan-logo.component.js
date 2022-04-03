import Img from "components/img";

import styles from "./martan-logo.module.css";

export default function MartanLogo(props) {
  return (
    <div className={styles.root}>
      <Img
        {...props}
        className={styles.img}
        src="/karinamartan-logo.png"
        alt="Karina Martan"
      />
    </div>
  );
}
