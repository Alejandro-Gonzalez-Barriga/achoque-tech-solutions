/** Must match `basePath` in `next.config.ts` (used for `public/` URLs in static export). */
export const siteBasePath = "/achoque-tech-solutions";

/**
 * Browser URL for a file under `public/`. Pass the repo-relative path, e.g. `public/achoqueFavicon.svg`.
 */
export function publicUrl(repoPathToPublicFile: string) {
  const trimmed = repoPathToPublicFile.trim().replace(/^\.\/+/, "");
  const relativeToPublic = trimmed.startsWith("public/")
    ? trimmed.slice("public/".length)
    : trimmed.replace(/^\/+/, "");
  const urlPath = relativeToPublic.startsWith("/")
    ? relativeToPublic
    : `/${relativeToPublic}`;
  return `${siteBasePath}${urlPath}`;
}

/** Same file as `public/achoqueFavicon.svg` */
export const achoqueFaviconSrc = publicUrl("public/achoqueFavicon.svg");

export const siteConfig = {
  name: "Achoque Tech Solutions",
  shortName: "Achoque Tech",
  description:
    "Achoque Tech Solutions is a software development and technology consulting partner building secure, scalable products—web, mobile, cloud, and AI integrations.",
  // Updated to your professional GitHub Pages URL
  url: "https://alejandro-gonzalez-barriga.github.io/achoque-tech-solutions",
  links: {
    linkedin: "https://www.linkedin.com/company/achoque-tech-solutions/",
    email: "alejandro.gonzalez.barriga@gmail.com",
  },
};

export type SiteConfig = typeof siteConfig;