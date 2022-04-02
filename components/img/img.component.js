import { useMemo } from "react";

import buildUrlWithBasePath from "helpers/build-url-with-base-path";

export default function Img({ src, ...restProps }) {
  const srcWithPublicBasePath = useMemo(() => {
    return buildUrlWithBasePath(src);
  }, [src]);

  return <img {...restProps} src={srcWithPublicBasePath} />;
}
