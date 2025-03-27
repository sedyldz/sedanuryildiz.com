import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { getBlogPosts } from "../lib/blog";
import { Header } from "../components/Header";

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen bg-white font-mono">
      <Header />
      <SEO 
        title="Blog"
        description="Technical articles and guides about web development, React, AWS, and more by Sedanur Yıldız."
      />
      <main className="pt-32">
        <div className="px-6 pb-6 flex justify-between items-center border-b border-neutral-200">
          <div className="flex gap-4 text-sm">
            <span className="text-neutral-400">BLOG</span>
            <span>/</span>
            <span>POSTS</span>
          </div>
        </div>
        <div className="p-6">
          <div className="grid gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-blue-600">
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  <img 
                    src={post.frontmatter.author.image} 
                    alt={post.frontmatter.author.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-gray-600">{post.frontmatter.author.name}</span>
                  <span className="text-gray-300">•</span>
                  <time className="text-sm text-gray-600">{post.frontmatter.date}</time>
                </div>
                <p className="text-gray-600">{post.frontmatter.description}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 