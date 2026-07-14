import { getContent } from './sanity'

export type Card = { _id:string; _type?:string; title?:string; slug?:string; summary?:string; description?:string; details?:string; excerpt?:string; seoTitle?:string; seoDescription?:string; image?:unknown; gallery?:unknown[]; url?:string; category?:string; attribution?:string; role?:string; bio?:string; linkedin?:string; name?:string; quote?:string; guardianConsent?:boolean }
type Settings = { title?:string; heroHeadline?:string; heroText?:string; admissionsEmail?:string; phone?:string; address?:string; facebookUrl?:string }
export const demoProgrammes: Card[] = [
  {_id:'aeis',title:'AEIS & S-AEIS preparation',summary:'Focused academic preparation and practical guidance for Singapore school admissions.'},
  {_id:'math',title:'Singapore Math',summary:'Build deep problem-solving habits through the Singapore Math pathway.'},
  {_id:'english',title:'English & Cambridge exams',summary:'Writing, communication, and Cambridge exam preparation for confident learners.'},
]
export const demoResources: Card[] = [{_id:'guide',title:'Singapore school pathway guide',description:'A parent-friendly introduction to planning an education pathway.',category:'Guides'}]
export const demoPosts: Card[] = [{_id:'welcome',title:'Choosing an education pathway with confidence',excerpt:'What families can expect when planning the next step for a learner.'}]
export const demoVideos: Card[] = [{_id:'video',title:'How Candellar supports families',summary:'A short introduction to our guidance, programmes, and student-first approach.'}]
export const demoWork: Card[] = [{_id:'work',title:'A thoughtful maths solution',description:'A student demonstrates clear reasoning and a confident explanation.',attribution:'Student work'}]
export const demoTeam: Card[] = [{_id:'founder',title:'Candellar Education team',name:'Meet our educators',role:'Guidance, teaching, and family support'}]
export const demoTestimonials: Card[] = [{_id:'parent',quote:'Candellar made the next step feel clear and supported for our family.',name:'Parent testimonial'}]

export const content = {
  settings: () => getContent<Settings | null>(`*[_type == 'siteSettings'][0]{title,heroHeadline,heroText,admissionsEmail,phone,address,facebookUrl}`, null),
  programmes: () => getContent<Card[]>(`*[_type=='programme']|order(order asc){_id,title,'slug':slug.current,summary,details,'image':image,'gallery':gallery}`, demoProgrammes),
  resources: () => getContent<Card[]>(`*[_type=='resource']|order(featured desc,title asc){_id,title,'slug':slug.current,description,category,'image':coverImage,'url':coalesce(file.asset->url,externalUrl)}`, demoResources),
  posts: () => getContent<Card[]>(`*[_type=='post']|order(publishedAt desc){_id,title,'slug':slug.current,excerpt,'image':coverImage}`, demoPosts),
  videos: () => getContent<Card[]>(`*[_type=='video']|order(publishedAt desc){_id,title,'slug':slug.current,summary,'image':thumbnail,'url':videoUrl}`, demoVideos),
  work: () => getContent<Card[]>(`*[_type=='studentWork' && guardianConsent==true]|order(featured desc){_id,title,'slug':slug.current,description,attribution,'image':media,guardianConsent}`, demoWork),
  team: () => getContent<Card[]>(`*[_type=='teamMember']|order(order asc){_id,'title':name,name,role,bio,linkedin,'slug':slug.current,'image':portrait}`, demoTeam),
  featured: () => getContent<Card[]>(`*[_type in ['programme','resource','post','video','studentWork','teamMember'] && featured==true && (_type != 'studentWork' || guardianConsent==true)]|order(_updatedAt desc)[0...6]{_id,_type,'title':coalesce(title,name),'summary':coalesce(summary,description,excerpt,role),'image':coalesce(image,coverImage,thumbnail,media,portrait)}`, []),
  testimonials: () => getContent<Card[]>(`*[_type=='testimonial']|order(featured desc){_id,quote,name,relationship}`, demoTestimonials),
  facebook: () => getContent<{_id:string; title?:string; url:string; caption?:string; image?:unknown; videoUrl?:string}[]>(`*[_type=='facebookPost' && featured==true]{_id,title,url,caption,'image':image,'videoUrl':video.asset->url}`, []),
}
