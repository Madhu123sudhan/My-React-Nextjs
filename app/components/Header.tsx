import Image from "next/image";
import { FaRegLightbulb, FaCheckCircle } from "react-icons/fa";
import { FaTruck, FaLeaf, FaFlag, FaShieldAlt } from "react-icons/fa";
import { FaAppleAlt, FaWeight, FaUtensils } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <div className="bg-blue-100 min-h-screen font-sans">
      {/* Top Header */}
      <div className="text-center py-10">
        <h1 className="text-7xl md:text-8xl font-bold text-blue-900">
          Essential Vitamins
        </h1>
      </div>

      {/* Main Flexbox Container */}
      <div className="flex flex-col lg:flex-row justify-between items-start px-6 md:px-12 lg:px-20">
        {/* Left Section: Header Section */}
        <div className="lg:w-1/3 text-left py-6 px-16">
          <p className="mt-4 pl-6 text-gray-600 text-lg">Online Medical Supplies</p>
          <p className="text-2xl md:text-3xl font-bold text-cyan-900 mt-2">
            Get Your Vitamins & Minerals
          </p>
          <div className="mt-6 text-center">
            <button className="bg-cyan-900 hover:bg-cyan-900 text-white px-6 py-2 rounded-2xl text-lg">
                Explore
            </button>
          </div>
        </div>

        {/* Middle Section: Product Image */}
        <div className="lg:w-1/3 flex justify-center py-6">
          <div className="relative">
            <div className="absolute bg-blue-100 rounded-full w-64 h-64 md:w-72 md:h-72 -top-10"></div>
            <Image
              src="/Picture5.png.png"
              alt="Probiotics Bottle"
              width={580}
              height={580}
              className="relative z-10"
            />
          </div>
        </div>

        {/* Right Section: Features Icons */}
        <div className="lg:w-1/3 flex flex-col gap-6 py-6 px-12">
        {[
            {
            icon: FaAppleAlt,
            title: "Vitamins",
            description: "Increase vitamins and minerals in your diet.",
            },
            {
            icon: FaWeight,
            title: "Weight Loss",
            description: "Find scientifically proven solutions.",
            },
            {
            icon: FaUtensils,
            title: "Functional Foods",
            description: "Power-packed healthy formulas.",
            },
        ].map((item, index) => (
            <div
            key={index}
            className="flex items-center gap-4 p-4 bg-blue-100 rounded-md"
            >
            {/* Icon */}
            <item.icon className="w-20 h-20 text-white bg-cyan-900 border rounded-full px-4" />
            
            {/* Text */}
            <div>
                <h3 className="text-lg font-semibold text-cyan-900">
                {item.title}
                </h3>
                <p className="mt-1 text-gray-600 text-sm">
                {item.description}
                </p>
            </div>
            </div>
        ))}
        </div>
    </div> 

      {/* Benefits Section */}
      <div className="bg-cyan-900 py-12 mt-16 px-6 md:px-12 lg:px-20 border rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: FaRegLightbulb,
              title: "Clinically Studied",
              description:
                "All products that we offer have undergone lab and safety tests.",
            },
            {
              icon: FaLeaf,
              title: "Vegetarian Friendly",
              description:
                "We have a wide selection of vegetarian products to meet your needs.",
            },
            {
              icon: FaFlag,
              title: "Made In India",
              description:
                "Shop local and explore health products made right here in India.",
            },
            {
              icon: FaTruck,
              title: "Free Shipping",
              description:
                "We deliver to your door with no shipping costs on your orders.",
            },
            {
              icon: FaShieldAlt,
              title: "No Risk",
              description:
                "We ensure that all products are safe and within their use-by date.",
            },
            {
              icon: FaCheckCircle,
              title: "GMO Free",
              description:
                "Natural, no modified products and derivatives for those who need it.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="text-center p-4 shadow-sm flex flex-col items-center bg-cyan-900"
            >
              <benefit.icon className="h-14 w-14 mb-3 text-cyan-900 border rounded-full p-1 bg-blue-100" />
              <h4 className="text-lg font-bold text-white">{benefit.title}</h4>
              <p className="mt-2 text-gray-200 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;



