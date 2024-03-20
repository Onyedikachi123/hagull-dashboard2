import Tab from "../components/Tab"

const Product = () => {
  return (
    <section className="bg-gray-100 h-full">
    <div className="container mx-auto px-4">
      <h3 className="text-3xl font-bold pt-5 pb-3">Product List</h3>
      <div className="rounded-md shadow-md p-4 w-[100%] h-[100%] bg-white">
        <Tab  />
      </div>
    </div>
  </section>
  )
}

export default Product