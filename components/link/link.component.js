import { useMemo } from "react";

import buildUrlWithBasePath from "helpers/build-url-with-base-path";

export default function Link({ href, ...restProps }) {
  const hrefWithPublicBasePath = useMemo(() => {
    return buildUrlWithBasePath(href);
  }, [href]);

  return <link {...restProps} href={hrefWithPublicBasePath} />;
}
