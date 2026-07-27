import { blockContent } from './blockContent'
import { author } from './author'
import { blogPost } from './blogPost'
import { caseStudy } from './caseStudy'
import { helpCategory } from './helpCategory'
import { helpArticle } from './helpArticle'
import { page } from './page'
import { route } from './route'

// Registered on the Studio config. Add a new content type here to make it
// available in the CMS.
export const schemaTypes = [
  page,
  route,
  blogPost,
  caseStudy,
  helpCategory,
  helpArticle,
  author,
  blockContent,
]
