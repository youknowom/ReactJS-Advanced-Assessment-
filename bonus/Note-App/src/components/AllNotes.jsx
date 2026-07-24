function AllNotes() {
  const notes = [
    {
      title: "Shopping list",
      text: "Milk, bread, fruit, and snacks for the week.",
    },
    {
      title: "Project idea",
      text: "Build a simple notes app with clean cards and a soft theme.",
    },
    {
      title: "Reminder",
      text: "Finish homework before the weekend and review the design.",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-72px)] bg-gradient-to-b from-orange-50 to-white px-4 py-8">
      <section className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="mt-2 text-3xl font-bold text-gray-900">All Notes</h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <article
              key={note.title}
              className="rounded-3xl bg-white p-5 shadow-lg shadow-orange-100 ring-1 ring-orange-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {note.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {note.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AllNotes;
