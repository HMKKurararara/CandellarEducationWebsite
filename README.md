# Candellar Education

An English-first, CMS-managed education-centre website built with Next.js, Sanity, and Tailwind CSS. The public site works with useful placeholder content until Sanity is connected.

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.local.example` to `.env.local` and complete the values.
3. Run `npm run dev`, then open `http://localhost:3000`.
4. Open `http://localhost:3000/studio` to sign in to Sanity Studio. Create a Sanity project/dataset first, then invite staff as Editors or Administrators in Sanity Manage.

## Editorial workflow

Staff publish programmes, free resources, posts, videos, student work, team members, testimonials, and featured Facebook posts in `/studio`. Uploaded files and media live in Sanity’s asset library. Student work cannot be published unless guardian consent is marked approved.

### Give a staff member access

1. Open [Sanity Manage](https://www.sanity.io/manage), select the Candellar Education project, then open **Members**.
2. Invite the staff member using their email address.
3. On Sanity Free, use **Administrator** for trusted staff who need to edit content (the Free plan does not provide a restricted Editor role). Use **Viewer** for read-only access. Upgrade to Sanity Growth when you need editor-only permissions.
4. They sign in at `https://YOUR-SITE/studio`, select a content type in the left sidebar, create or edit an item, then press **Publish**.

### Everyday publishing checklist

- **Site settings:** update homepage headline, contact details, and Facebook URL.
- **Free resources:** upload the file, write a title/description, then publish.
- **Blogs/videos:** add a title, cover image, summary, publish date, and slug.
- **Student work:** obtain guardian approval first, then check **Guardian consent approved** before publishing.
- **Parent enquiries:** open **Parent enquiries**, update the status from New to In progress or Closed, and follow up through the recorded email/phone.

Parent enquiries are written to Sanity only when `SANITY_API_WRITE_TOKEN` is set, and are emailed only when the Resend variables are configured. The form remains safe to test without credentials.

## Facebook

Editors can always add featured Facebook post URLs. To activate the automatic latest-post feed, add a Meta Page ID and valid Page access token. The section automatically falls back to editor-curated posts when the API is unavailable.

## Checks and deployment

Run `npm run type-check` and `npm run build` before deploying to Vercel. Add every `.env.local.example` value as a Vercel environment variable. Configure the production URL in Sanity’s CORS settings if required by your project.

For a paste-ready checklist tailored to this project, see `.env.vercel.template`. Keep real credentials in Vercel only; do not commit them.
