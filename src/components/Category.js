function Category({categories , filterProducts}) {
  return (
    <div className="btn-container">
        {
            categories.map((category, index) => {
                return (
                    <button key={index} className="filter-btn" onClick={() => filterProducts(category)}>{category}</button>
                )
            })
        }
    </div>
  )
}

export default Category;
