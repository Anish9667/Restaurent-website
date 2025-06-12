const Home = () => {
  return (
    <section className="bg-[url('/images/resto1.jpg')] bg-cover bg-center h-[90vh] flex items-center justify-center">
      <div className="text-center text-white bg-black/50 p-8 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to RestoBite
        </h1>
        <p className="text-lg md:text-xl mb-6">Delicious food, made with love ❤️</p>
        <a href="#menu" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition">
          View Menu
        </a>
      </div>
    </section>
  );
};

export default Home;
