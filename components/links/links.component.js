import LinkButton from "components/link-button";

import styles from "./links.module.css";

export default function Links({ className, children, ...restProps }) {
  return (
    <div {...restProps}>
      <LinkButton
        className={styles.link}
        to="https://bit.ly/imersao-2-0-mclass"
        pulsing
      >
        Matrícula IMERSÃO 2.0 MCLASS 🧡
      </LinkButton>
      <LinkButton
        className={styles.link}
        to="https://bit.ly/karina-martan-fale-comigo"
      >
        Fale Comigo 💃
      </LinkButton>
      <LinkButton
        className={styles.link}
        to="https://bit.ly/karina-martan-instagram"
      >
        Instagram @karinamartan
      </LinkButton>
      <LinkButton className={styles.link} to="https://bit.ly/karina-martan-loc">
        📍 Localização
      </LinkButton>
    </div>
  );
}
