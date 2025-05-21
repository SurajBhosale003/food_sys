"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import type { Parent } from "@/data/types"
import { mealPlans } from "@/data/sampleData"
import Sidebar from "./Sidebar"

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

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar parent={parent} onLogout={() => navigate("/login")} />

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
