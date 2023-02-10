import content from '../frontaid.content.json';
import Link from 'next/link';
import Image from 'next/image';

export default function Page({page}) {
  if (!page) {
    return null;
  }

  return (
      <>
        <div className='pic-price'>
        <Image src= {page.img} alt = {page.title} className= "pic" width={200} height={300}/>
        <div className='info'>
        <h1>{page.title}</h1>
        <h2>{page.content}</h2>
        <h3 className='product-description'>{page.description}</h3>
        </div>
        
        {content.pages.map(page =>
        <div className='links-other'>
                <li key={page.path}>
                  <Link href="[...slug]" as={page.path}>
                    <p className='product-list'>{page.title}</p>
                    </Link>
                </li>
                </div>
            )}
        </div>
        {/* <div dangerouslySetInnerHTML={{__html: page.content}}></div> */}
      </>
  );
}

export async function getStaticPaths() {
  const paths = content.pages.map(page => {
    const slug = page.path.split('/').slice(1);
    return {params: {slug}};
  });
  return {paths, fallback: true};
}

export async function getStaticProps({params}) {
  const currentPath = `/${params.slug.join('/')}`;
  const page = content.pages.find(page => page.path === currentPath) || {notfound: true};
  return {props: {page}};
}
