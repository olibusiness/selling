export default function Index() {
  return (
      <>
        <h1 className="title">Black Market</h1>
        {/* <div dangerouslySetInnerHTML={{__html: content.index.content}}></div> */}
        <div className="index-container">
          <div className="text-ontop">
          <a href="/product">
          <img src="/products.jpeg" alt="products" className="index-imgs"/>
          <h2 className="index-links">Product</h2>
          </a>
        </div>

        <br/>
        <div className="text-ontop">
        <a href="/coming">
        <img src="/shipping.webp" alt="shipping" className="index-imgs"/>
        <h2 className="index-links">Shipping</h2>
        </a>
        </div>
        </div>
      </>
  );
}
