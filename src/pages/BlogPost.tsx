import { useParams, useNavigate, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
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
        <div className="px-6 pb-6 flex justify-between items-center border-b border-neutral-200">
          <div className="flex gap-4 text-sm">
            <Link to="/blog" className="text-neutral-400 hover:text-neutral-600">BLOG</Link>
            <span>/</span>
            <span className="truncate max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">{post.frontmatter.title.toUpperCase()}</span>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <article className="prose prose-neutral max-w-none">
            <div className="prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl 
                          prose-pre:bg-[#f6f8fa] prose-pre:border prose-pre:border-[#d0d7de] prose-pre:rounded-lg
                          prose-pre:font-mono prose-pre:p-4
                          prose-code:text-[#24292f] prose-code:bg-[#f6f8fa] prose-code:rounded-md prose-code:px-1
                          prose-code:font-mono
                          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            <div className="flex items-center gap-4 mt-8 not-prose">
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
          </article>
        </div>
      </main>
    </div>
  );
} 