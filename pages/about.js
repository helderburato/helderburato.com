import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Brazilian Front End Developer</div>
            <div className="text-gray-500 dark:text-gray-400">Living in Porto, Portugal</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              I’m a software developer with over 10 years of experience in planning and developing
              digital products.
            </p>
            <p>
              Currently, I’m a Senior Software Engineer - Front End at{' '}
              <a href="https://farfetch.com" target="blank">
                Farfetch
              </a>
              , a company dedicated to generating innovation in the luxury fashion segment.
            </p>
            <p>
              Solving problems with my software development skills is what inspires me and keeps me
              in a constant search for knowledge.
            </p>
            <p>
              I’m passionate about technologies such as JavaScript, HTML, CSS, and I’m familiar with
              packages that use these technologies as a base.
            </p>
            <p>
              Packages and tools come and go, but some concepts stay the same, and the concepts are
              what matters most to me.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
