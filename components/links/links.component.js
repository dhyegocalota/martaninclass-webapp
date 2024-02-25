import LinkButton from "components/link-button";

import styles from "./links.module.css";

export default function Links({ className, children, ...restProps }) {
  return (
    <div {...restProps}>
      <LinkButton
        className={styles.link}
        to="https://forms.gle/NuQ3A6D6xW2Pyyzv6"
        pulsing
      >
        Programação Especial — Semana de Aulas Gratuitas e Festa 🧡
      </LinkButton>
      <LinkButton
        className={styles.link}
        to="https://forms.gle/H31dGWXChxL1BFLC7"
        pulsing
      >
        Matrículas Abertas Martan InClass 2024
      </LinkButton>
      <LinkButton
        className={styles.link}
        to="https://bit.ly/karina-martan-fale-comigo"
      >
        WhatsApp 📲
      </LinkButton>
      <LinkButton
        className={styles.link}
        to="https://bit.ly/karina-martan-instagram"
      >
        Instagram @karinamartan
      </LinkButton>
      <LinkButton className={styles.link} to="https://bit.ly/karina-martan-loc">
        📍 Localização da Escola
      </LinkButton>
    </div>
  );
}
