const PUBLIC_BASE_PATH = process.env.PUBLIC_BASE_PATH || "";

export default function buildUrlWithBasePath(url) {
  if (PUBLIC_BASE_PATH) {
    return `${PUBLIC_BASE_PATH}/${url}`;
  }

  return url;
}
