function Services() {
  const weprovide = [
    {
      title: "Weddings",
      image: "/wedding.jpg",
    },
    {
      title: "Birthdays",
      image: "/birthday.jpg",
    },
    {
      title: "Decoration",
      image: "/decoration.jpg",
    },
    {
      title: "Catering",
      image: "/catering.jpg",
    },
  ];

  return (
    <div>
      <div className="flex gap-8 m-5 ">
        {weprovide.map((item, index) => (
          <div
            key={index}
            className="w-80 rounded-2xl overflow-hidden bg-amber-200 shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-fill"
            />
            <h2 className="text-center text-xl font-semibold p-4">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
      <div>
        <p className="font-mono p-2 m-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam,
          illo ex quibusdam aliquam, pariatur quaerat deleniti. Perferendis
          tempora at eaque nisi, placeat ad? Blanditiis quis fugit vero quam, id
          quidem reiciendis harum earum dignissimos ut voluptate iusto quidem
          reiciendis harum earum dignissimos ut voluptate iusto quidem
          reiciendis harum earum dignissimos ut voluptate iusto quidem
          reiciendis harum earum dignissimos ut voluptate iusto quidem
          reiciendis harum earum dignissimos ut voluptate iusto voluptatibus,
          sint autem odio! Odio asperiores a tenetur quisquam tempora
          perspiciatis, quae suscipit cupiditate saepe ex. Inventore amet
          mollitia similique consequuntur ducimus perspiciatis error molestias!
          Nihil, reiciendis sunt delectus magnam cumque repellendus? Labore
          tempora ullam voluptates ratione beatae eum, perspiciatis quasi sit
          eius magni, aspernatur hic.
        </p>
      </div>
    </div>
  );
}

export default Services;
