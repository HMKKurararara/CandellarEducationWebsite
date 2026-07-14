'use client'
import { useEffect, useState } from 'react'
type Item = { id:string; message?:string; permalink_url?:string }
export default function FacebookFeed({ featured }: { featured:{_id:string;title?:string;url:string;caption?:string}[] }) {
  const [items, setItems] = useState<Item[]>([])
  useEffect(() => { fetch('/api/facebook').then(r => r.ok ? r.json() : []).then(setItems).catch(() => {}) }, [])
  return <div className="grid grid-3">{items.length ? items.map(item => <a className="card" key={item.id} href={item.permalink_url} target="_blank" rel="noreferrer"><strong>Latest from Facebook</strong><p>{item.message || 'See our latest update.'}</p></a>) : featured.map(post => <a className="card" key={post._id} href={post.url} target="_blank" rel="noreferrer"><strong>{post.title || 'Candellar on Facebook'}</strong><p>{post.caption || 'View this update on Facebook.'}</p></a>)}{!items.length && !featured.length && <p>Follow Candellar Education on Facebook for news, webinars, and student stories.</p>}</div>
}
