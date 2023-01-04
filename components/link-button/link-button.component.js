import classnames from "classnames";

import styles from "./link-button.module.css";

export default function LinkButton({
  className,
  children,
  to,
  pulsing,
  ...restProps
}) {
  return (
    <a
      className={classnames(styles.root, className, {
        [styles.pulsing]: pulsing,
      })}
      {...restProps}
      href={to}
      target="_blank"
    >
      {children}
    </a>
  );
}
