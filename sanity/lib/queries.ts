// GROQ queries. Each route fetches ONLY its content type, which guarantees the
// right front-end template renders the right data (see app/blog, app/case-studies).

export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  coverImage,
  "authorName": author->name
}`

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  coverImage,
  body,
  "author": author->{name, image, bio}
}`

export const blogSlugsQuery = `*[_type == "blogPost" && defined(slug.current)]{ "slug": slug.current }`

export const caseStudiesQuery = `*[_type == "caseStudy"] | order(_createdAt desc){
  _id,
  title,
  "slug": slug.current,
  client,
  summary,
  logo,
  metrics
}`

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  client,
  summary,
  logo,
  metrics,
  body
}`

export const caseStudySlugsQuery = `*[_type == "caseStudy" && defined(slug.current)]{ "slug": slug.current }`

// Help center. Split by audience ("talent" | "partners"), stored on each
// category. Categories (with their articles) power a section index + the
// per-article sidebar; the params query drives static generation.
export const helpCategoriesByAudienceQuery = `*[_type == "helpCategory" && audience == $audience] | order(order asc, title asc){
  _id,
  title,
  "slug": slug.current,
  description,
  "articles": *[_type == "helpArticle" && references(^._id)] | order(order asc, title asc){
    _id,
    title,
    "slug": slug.current,
    excerpt
  }
}`

export const helpArticleByAudienceSlugQuery = `*[_type == "helpArticle" && slug.current == $slug && category->audience == $audience][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  updatedAt,
  body,
  "category": category->{title, "slug": slug.current, audience}
}`

// All (audience, slug) pairs for generateStaticParams on /help/[audience]/[slug].
export const helpArticleParamsQuery = `*[_type == "helpArticle" && defined(slug.current) && defined(category->audience)]{
  "slug": slug.current,
  "audience": category->audience
}`
