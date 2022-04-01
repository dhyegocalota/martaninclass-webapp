import LinkButton from "components/link-button";

import styles from "./links.module.css";

export default function Links({ className, children, ...restProps }) {
  return (
    <div {...restProps}>
      <LinkButton
        className={styles.link}
        to="https://bit.ly/karina-martan-vem-dancar-comigo"
      >
        Vem dançar comigo!
      </LinkButton>
      <LinkButton
        className={styles.link}
        to="https://bit.ly/karina-martan-fale-comigo"
      >
        Fale Comigo 🧡
      </LinkButton>
      <LinkButton
        className={styles.link}
        to="https://bit.ly/karina-martan-escola-ama"
      >
        Escola Ama
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
