import "./Categories.css";
import categories from "../sampleData/categories";
import HorizontalScroll from 'react-scroll-horizontal'

function Categories({border}) {
  const scrollStyle = {height: "60%"}

  return (
    <div className={`categories ${border && "border"}`}>
      <HorizontalScroll style={scrollStyle} reverseScroll>
        <p className="categories__item black">All</p>
        {categories.map(category => (
          <p className="categories__item" key={category.id}>{category.name}</p>
        ))}
      </HorizontalScroll>
    </div>
  )
}

export default Categories