import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SEO } from "../components/SEO";
import { getBlogPost } from "../lib/blog";
import { Header } from "../components/Header";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogPost(slug) : null;

  if (!post) {
    navigate("/blog");
    return null;
  }

  return (
    <div className="min-h-screen bg-white font-mono">
      <Header />
      <SEO 
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        article={true}
      />
      <main className="pt-32">
        <div className="container mx-auto px-4 py-8">
          <article className="prose prose-neutral max-w-none">
            <h1 className="mb-4">{post.frontmatter.title}</h1>
            <div className="flex items-center gap-4 mb-8 not-prose">
              <img 
                src={post.frontmatter.author.image} 
                alt={post.frontmatter.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-medium">{post.frontmatter.author.name}</div>
                <time className="text-sm text-gray-500">{post.frontmatter.date}</time>
              </div>
            </div>
            <div className="prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl 
                          prose-pre:bg-[#f6f8fa] prose-pre:border prose-pre:border-[#d0d7de] prose-pre:rounded-lg
                          prose-code:text-[#24292f] prose-code:bg-[#f6f8fa] prose-code:rounded-md prose-code:px-1
                          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
} 