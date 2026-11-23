const previewSiteUrl = process.env.CF_PAGES_URL
  ? `https://${process.env.CF_PAGES_URL}`
  : undefined;

export const SITE_URL =
  process.env.NEXT_PUBLIC_APP_URL ??
  previewSiteUrl ??
  "https://www.hotelandtraveling.com";

export const SITE_NAME = "HotelAndTraveling.com Guides";
export const SITE_DESCRIPTION =
  "HotelAndTraveling.com Guides by Hotel Expert delivers daily travel guides, hotel reviews, airline news, and practical booking insights for global travelers.";
export const SITE_SHORT_DESCRIPTION =
  "Daily travel guides, hotel insights, and booking tips by Hotel Expert.";
export const SITE_TAGLINE =
  "Practical hotel guides, destination insights, and travel news for smarter trips.";

export const SITE_LANGUAGE = "en";
export const SITE_LANGUAGE_TAG = "en-US";
export const SITE_OG_LOCALE = "en_US";

export const SITE_OG_IMAGE_PATH = "/images/og-image.png";
export const SITE_THEME_COLOR = "#d40c1a";
export const SITE_BACKGROUND_COLOR = "#fff6f5";
export const SITE_ICON_PATH = "/favicon/favicon-32x32.png";
export const SITE_FAVICON_PATH = "/favicon/favicon.ico";
export const SITE_APP_ICON_192_PATH = "/favicon/android-chrome-192x192.png";
export const SITE_APP_ICON_512_PATH = "/favicon/android-chrome-512x512.png";
export const SITE_APPLE_TOUCH_ICON_PATH = "/favicon/apple-touch-icon.png";

export const CONTACT_EMAIL = "mail@hotelandtraveling.com";
export const RESPONSIBLE_AI_INITIATIVE_URL =
  "https://responsible-ai-usage.vercel.app";
