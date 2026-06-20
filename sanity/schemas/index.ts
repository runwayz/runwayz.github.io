import { blockContent } from './blockContent'
import { author } from './author'
import { blogPost } from './blogPost'
import { caseStudy } from './caseStudy'
import { helpCategory } from './helpCategory'
import { helpArticle } from './helpArticle'

// Registered on the Studio config. Add a new content type here to make it
// available in the CMS.
export const schemaTypes = [blogPost, caseStudy, helpCategory, helpArticle, author, blockContent]
