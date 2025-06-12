import React from "react";
import chefImg from "../assets/chef.avif";
import aboutImg from "../assets/story.avif";

const About = () => {
  return (
    <div className="about-page text-gray-800">
      {/* Section 1: Hero Banner */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url('/images/resto.jpg')` }}
      >
        <div className="bg-black/50 p-6 rounded-lg text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About RestoBite</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Serving Delicious Memories Since 2010
          </p>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="py-16 px-6 md:px-20 bg-white grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg leading-7">
            RestoBite started its journey in 2010 with a simple mission: to bring
            home-style flavors to everyone. What began as a cozy family-run kitchen
            has blossomed into a vibrant restaurant known for its authenticity,
            passion, and heartwarming hospitality.
            <br /><br />
            Over the past decade, we’ve served over 5000 happy customers and
            introduced more than 100 hand-crafted dishes inspired by cuisines from
            all over India and beyond. Every dish at RestoBite carries a story — of
            heritage, of dedication, and of relentless love for food.
            <br /><br />
            Today, we stand as a trusted name for foodies who not only want to taste
            great food but also want to feel the soul in every bite. Whether it’s a
            weekday lunch, a weekend dinner, or a celebration, RestoBite has become
            a part of thousands of happy moments. We thank each guest who helped us
            grow into what we are today — a place where food meets emotion.
          </p>
        </div>
        <img
          src={aboutImg}
          alt="Restaurant Interior"
          className="rounded-lg shadow-md"
        />
      </section>

      {/* Section 3: Meet the Chef */}
      <section className="bg-gray-50 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Meet The Chef</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img
            src={chefImg}
            alt="Chef Aman Singh"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
          <div className="max-w-xl text-left">
            <h3 className="text-2xl font-semibold mb-2">Chef Aman Singh</h3>
            <p className="italic mb-4">
              "Cooking is not just a profession, it’s an emotion plated with love."
            </p>
            <p className="text-lg leading-7">
              With over 15 years of culinary experience, Chef Aman is the backbone of
              RestoBite’s kitchen. Trained in classical Indian cuisine and
              international flavors, his passion is evident in every dish. He
              believes that the best recipes are made with a pinch of creativity and
              a whole lot of heart.
              <br /><br />
              Chef Aman personally curates the menu, ensuring every item reflects
              authenticity, taste, and excellence. From the sizzling tandoori to the
              delicate desserts, every bite at RestoBite has his signature touch.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="bg-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div className="p-6 border rounded-lg shadow-md">
            <div className="text-4xl mb-4">🍽️</div>
            <h4 className="text-xl font-semibold mb-2">Quality Ingredients</h4>
            <p>
              We use only fresh, organic, and locally-sourced ingredients. Every dish
              begins with quality.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <div className="text-4xl mb-4">🧼</div>
            <h4 className="text-xl font-semibold mb-2">Hygiene First</h4>
            <p>
              Cleanliness is our top priority. Our kitchen follows strict hygiene
              protocols for your safety.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <div className="text-4xl mb-4">👨‍🍳</div>
            <h4 className="text-xl font-semibold mb-2">Expert Chefs</h4>
            <p>
              Our chefs bring years of experience and craft each dish with
              exceptional skill and love.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <div className="text-4xl mb-4">🕰️</div>
            <h4 className="text-xl font-semibold mb-2">Prompt Service</h4>
            <p>
              Whether dine-in or takeaway, we ensure your food reaches you fresh and
              fast — under 15 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Stats */}
      <section className="bg-red-600 text-white py-16 px-6 md:px-20">
        <div className="grid md:grid-cols-3 text-center gap-10">
          <div>
            <h3 className="text-4xl font-bold">12+</h3>
            <p className="text-lg">Years of Service</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">5000+</h3>
            <p className="text-lg">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="text-lg">Dishes Served</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
