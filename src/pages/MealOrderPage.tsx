"use client"

import { useState, useEffect } from "react"
import { useNavigate , Link } from "react-router-dom"
import type { Child, Parent, FoodItem, MealOrder, CartItem } from "../data/types"
import { foodItems, getNextSevenDays } from "../data/sampleData"


interface MealOrderPageProps {
  parent: Parent | null
  children: Child[]
}

const MealOrderPage = ({ parent, children }: MealOrderPageProps) => {
  const navigate = useNavigate()
  const [selectedChild, setSelectedChild] = useState<Child | null>(null)
  const [dates] = useState<string[]>(getNextSevenDays())
  const [selectedFoodItems, setSelectedFoodItems] = useState<MealOrder[]>([])
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null)

  useEffect(() => {
    if (!parent) {
      navigate("/login")
    }

    if (children.length > 0 && !selectedChild) {
      setSelectedChild(children[0])
    }
  }, [parent, navigate, children, selectedChild])

  const handleSelectChild = (childId: string) => {
    const child = children.find((c) => c.id === childId)
    if (child) {
      setSelectedChild(child)
    }
  }

    const onLogout = () => {
    localStorage.removeItem("currentParent")
  }

  const handleSelectFood = (date: string, foodItem: FoodItem) => {
    // Check if there's already a selection for this date and child
    const existingIndex = selectedFoodItems.findIndex(
      (item) => item.date === date && item.childId === selectedChild?.id,
    )

    if (existingIndex !== -1) {
      // Update existing selection
      const updatedItems = [...selectedFoodItems]
      updatedItems[existingIndex] = {
        childId: selectedChild?.id || "",
        date,
        foodItemId: foodItem.id,
      }
      setSelectedFoodItems(updatedItems)
    } else {
      // Add new selection
      setSelectedFoodItems([
        ...selectedFoodItems,
        {
          childId: selectedChild?.id || "",
          date,
          foodItemId: foodItem.id,
        },
      ])
    }

    // Show food details
    setSelectedDate(date)
    setSelectedFood(foodItem)
  }

  const getSelectedFoodForDateAndChild = (date: string, childId: string): FoodItem | null => {
    const selection = selectedFoodItems.find((item) => item.date === date && item.childId === childId)

    if (selection) {
      return foodItems.find((food) => food.id === selection.foodItemId) || null
    }

    return null
  }

  const handleAddToCart = () => {
    if (!selectedChild) return

    const newCartItems: CartItem[] = []

    // Get all selections for the current child
    const childSelections = selectedFoodItems.filter((item) => item.childId === selectedChild.id)

    // Convert to cart items
    childSelections.forEach((selection) => {
      const foodItem = foodItems.find((food) => food.id === selection.foodItemId)
      if (foodItem) {
        // Check if this item is already in the cart
        const existingCartItem = cart.find((item) => item.childId === selection.childId && item.date === selection.date)

        if (!existingCartItem) {
          newCartItems.push({
            childId: selection.childId,
            childName: selectedChild.name,
            date: selection.date,
            foodItem,
          })
        }
      }
    })

    if (newCartItems.length > 0) {
      setCart([...cart, ...newCartItems])
      alert(`Added ${newCartItems.length} items to cart!`)

      // Log the order to console
      console.log("Meal order added to cart:", JSON.stringify(newCartItems, null, 2))
    } else {
      alert("No new items to add to cart.")
    }
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.foodItem.price, 0).toFixed(2)
  }

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.")
      return
    }

    alert(`Order placed successfully! Total: $${calculateTotal()}`)
    console.log("Order placed:", JSON.stringify(cart, null, 2))
    setCart([])
  }

  if (!parent || !selectedChild) {
    return null
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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Meal Order</h1>
          <p className="text-gray-600">Order meals for your children for the upcoming week.</p>
        </div>

        {/* Child Selection */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Select Child</h2>

          <div className="flex flex-wrap gap-4">
            {children.map((child) => (
              <button
                key={child.id}
                onClick={() => handleSelectChild(child.id)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedChild?.id === child.id
                    ? "bg-pink-100 border-pink-500 text-pink-800"
                    : "border-gray-300 hover:border-pink-300"
                }`}
              >
                {child.name}
              </button>
            ))}
          </div>
        </div>

        {/* Meal Selection Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Select Meals</h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                        Date
                      </th>
                      {foodItems.map((food) => (
                        <th
                          key={food.id}
                          className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                        >
                          {food.type}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dates.map((date) => {
                      const formattedDate = new Date(date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })

                      const selectedFood = getSelectedFoodForDateAndChild(date, selectedChild.id)

                      return (
                        <tr key={date} className="hover:bg-gray-50">
                          <td className="py-4 px-4 border-b">
                            <div className="font-medium">{formattedDate}</div>
                          </td>

                          {foodItems.map((food) => (
                            <td key={food.id} className="py-4 px-4 border-b">
                              <button
                                onClick={() => handleSelectFood(date, food)}
                                className={`w-full p-2 rounded-lg border transition-colors ${
                                  selectedFood?.id === food.id
                                    ? "bg-pink-100 border-pink-500"
                                    : "border-gray-200 hover:border-pink-300"
                                }`}
                              >
                                <div className="text-sm font-medium">{food.name}</div>
                                <div className="text-xs text-gray-500">${food.price.toFixed(2)}</div>
                              </button>
                            </td>
                          ))}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleAddToCart}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition-colors font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Food Details and Cart */}
          <div>
            {/* Food Details */}
            {selectedFood && selectedDate && (
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Food Details</h3>

                <div className="flex flex-col items-center mb-4">
                  <img
                    src={selectedFood.image || "/placeholder.svg"}
                    alt={selectedFood.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-xl font-semibold">{selectedFood.name}</h4>
                  <p className="text-gray-600 mb-2">{selectedFood.description}</p>
                  <p className="text-lg font-bold text-pink-600">${selectedFood.price.toFixed(2)}</p>
                </div>

                <div className="border-t pt-4">
                  <h5 className="font-medium mb-2">Nutrition Information</h5>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="text-xs text-gray-500">Calories</span>
                      <p className="font-medium">{selectedFood.nutrition.calories}</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="text-xs text-gray-500">Protein</span>
                      <p className="font-medium">{selectedFood.nutrition.protein}g</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="text-xs text-gray-500">Carbs</span>
                      <p className="font-medium">{selectedFood.nutrition.carbs}g</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="text-xs text-gray-500">Fat</span>
                      <p className="font-medium">{selectedFood.nutrition.fat}g</p>
                    </div>
                  </div>

                  <h5 className="font-medium mb-2">Ingredients</h5>
                  <p className="text-sm text-gray-600 mb-4">{selectedFood.ingredients.join(", ")}</p>

                  {selectedFood.allergens.length > 0 && (
                    <>
                      <h5 className="font-medium mb-2">Allergens</h5>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {selectedFood.allergens.map((allergen, index) => (
                          <span key={index} className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">
                            {allergen}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Cart */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Your Cart</h3>
                <span className="bg-pink-100 text-pink-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  {cart.length} items
                </span>
              </div>

              {cart.length > 0 ? (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item, index) => {
                      const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })

                      return (
                        <div key={index} className="flex justify-between border-b pb-3">
                          <div>
                            <p className="font-medium">{item.foodItem.name}</p>
                            <p className="text-sm text-gray-600">
                              {formattedDate} • {item.childName}
                            </p>
                          </div>
                          <p className="font-medium">${item.foodItem.price.toFixed(2)}</p>
                        </div>
                      )
                    })}
                  </div>

                  <div className="flex justify-between font-bold text-lg mb-6">
                    <span>Total:</span>
                    <span>${calculateTotal()}</span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition-colors font-medium"
                  >
                    Checkout
                  </button>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Your cart is empty.</p>
                  <p className="text-sm text-gray-600">Select meals from the calendar and click "Add to Cart".</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default MealOrderPage
