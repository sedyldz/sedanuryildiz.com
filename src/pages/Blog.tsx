import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { getBlogPosts } from "../lib/blog";
import { Header } from "../components/Header";
import { useState } from "react";

export default function Blog() {
  const posts = getBlogPosts();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.frontmatter.keywords))
  ).sort();

  // Filter posts based on selected tag
  const filteredPosts = selectedTag
    ? posts.filter((post) => post.frontmatter.keywords.includes(selectedTag))
    : posts;

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
            {selectedTag && (
              <>
                <span>/</span>
                <span className="text-gray-600">{selectedTag}</span>
              </>
            )}
          </div>
          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Clear filter
            </button>
          )}
        </div>
        <div className="px-6 py-8 border-b border-neutral-200">
          <p className="max-w-2xl text-sm mb-6">
            I tend to forget a lot, so I'm storing here recipes for things I
            often do while developing products from ground up. Every time I work
            on something, I look for what's the latest best practice, most
            logical, free and quick solution. Feel free to use and share - while
            I generate a good part of it, I make sure to test and apply
            everything myself to verify it works.
          </p>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-2 py-1 text-xs rounded-full transition-colors ${
                  selectedTag === tag
                    ? "bg-gray-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="p-6">
          <div className="grid gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="border border-gray-200 rounded-lg p-6"
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <h2 className="text-2xl font-semibold ">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-gray-600"
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <time className="text-sm text-gray-600">
                    {post.frontmatter.date}
                  </time>
                </div>
                <p className="text-gray-600">{post.frontmatter.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.frontmatter.keywords.map((keyword) => (
                    <button
                      key={keyword}
                      onClick={() => setSelectedTag(keyword)}
                      className={`px-2 py-1 text-xs rounded-full transition-colors ${
                        selectedTag === keyword
                          ? "bg-gray-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {keyword}
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
