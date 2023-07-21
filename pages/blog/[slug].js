import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'

export default function PostPage({ htmlString, data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts')

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join('posts', slug + '.md'))
    .toString()

  const parsedMarkdown = matter(markdownWithMetadata)

  const htmlString = marked(parsedMarkdown.content)

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  }
}
