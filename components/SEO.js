import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="author" content="Ismoil Shokirov" />
      <meta name="keywords" content={"Ismoil Shokirov blog, ReactJS, NextJS, Software Engineer, Uzbekistan"} />
      <meta property="og:image" content={"/kirov.jpg"} />
      <meta property="og:type" content={"website"} />
      <meta property="og:site_name" content="blog.shokirov.uz" />
      <meta property="og:url" content={"https://blog.shokirov.uz"} />
    </Head>
  );
}
