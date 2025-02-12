
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("sports");

  const categories = [
    { id: "sports", label: "Sports" },
    { id: "outdoors", label: "Outdoors" },
    { id: "scenic", label: "Scenic" },
    { id: "adventure", label: "Adventure" },
    { id: "city", label: "City" },
  ];

  const features = [
    {
      title: "Share What You Love",
      description: "Join incredible communities that share your passion for adventure.",
      image: "/lovable-uploads/27c75d9e-35e6-40e0-bf31-a3a977f35b21.png",
    },
    {
      title: "Create And Inspire",
      description: "Customize and publish travel guides for a global community of travelers.",
      image: "/lovable-uploads/5ab2c65e-b23b-4de7-9342-ec75326725f7.png",
    },
    {
      title: "Build Your Bucketlist",
      description: "Save your favorite ideas for later to always be ready for your next adventure.",
      image: "/lovable-uploads/8d457d81-a0d1-4bfc-b012-ef14bef3839d.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-32">
        <nav className="flex justify-between items-center mb-16">
          <img src="/lovable-uploads/logo.png" alt="Logo" className="h-8" />
          <div className="flex gap-4">
            <Button variant="ghost">Sign in</Button>
            <Button className="bg-[#00C2CB] hover:bg-[#00A9B1] text-white">Get The App</Button>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold leading-tight text-[#042E30]"
            >
              Your Travel Story<br />Starts Here
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Simply share and discover what to do, where to stay, and where to eat for any destinations, all in one place
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4"
            >
              <Button className="bg-[#00C2CB] hover:bg-[#00A9B1] text-white px-8 py-6">
                Get The App
              </Button>
              <Button variant="outline" className="px-8 py-6">
                Get Started
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00C2CB]/10 to-[#F3F780]/10 rounded-3xl transform rotate-6" />
            <img
              src="/lovable-uploads/27c75d9e-35e6-40e0-bf31-a3a977f35b21.png"
              alt="App showcase"
              className="relative z-10 w-full rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-32">
        <div className="container mx-auto px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center gap-12 mb-32 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-bold text-[#042E30]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C2CB]/10 to-[#F3F780]/10 rounded-3xl transform -rotate-6" />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="relative z-10 w-full rounded-2xl shadow-xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#042E30] mb-16">Pick Your Travel Style</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full ${
                  activeCategory === category.id
                    ? "bg-[#00C2CB] hover:bg-[#00A9B1] text-white"
                    : ""
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-[#042E30] text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Download Your Next Adventure</h2>
          <p className="text-lg text-gray-300 mb-12">Available on iOS and Android</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-[#042E30] hover:bg-gray-100">
              App Store
            </Button>
            <Button className="bg-white text-[#042E30] hover:bg-gray-100">
              Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#00C2CB]">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00C2CB]">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00C2CB]">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#00C2CB]">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00C2CB]">Safety</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00C2CB]">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#00C2CB]">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00C2CB]">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00C2CB]">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Social</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#00C2CB]">Twitter</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00C2CB]">Instagram</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00C2CB]">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600">© 2024 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
