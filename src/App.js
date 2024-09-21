import { useState } from "react";
import products from "./database/Data";
import Category from "./components/Category";
import Menu from "./components/Menu";


const allCategories = [ "همه" , ...new Set(products.map((product) => {
// const allCategories = [ "همه" , ...new Set(products.map((product) => {
  return product.category;
})) ];

// console.log(allCategories);


function App() {

  const [categories, setCategories] = useState(allCategories);

  const [menu, setMenu] = useState(products);

  const filterProducts = (category) => {
    if(category==="همه"){
      setMenu(products);
    }else{
      const filteredProducts = products.filter((product) => {
        return product.category === category;
      })
      setMenu(filteredProducts);
    }
  }

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>محصولات ما</h2>
            <div className="underline"></div>
          </div>


          {/* <div className="btn-container">

            <button className="filter-btn">همه</button>
            <button className="filter-btn">لپ تاپ</button>
            <button className="filter-btn">هدفون</button>
            <button className="filter-btn">گوشی</button>

            {
              categories.map((category, index) => {
                return (
                  <button key={index} className="filter-btn" onClick={() => filterProducts(category)}>{category}</button>
                )
              })
            }

          </div> */}


          <Category categories={categories} filterProducts={filterProducts} />


          {/* <div className="section-center">
               {
                  menu.map((product) => {
                      const {id,title,price,img,desc} = product;
                      return (
                        <section className="menu-item" key={id}>
                          <img src={img} alt={title} className="photo" />
                          <div className="item-info">
                            <header>
                              <h4>{title}</h4>
                              <h5 className="price">{price}</h5>
                            </header>
                            <p className="items-text">{desc}</p>
                          </div>
                        </section>
                      )
                  })
               }
          </div> */}


          <Menu menu={menu} />


        </section>
      </main>
    </>
  );
}

export default App;
