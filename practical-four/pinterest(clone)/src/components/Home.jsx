const products = [
  {
    name: "Galaxy S26",
    price: 120000,
    description:
      "Premium smartphone with a crisp display, smooth performance, and a polished finish.",
    image: "/product-one.jpg",
  },
  {
    name: "Classic Shirt",
    price: 500,
    description: "A minimal white shirt with a sharp fit for everyday wear.",
    image: "/product-two.jpg",
  },
  {
    name: "MacBook Air",
    price: 150000,
    description:
      "Lightweight laptop built for study, work, and creative tasks.",
    image: "/product-three.jpg",
  },
  {
    name: "Casual Shirt",
    price: 399,
    description: "A relaxed shirt with a soft feel and simple styling.",
    image: "/product-four.jpg",
  },
  {
    name: "Travel Backpack",
    price: 899,
    description:
      "Durable backpack with a clean shape and plenty of room for essentials.",
    image: "/product-five.webp",
  },
  {
    name: "Smart Phone",
    price: 1245,
    description:
      "Modern phone design with a strong camera setup and all-day battery life.",
    image: "/product-one.jpg",
  },
];

function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Latest Products
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-64 items-center justify-center bg-gray-50 p-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full object-contain "
                />
              </div>

              <div className="space-y-3 p-5">
                <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>

                <p className="text-2xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString()}
                </p>

                <p className="line-clamp-3 text-sm text-gray-600">
                  {product.description}
                </p>

                <button className="mt-4 w-full rounded-lg bg-yellow-400 py-3 font-semibold text-black ">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
