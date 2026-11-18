import { META_PIXEL_ID } from "@/lib/constants";
import { hasAnalyticsConsent } from "@/lib/consent";

/** Loader oficial de Meta, sin PageView y sin <noscript>. El id ya está validado. */
export function metaPixelBootstrap(pixelId: string = META_PIXEL_ID) {
  return `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('consent', 'grant');
fbq('track', 'PageView');
window.__dvMetaInitialPageView = location.pathname + location.search;`;
}

/** Lead sin propiedades: no manda datos del formulario. Sin consentimiento, no hace nada. */
export function trackMetaLead() {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return;
  if (typeof window.fbq !== "function") return;
  window.fbq("track", "Lead");
}
