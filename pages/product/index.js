import content from 'frontaid.content';
import Link from 'next/link';

export default function Index() {
  return (
      <>
        <h1 className='product-title'>{content.index.title}</h1>
        {content.pages.map(page =>
                <li key={page.path}>
                  <Link href="[...slug]" as={page.path}>
                    <p className='product-list'>{page.title}</p>
                    </Link>
                </li>
            )}
      </>
  );
}

