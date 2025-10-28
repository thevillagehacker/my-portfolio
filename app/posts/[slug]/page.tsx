import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: Params) {
  const post = getPostBySlug(params.slug);
  const processed = await remark().use(html).process(post.content);
  const contentHtml = processed.toString();

  return (
    <article className="prose lg:prose-lg mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
