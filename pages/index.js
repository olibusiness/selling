import Link from "next/link";
import Image from "next/image";
export default function Index() {
  return (
      <>
        <h1 className="title">Black Market</h1>
        <div className="index-container">
          <div className="text-ontop">
          <Link href="/product">
          <Image src="/products.jpeg" alt="products" className="index-imgs" width={300} height={220}/>
          <h2 className="index-links">Product</h2>
          </Link>
        </div>

        <br/>
        <div className="text-ontop">
        <Link href="/coming">
        <Image src="/shipping.webp" alt="shipping" className="index-imgs" width={300} height={220}/>
        <h2 className="index-links">Shipping</h2>
        </Link>
        </div>
        </div>
      </>
  );
}
