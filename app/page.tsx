"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/dashboard");
  };

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="flex justify-between items-center p-6 bg-white shadow">
        <div className="flex items-center pl-32">
          <Image src='/logo.svg' alt='logo' width={150} height={150} />
        </div>
        <div>
          <a className="flex pr-32 items-center text-xl gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500"
          href="/dashboard">
              Get Started
          </a>
        </div>
      </div>
      {/* Hero Section */}
      <div className="relative p-28  justify-center items-center ">
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-gray-900">
            AI Content <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Generator</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
          </p>
          <Button
            onClick={handleGetStarted}
            className="inline-flex justify-center items-center h-12 w-40 mt-10 gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-md font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Feature Sections */}
      <div className="container mx-auto pb-40 py-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-4 flex justify-center">
              <Image
                src='/benefit.jfif'
                alt="Feature Icon 1"
                width={130}
                height={64}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">25+ Templates</h3>
            <p className="text-gray-600">Responsive, and mobile-first project on the web.</p>
            <a href="#" className="text-blue-600 mt-4 inline-block">
              Learn more &rarr;
            </a>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-4 flex justify-center">
              <Image
                src='/benefit5.png'
                alt="Feature Icon 2"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customizable</h3>
            <p className="text-gray-600">Components are easily customized and extendable.</p>
            <a href="#" className="text-blue-600 mt-4 inline-block">
              Learn more &rarr;
            </a>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-4 flex justify-center">
              <Image
                src='/benefit3.png'
                alt="Feature Icon 3"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Free to Use</h3>
            <p className="text-gray-600">Every component and plugin is well documented.</p>
            <a href="#" className="text-blue-600 mt-4 inline-block">
              Learn more &rarr;
            </a>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-4 flex justify-center">
              <Image
                src='/benefit4.png'
                alt="Feature Icon 4"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Contact us 24 hours a day, 7 days a week.</p>
            <a href="#" className="text-blue-600 mt-4 inline-block">
              Learn more &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
