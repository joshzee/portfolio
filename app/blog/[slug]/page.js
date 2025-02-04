import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"
import { generate } from "astring"

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts")
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }))
}

export default function BlogPost({ params }) {
  const { slug } = params
  const fullPath = path.join(process.cwd(), "posts", `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { content, data: frontMatter } = matter(fileContents)

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
      <p className="text-gray-500 mb-8">{frontMatter.date}</p>
      <div className="prose">
        <MDXRemote source={content} />
      </div>
    </div>
  )
}

