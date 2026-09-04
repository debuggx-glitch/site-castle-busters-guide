import type {Metadata} from "next";
import Link from "next/link";
import {SocialBar} from "@/components/ad-placements";
import {Telemetry} from "@/components/telemetry";
import release from "@/config/release.json";
import {site} from "@/lib/site";
import {SiteStructuredData} from "@/components/structured-data";
import "./globals.css";
import "./responsive.css";

export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:site.homeTitle,template:`%s | ${site.name}`},description:site.description,robots:{index:release.allowIndexing,follow:release.allowIndexing},openGraph:{type:"website",siteName:site.name,title:site.homeTitle,description:site.description,images:[site.visual]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={site.theme}><SiteStructuredData/><header className="castle-header"><Link className="castle-brand" href="/"><span>CB</span><b>Castle Busters<br/><small>Command Archive</small></b></Link><nav><Link href="/">Campaigns</Link><Link href="/about/">The archive</Link></nav></header>{children}<footer className="castle-footer"><div><b>Castle Busters Guide</b><p>An independent field archive. Not affiliated with the developer or platform.</p></div><nav><Link href="/about/">About</Link><Link href="/privacy/">Privacy</Link><Link href="/contact/">Contact</Link></nav></footer><Telemetry/><SocialBar/></body></html>}
