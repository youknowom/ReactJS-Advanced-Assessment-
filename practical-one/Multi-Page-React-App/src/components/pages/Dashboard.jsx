function Dashboard() {
  const services = [
    "Wedding Planning",
    "Birthday Events",
    "Stage Decoration",
    "Catering Service",
    "Photography",
    "Lighting & Sound",
  ];

  return (
    <div className="min-h-screen bg-amber-50 p-6 md:p-10">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-lg md:p-8">
        <h3 className="mb-6 text-center text-3xl font-bold text-orange-600">
          Dashboard
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="flex h-28 items-center justify-center rounded-2xl bg-amber-200 text-center text-lg font-semibold text-gray-800 shadow-sm"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
