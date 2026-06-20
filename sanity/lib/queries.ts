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

// Help center. Categories (each with their articles) power the /help index and
// the per-article sidebar; the slug queries drive the article template.
export const helpCategoriesQuery = `*[_type == "helpCategory"] | order(order asc, title asc){
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

export const helpArticleBySlugQuery = `*[_type == "helpArticle" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  updatedAt,
  body,
  "category": category->{title, "slug": slug.current}
}`

export const helpArticleSlugsQuery = `*[_type == "helpArticle" && defined(slug.current)]{ "slug": slug.current }`
