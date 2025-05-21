"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import type { Child, Parent } from "../data/types"

interface AddChildrenPageProps {
  parent: Parent | null
  children: Child[]
  onAddChild: (child: Child) => Child
}

const AddChildrenPage = ({ parent, children, onAddChild }: AddChildrenPageProps) => {
  const navigate = useNavigate()
  const [childrenList, setChildrenList] = useState<Child[]>(children)

  const [newChild, setNewChild] = useState<Omit<Child, "id">>({
    name: "",
    age: 0,
    school: "",
    floor: "",
    grade: "",
    classroom: "",
    allergies: [],
  })

  const [allergyInput, setAllergyInput] = useState("")
  const [formError, setFormError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  useEffect(() => {
    if (!parent) {
      navigate("/login")
    }
  }, [parent, navigate])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === "age") {
      setNewChild({
        ...newChild,
        [name]: Number.parseInt(value) || 0,
      })
    } else {
      setNewChild({
        ...newChild,
        [name]: value,
      })
    }
  }

  const handleAddAllergy = () => {
    if (allergyInput.trim()) {
      setNewChild({
        ...newChild,
        allergies: [...newChild.allergies, allergyInput.trim()],
      })
      setAllergyInput("")
    }
  }

  const handleRemoveAllergy = (index: number) => {
    setNewChild({
      ...newChild,
      allergies: newChild.allergies.filter((_, i) => i !== index),
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormError("")
    setSuccessMessage("")

    // Validate form
    if (!newChild.name || !newChild.school || !newChild.grade) {
      setFormError("Please fill in all required fields.")
      return
    }

    if (childrenList.length >= 5) {
      setFormError("You can add a maximum of 5 children.")
      return
    }

    // Add child
    const addedChild = onAddChild(newChild as Child)
    setChildrenList([...childrenList, addedChild])

    // Reset form
    setNewChild({
      name: "",
      age: 0,
      school: "",
      floor: "",
      grade: "",
      classroom: "",
      allergies: [],
    })

    setSuccessMessage("Child added successfully!")

    // Log the JSON object
    console.log("Child added:", JSON.stringify(addedChild, null, 2))
  }

  const handleViewChild = (child: Child) => {
    console.log("Child details:", JSON.stringify(child, null, 2))
    alert(`Child details for ${child.name} logged to console.`)
  }

  if (!parent) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar would be here, but we'll reuse the one from ParentDashboard */}
      <aside className="w-64 bg-white shadow-md fixed h-full">{/* Sidebar content */}</aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Add Children</h1>
          <p className="text-gray-600">Add your children's information to manage their meal plans.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Child Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Child Information</h2>

              {formError && <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">{formError}</div>}

              {successMessage && <div className="bg-green-50 text-green-600 p-4 rounded-lg mb-6">{successMessage}</div>}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Child Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newChild.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                      placeholder="Enter child's name"
                    />
                  </div>

                  <div>
                    <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={newChild.age || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                      placeholder="Enter child's age"
                      min="0"
                    />
                  </div>

                  <div>
                    <label htmlFor="school" className="block text-gray-700 font-medium mb-2">
                      School <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="school"
                      name="school"
                      value={newChild.school}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                      placeholder="Enter school name"
                    />
                  </div>

                  <div>
                    <label htmlFor="floor" className="block text-gray-700 font-medium mb-2">
                      Floor
                    </label>
                    <input
                      type="text"
                      id="floor"
                      name="floor"
                      value={newChild.floor}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                      placeholder="Enter floor"
                    />
                  </div>

                  <div>
                    <label htmlFor="grade" className="block text-gray-700 font-medium mb-2">
                      Grade <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="grade"
                      name="grade"
                      value={newChild.grade}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                      placeholder="Enter grade"
                    />
                  </div>

                  <div>
                    <label htmlFor="classroom" className="block text-gray-700 font-medium mb-2">
                      Classroom
                    </label>
                    <input
                      type="text"
                      id="classroom"
                      name="classroom"
                      value={newChild.classroom}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                      placeholder="Enter classroom"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Allergies</label>
                  <div className="flex">
                    <input
                      type="text"
                      value={allergyInput}
                      onChange={(e) => setAllergyInput(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                      placeholder="Enter allergy"
                    />
                    <button
                      type="button"
                      onClick={handleAddAllergy}
                      className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r-lg transition-colors"
                    >
                      Add
                    </button>
                  </div>

                  {newChild.allergies.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {newChild.allergies.map((allergy, index) => (
                        <span
                          key={index}
                          className="bg-pink-100 text-pink-800 text-sm font-medium px-2.5 py-0.5 rounded-full flex items-center"
                        >
                          {allergy}
                          <button
                            type="button"
                            onClick={() => handleRemoveAllergy(index)}
                            className="ml-1 text-pink-800 hover:text-pink-900"
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition-colors font-medium"
                  >
                    Add Child
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Children List */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Your Children</h2>
                <span className="bg-pink-100 text-pink-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  {childrenList.length}/5
                </span>
              </div>

              {childrenList.length > 0 ? (
                <div className="space-y-4">
                  {childrenList.map((child) => (
                    <div
                      key={child.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-pink-300 transition-colors"
                    >
                      <h3 className="font-semibold text-gray-800 mb-1">{child.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {child.school}, Grade {child.grade}
                      </p>

                      {child.allergies.length > 0 && (
                        <div className="mb-3">
                          <p className="text-xs text-gray-500 mb-1">Allergies:</p>
                          <div className="flex flex-wrap gap-1">
                            {child.allergies.map((allergy, index) => (
                              <span key={index} className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">
                                {allergy}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <button
                        onClick={() => handleViewChild(child)}
                        className="text-sm text-pink-600 hover:text-pink-700 font-medium"
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No children added yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AddChildrenPage
