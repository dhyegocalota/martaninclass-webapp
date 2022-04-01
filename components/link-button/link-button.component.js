import styles from "./link-button.module.css";

export default function LinkButton({ className, children, to, ...restProps }) {
  return (
    <a
      className={`${styles.root} ${className}`}
      {...restProps}
      href={to}
      target="_blank"
    >
      {children}
    </a>
  );
}
