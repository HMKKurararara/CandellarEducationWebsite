'use client'
import { useEffect, useState } from 'react'
import { ExternalLink, Facebook } from 'lucide-react'
import { urlFor } from '@/lib/sanity'

type Item = { id:string; message?:string; permalink_url?:string; full_picture?:string; video_url?:string; created_time?:string }
type Featured = { _id:string; title?:string; url:string; caption?:string; image?:unknown; videoUrl?:string }

export default function FacebookFeed({ featured }: { featured: Featured[] }) {
  const [items, setItems] = useState<Item[]>([])
  useEffect(() => { fetch('/api/facebook').then(r => r.ok ? r.json() : []).then(setItems).catch(() => {}) }, [])
  const posts: Item[] = items.length ? items : featured.map(post => ({ id: post._id, message: post.caption || post.title, permalink_url: post.url, full_picture: urlFor(post.image), video_url: post.videoUrl }))
  if (!posts.length) return <div className="empty-panel">Facebook designs will appear here when the Page feed is available. You can also add a Featured Facebook post in Sanity.</div>
  return <div className="facebook-grid">{posts.map(post => <article className="facebook-card" key={post.id}>{post.video_url ? <video className="facebook-reel" muted loop playsInline controls preload="metadata" poster={post.full_picture} onMouseEnter={event => { void event.currentTarget.play().catch(() => {}) }} onMouseLeave={event => { event.currentTarget.pause(); event.currentTarget.currentTime = 0 }}><source src={post.video_url} type="video/mp4"/></video> : post.full_picture ? <img src={post.full_picture} alt="Candellar Facebook post"/> : <div className="facebook-placeholder"><Facebook size={32}/><span>Candellar on Facebook</span></div>}<div className="facebook-card-footer"><a href={post.permalink_url} target="_blank" rel="noreferrer">View post <ExternalLink size={15}/></a>{post.message && <details><summary>Read caption</summary><p>{post.message}</p></details>}</div></article>)}</div>
}
