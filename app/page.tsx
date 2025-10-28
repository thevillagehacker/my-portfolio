import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3); // show 3 latest posts

  return (
    <section>
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">👋 Hi, I’m Naveen</h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          I’m a Security Analyst specializing in Application Security and
          Research. Passionate about breaking things ethically, exploring
          vulnerabilities, and sharing knowledge with the community.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">📰 Latest Blog Posts</h2>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="text-xl text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="text-gray-700 text-sm">{post.description}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link
            href="/blog"
            className="text-blue-600 font-medium hover:underline"
          >
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  );
}