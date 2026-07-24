function Home() {
  return (
    <div className="relative w-screen">
      <img className="w-full inner shadow-2xl " src="/event.jpg" alt="image" />
      <div className="absolute inset-0 bg-black/20" />
      <h1 className="absolute inset-0 flex items-center justify-center text-orange-500 text-6xl font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.85)]">
        Event Management
      </h1>
    </div>
  );
}

export default Home;
