import { generateSlug } from './utils';
import frontMatter from 'front-matter';

export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    lastModified?: string;
    author: {
      name: string;
      image: string;
    };
    keywords: string[];
    image?: string;
  };
  content: string;
}

interface FrontMatterAttributes {
  title: string;
  description: string;
  date: string;
  lastModified?: string;
  author: {
    name: string;
    image: string;
  };
  keywords: string[];
  image?: string;
}

// Import all markdown files from the blog directory
const modules = import.meta.glob('../content/blog/*.md', { 
  eager: true,
  query: '?raw',
  import: 'default'
});

const blogPosts: BlogPost[] = Object.entries(modules)
  .map(([path, content]: [string, unknown]) => {
    try {
      const { attributes, body } = frontMatter<FrontMatterAttributes>(content as string);
      const fileName = path.split('/').pop()?.replace('.md', '') || '';
      
      return {
        slug: generateSlug(attributes.title || fileName),
        frontmatter: attributes,
        content: body
      };
    } catch (error) {
      console.error(`Error processing ${path}:`, error);
      return null;
    }
  })
  .filter((post): post is BlogPost => post !== null)
  .sort((a, b) => 
    new Date(b.frontmatter.date).getTime() - 
    new Date(a.frontmatter.date).getTime()
  );

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string): BlogPost | null {
  return blogPosts.find(post => post.slug === slug) || null;
} 