function AddNote() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-orange-50 px-4 py-8">
      <section className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-lg shadow-orange-100 ring-1 ring-orange-100">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
          New Note
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">Add Note</h1>

        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter note title"
              className="w-full rounded-2xl border border-orange-200 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Note
            </label>
            <textarea
              rows="5"
              placeholder="Write your note here"
              className="w-full rounded-2xl border border-orange-200 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <button
            type="button"
            className="rounded-2xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Save Note
          </button>
        </div>
      </section>
    </main>
  );
}

export default AddNote;
