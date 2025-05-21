"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ParentDashboard from "./pages/ParentDashboard"
import AddChildrenPage from "./pages/AddChildrenPage"
import MealOrderPage from "./pages/MealOrderPage"
import SelectPlanPage from "./pages/SelectPlanPage"
import type { Child, Parent } from "./data/types"
import { sampleParents, sampleChildren } from "./data/sampleData"

function App() {
  const [currentParent, setCurrentParent] = useState<Parent | null>(null)
  const [children, setChildren] = useState<Child[]>(sampleChildren)

  const handleLogin = (email: string, password: string) => {
    const parent = sampleParents.find((p) => p.email === email && p.password === password)

    if (parent) {
      
      const parentWithChildren = {
        ...parent,
        children: [...children],
      }
      setCurrentParent(parentWithChildren)
      return true
    }
    return false
  }

  const handleAddChild = (child: Child) => {
    const newChild = {
      ...child,
      id: `c${children.length + 1}`,
    }

    const updatedChildren = [...children, newChild]
    setChildren(updatedChildren)

    if (currentParent) {
      setCurrentParent({
        ...currentParent,
        children: updatedChildren,
      })
    }

    console.log("Child added:", newChild)
    return newChild
  }

  const handleLogout = () => {
    setCurrentParent(null)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/parent-dashboard" element={<ParentDashboard parent={currentParent} onLogout={handleLogout} />} />
        <Route
          path="/add-children"
          element={<AddChildrenPage parent={currentParent} onAddChild={handleAddChild} children={children} />}
        />
        <Route path="/meal-order" element={<MealOrderPage parent={currentParent} children={children} />} />
        <Route path="/select-plan" element={<SelectPlanPage parent={currentParent} />} />
      </Routes>
    </Router>
  )
}

export default App
