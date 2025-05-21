"use client"

import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="Logo" className="h-10 w-10 mr-3" />
            <h1 className="text-2xl font-bold text-pink-600">MealJoy</h1>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-pink-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-pink-600 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-pink-600 transition-colors">
              Pricing
            </a>
            <Link
              to="/login"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition-colors font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Healthy School Meals <span className="text-pink-600">Made Easy</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Plan and order nutritious meals for your children with our simple and convenient meal ordering system.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/login"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-center transition-colors font-medium"
                >
                  Get Started
                </Link>
                <a
                  href="#how-it-works"
                  className="bg-white border border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full text-center transition-colors font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Happy kids with healthy food"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Parents <span className="text-pink-600">Love Us</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-pink-50 p-6 rounded-lg text-center">
                <div className="bg-pink-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Nutritious Options</h3>
                <p className="text-gray-600">
                  All meals are designed by nutritionists to ensure your child gets balanced nutrition.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="bg-purple-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Time-Saving</h3>
                <p className="text-gray-600">
                  Plan meals for the entire week in minutes, saving you precious time in the morning.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Allergen Tracking</h3>
                <p className="text-gray-600">
                  Easily track and avoid allergens with our comprehensive ingredient listings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-gradient-to-b from-purple-50 to-pink-50 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              How It <span className="text-pink-600">Works</span>
            </h2>

            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <img
                  src="/placeholder.svg?height=350&width=450"
                  alt="Parent ordering meals"
                  className="rounded-lg shadow-lg"
                />
              </div>

              <div className="md:w-1/2">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-pink-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Create Your Account</h3>
                      <p className="text-gray-600">
                        Sign up and add your children's information including any dietary restrictions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-pink-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Browse Weekly Menu</h3>
                      <p className="text-gray-600">
                        View the upcoming week's menu with detailed nutritional information.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-pink-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Select Meals</h3>
                      <p className="text-gray-600">Choose meals for each day of the week for each of your children.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-pink-600 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Checkout & Enjoy</h3>
                      <p className="text-gray-600">
                        Complete your order and your children will receive fresh meals at school.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-white px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Simple <span className="text-pink-600">Pricing</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="border border-gray-200 rounded-lg p-8 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Standard Plan</h3>
                <p className="text-4xl font-bold mb-6 text-pink-600">
                  $5.99<span className="text-sm text-gray-500 font-normal">/meal</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Balanced nutrition
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Fresh ingredients
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Allergen information
                  </li>
                </ul>
                <Link
                  to="/login"
                  className="block text-center bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-full transition-colors font-medium"
                >
                  Get Started
                </Link>
              </div>

              <div className="border-2 border-pink-500 rounded-lg p-8 bg-white shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg font-medium">
                  Popular
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Premium Plan</h3>
                <p className="text-4xl font-bold mb-6 text-pink-600">
                  $8.99<span className="text-sm text-gray-500 font-normal">/meal</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Organic ingredients
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Wider menu selection
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Customizable portions
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Nutritionist consultation
                  </li>
                </ul>
                <Link
                  to="/login"
                  className="block text-center bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-full transition-colors font-medium"
                >
                  Get Started
                </Link>
              </div>

              <div className="border border-gray-200 rounded-lg p-8 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Vegetarian Plan</h3>
                <p className="text-4xl font-bold mb-6 text-pink-600">
                  $6.99<span className="text-sm text-gray-500 font-normal">/meal</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Plant-based proteins
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Fresh vegetables
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Whole grains
                  </li>
                </ul>
                <Link
                  to="/login"
                  className="block text-center bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-full transition-colors font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MealJoy</h3>
              <p className="text-gray-300">
                Making school meals nutritious, delicious, and convenient for parents and children.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-300 hover:text-pink-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-300 hover:text-pink-400 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-300 hover:text-pink-400 transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@mealjoy.com
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (555) 123-4567
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MealJoy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
