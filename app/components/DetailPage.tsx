import Link from 'next/link'
import { Card } from '@/lib/content'
import { urlFor } from '@/lib/sanity'
export default function DetailPage({item, back, actionLabel}:{item:Card|undefined;back:string;actionLabel?:string}) {
 if(!item) return <main className="shell section"><h1 className="text-3xl font-bold">This item is not available.</h1><Link className="mt-5 inline-block font-bold text-blue-700" href={back}>Back to list</Link></main>
 return <main><header className="border-b bg-white"><div className="shell flex min-h-16 items-center justify-between"><Link className="font-bold" href="/">CANDELLAR EDUCATION</Link><Link className="font-semibold text-blue-700" href={back}>Back</Link></div></header><article className="shell section max-w-3xl"><p className="eyebrow">Candellar Education</p><h1 className="mt-2 text-4xl font-bold">{item.title}</h1>{Boolean(item.image) && <img src={urlFor(item.image) || ''} alt="" className="my-8 max-h-[480px] w-full rounded-2xl object-cover"/>}<p className="text-lg leading-8 text-slate-700">{item.description || item.excerpt || item.summary || item.role}</p>{item.attribution && <p className="mt-5 text-sm font-semibold">Created by: {item.attribution}</p>}{item.url && <a className="button button-primary mt-8" href={item.url} target="_blank" rel="noreferrer">{actionLabel || 'Open item'}</a>}</article></main>
}
