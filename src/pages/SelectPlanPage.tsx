"use client"

import { useEffect } from "react"
import { useNavigate , Link } from "react-router-dom"
import type { Parent } from "../data/types"
import { mealPlans } from "../data/sampleData"

interface SelectPlanPageProps {
  parent: Parent | null
}

const SelectPlanPage = ({ parent }: SelectPlanPageProps) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!parent) {
      navigate("/login")
    }
  }, [parent, navigate])

  const handleSelectPlan = (planId: string) => {
    console.log("Selected plan:", planId)
    alert(`Plan selected! Check console for details.`)
  }

  if (!parent) {
    return null
  }
     const onLogout = () => {
    localStorage.removeItem("currentParent")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar would be here, but we'll reuse the one from ParentDashboard */}
           <aside className="w-64 bg-white shadow-md fixed h-full">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-pink-600">MealJoy</h2>
              </div>
      
              <nav className="p-4">
                <p className="text-gray-500 text-sm font-medium mb-2">MAIN MENU</p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/parent-dashboard"
                      className="flex items-center px-4 py-3 text-pink-600 bg-pink-50 rounded-lg font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/add-children"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      Add Children
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/meal-order"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Meal Order
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/select-plan"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
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
                      Select Plan
                    </Link>
                  </li>
                </ul>
      
                <p className="text-gray-500 text-sm font-medium mt-8 mb-2">ACCOUNT</p>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Settings
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={onLogout}
                      className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </button>
                  </li>
                </ul>
              </nav>
            </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Select Meal Plan</h1>
          <p className="text-gray-600">Choose the right meal plan for your children.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {mealPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-pink-300 transition-colors"
            >
              <div className="h-40 bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <p className="text-3xl font-bold text-pink-600 mb-1">
                    ${(5.99 * plan.priceMultiplier).toFixed(2)}
                    <span className="text-sm text-gray-500 font-normal">/meal</span>
                  </p>
                  <p className="text-sm text-gray-500">Price multiplier: {plan.priceMultiplier}x</p>
                </div>

                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition-colors font-medium"
                >
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-md p-6 max-w-5xl">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Plan Comparison</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                    Feature
                  </th>
                  {mealPlans.map((plan) => (
                    <th
                      key={plan.id}
                      className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-4 border-b font-medium">Base Price</td>
                  {mealPlans.map((plan) => (
                    <td key={plan.id} className="py-4 px-4 border-b">
                      ${(5.99 * plan.priceMultiplier).toFixed(2)}/meal
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-4 border-b font-medium">Ingredient Quality</td>
                  <td className="py-4 px-4 border-b">Standard</td>
                  <td className="py-4 px-4 border-b">Premium Organic</td>
                  <td className="py-4 px-4 border-b">Premium Plant-Based</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 border-b font-medium">Menu Variety</td>
                  <td className="py-4 px-4 border-b">6 options daily</td>
                  <td className="py-4 px-4 border-b">8 options daily</td>
                  <td className="py-4 px-4 border-b">6 vegetarian options daily</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 border-b font-medium">Portion Size</td>
                  <td className="py-4 px-4 border-b">Standard</td>
                  <td className="py-4 px-4 border-b">Customizable</td>
                  <td className="py-4 px-4 border-b">Standard</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 border-b font-medium">Nutritionist Support</td>
                  <td className="py-4 px-4 border-b">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="py-4 px-4 border-b">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                  <td className="py-4 px-4 border-b">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SelectPlanPage
