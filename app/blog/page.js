import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

export default function BlogPage() {
  // Get all MD files from the posts directory
  const postsDirectory = path.join(process.cwd(), "posts")
  const fileNames = fs.readdirSync(postsDirectory)

  // Get the front matter and slug (file name without .md) of all posts
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "")
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data: frontMatter } = matter(fileContents)

    return {
      slug,
      frontMatter,
    }
  })

  // Sort posts by date
  posts.sort((a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date))

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border p-4 rounded-md">
            <Link href={`/blog/${post.slug}`} className="text-xl font-semibold hover:underline">
              {post.frontMatter.title}
            </Link>
            <p className="text-gray-500">{post.frontMatter.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

