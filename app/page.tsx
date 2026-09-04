import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {HomeAd} from "@/components/ad-placements";
import {guides} from "@/lib/guides";
import {site} from "@/lib/site";

export const metadata:Metadata={alternates:{canonical:"/"}};
export default function Home(){return <main className="war-room">
  <HomeAd/>
  <section className="royal-hero"><div className="hero-copy"><p className="overline">The independent command table</p><h1>Hold the line.<br/><span>Build the right crew.</span></h1><p>{site.description}</p><Link className="battle-button" href={`/guides/${guides[0].slug}/`}>Open the field manual</Link></div><figure><Image src={site.visual} width={site.visualWidth} height={site.visualHeight} sizes="(max-width: 820px) 100vw, 50vw" priority alt={site.visualAlt}/><figcaption>Official game image · verify live balance before committing resources</figcaption></figure></section>
  <section className="dispatch"><strong>Current dispatch</strong><span>{guides.length} tactical briefs</span><span>Formation before upgrades</span><span>Reviewed September 4</span></section>
  <section className="campaign-board"><header><p className="overline">Campaign archive</p><h2>Choose your next objective.</h2><p>Every brief is organized around a decision you can make on the field.</p></header><div className="brief-list">{guides.map((guide,index)=><article key={guide.slug}><span className="crest-no">{String(index+1).padStart(2,"0")}</span><div><p>{guide.category}</p><h3><Link href={`/guides/${guide.slug}/`}>{guide.title}</Link></h3></div><p>{guide.description}</p><Link className="arrow-link" href={`/guides/${guide.slug}/`} aria-label={`Read ${guide.title}`}>→</Link></article>)}</div></section>
</main>}
