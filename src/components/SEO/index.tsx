import { Html, NextScript } from 'next/document'
import Head from 'next/head'

interface SEOProps {
  title: string
  color: string
  description?: string
  image?: string
  shouldExcludeTitleSuffix?: boolean
  shouldIndexPage?: boolean
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  color,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true
}) => {
  const pageTitle = `${title} ${
    !shouldExcludeTitleSuffix ? '| Colégio Particular Álamo Valinhos' : ''
  }`
  return (
    <Head>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={image} />}
      {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}

      <meta httpEquiv="x-ua-compatible" content="IE=edge, chorme=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="theme-color" content={color} />
      <meta name="msapplication-TitleColor" content={color} />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />
    </Head>
  )
}
export default SEO
