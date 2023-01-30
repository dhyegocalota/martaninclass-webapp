import LinkButton from "components/link-button";

import styles from "./links.module.css";

export default function Links({ className, children, ...restProps }) {
  return (
    <div {...restProps}>
      <LinkButton
        className={styles.link}
        to="https://bit.ly/mclass-matriculas-2023"
        pulsing
      >
        Faça sua Matrícula 💃
      </LinkButton>
      <LinkButton
        className={styles.link}
        to="https://bit.ly/karina-martan-fale-comigo"
      >
        Fale Comigo 🧡
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
