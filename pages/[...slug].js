import content from '../frontaid.content.json';
import Link from 'next/link';

export default function Page({page}) {

  return (
      <>
        <div className='pic-price'>
        <img src= {page.img} alt = {page.title} className= "pic"/>
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
