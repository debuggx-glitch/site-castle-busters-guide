import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {Fragment} from "react";
import {notFound} from "next/navigation";
import {GuideAd} from "@/components/ad-placements";
import {GuideStructuredData} from "@/components/structured-data";
import {getGuide,guides} from "@/lib/guides";
import {site} from "@/lib/site";

export const dynamicParams=false;
export function generateStaticParams(){return guides.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const guide=getGuide((await params).slug);return guide?{title:guide.title,description:guide.description,alternates:{canonical:`/guides/${guide.slug}/`},openGraph:{images:[guide.sections.find((s)=>s.visual)?.visual?.src||site.visual]}}:{}}

export default async function GuidePage({params}:{params:Promise<{slug:string}>}){
  const guide=getGuide((await params).slug);if(!guide)notFound();
  const leadVisual=guide.sections.find((section)=>section.visual)?.visual;
  return <main className="field-manual">
    <GuideStructuredData guide={guide}/>
    <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">War room</Link><span>›</span><span>{guide.category}</span></nav>
    <header className="manual-cover"><p className="overline">Field manual · {guide.updated}</p><h1>{guide.title}</h1><p>{guide.description}</p></header>
    <section className="orders"><b>Commander&apos;s short order</b><p>{guide.quickAnswer}</p></section>
    <GuideAd/>
    {leadVisual?<figure className="lead-visual" data-asset-id={leadVisual.assetId}><Image src={leadVisual.src} width={leadVisual.width} height={leadVisual.height} sizes="(max-width: 900px) 100vw, 900px" priority alt={leadVisual.alt}/><figcaption>{leadVisual.caption}</figcaption></figure>:null}
    <div className="manual-body">{guide.sections.map((section,index)=><Fragment key={section.heading}><section id={`order-${index+1}`}><header><span>{String(index+1).padStart(2,"0")}</span><p>Field order</p><h2>{section.heading}</h2></header><div className="order-copy">{section.paragraphs.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}{section.visual&&section.visual.assetId!==leadVisual?.assetId?<figure data-asset-id={section.visual.assetId}><Image src={section.visual.src} width={section.visual.width} height={section.visual.height} sizes="(max-width: 900px) 100vw, 780px" alt={section.visual.alt}/><figcaption>{section.visual.caption}</figcaption></figure>:null}</div></section></Fragment>)}<section className="sources"><header><span>†</span><p>Records</p><h2>Sources</h2></header><div className="order-copy">{guide.sources.map((source)=><p key={source.url}><a href={source.url} rel="noreferrer">{source.label} ↗</a></p>)}</div></section></div>
  </main>;
}
