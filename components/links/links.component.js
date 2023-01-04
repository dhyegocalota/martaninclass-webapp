import LinkButton from "components/link-button";

import styles from "./links.module.css";

export default function Links({ className, children, ...restProps }) {
  return (
    <div {...restProps}>
      <LinkButton
        className={styles.link}
        to="https://bit.ly/martan-inclass-imersao-2023"
        pulsing
      >
        Imersão Dança do Ventre 2023 🥂💃🧡
      </LinkButton>
      <LinkButton
        className={styles.link}
        to="https://bit.ly/karina-martan-fale-comigo"
      >
        Fale Comigo 🧡
      </LinkButton>
      <LinkButton
        className={styles.link}
        to="https://bit.ly/karina-martan-night-show-tbt"
      >
        Night Show #tbt
      </LinkButton>
      <LinkButton
        className={styles.link}
        to="https://bit.ly/karina-martan-instagram"
      >
        Instagram
      </LinkButton>
    </div>
  );
}
