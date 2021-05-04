import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

import ListLayout from '@/layouts/ListLayout'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo title="Home" description={siteMetadata.description} url={siteMetadata.siteUrl} />
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        {siteMetadata.description}
      </p>
      <ListLayout posts={posts} />
    </>
  )
}
