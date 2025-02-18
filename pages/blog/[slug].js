import React from 'react'
import { Header, Footer } from '../../components'
import ReactMarkdown from 'react-markdown'
import styles from './singleBlog.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

function blog({ post }) {
  const router = useRouter()
  const { isFallback } = router

  if(isFallback) {
    return <div style={{height:'100vh', display:'grid', placeItems:'center'}}><div>Loading...</div></div>
  }


  const date = post?.date && new Date(post.date)
  const opt = { year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <>
      <Head>
        <title>{post.title} | Clever IDEAS</title>
        <meta name="description" content="Clever Ideas 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section className={styles.blog}>
        <div className={styles.blog_title}>
          <Link href='/blog'>
            <div>Clever IDEAS <span>Blog</span></div>
          </Link>
        </div>

        <div className={styles.titleSection}>
          <h1 className={styles.title}>{post.title}</h1>
          <p>{post?.date && date.toLocaleDateString('es', opt)}</p>
          <p>{post.author && `Autor: ${post.author}`}</p>
        </div>
        

        <img src={post.main_image?.url} className={styles.mainImage} alt="" />

        <ReactMarkdown className={styles.content}>
          {post.content}
        </ReactMarkdown>
      </section>
      <Footer />
    </>
  )
}

export default blog

export async function getStaticPaths({ locale, locales }) {
  const res = await fetch(`https://cleverideas-web.herokuapp.com/blogs?_limit=20`)
  // const res = await fetch(`http://localhost:1337/blogs`)
  const data = await res.json()

  // const paths = data.map(item => (
  //   {
  //     params: { slug: item.slug }, locale: 'es'
  //   }
  // ))
  let paths = []

  data.forEach(block => {
    for (const locale of locales) {
      paths.push({
        params: {
          slug: block.slug
        },
        locale
      })
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params, locale }) {
  const { slug } = params

  const res = await fetch(`https://cleverideas-web.herokuapp.com/blogs?slug=${slug}&_locale=${locale}`)
  // const res = await fetch(`http://localhost:1337/blogs?slug=${slug}&_locale=${locale}`)
  const data = await res.json()

  if(data.length === 0) {
    return {
      notFound: true
    }
  }

  // post.filter(item => item.locale === locale)


  const post = data[0]

  return {
    props: { post },
    revalidate: 1
  }
}

