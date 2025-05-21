"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "@/components/HomePage"
import LoginPage from "@/components/LoginPage"
import ParentDashboard from "@/components/ParentDashboard"
import AddChildrenPage from "@/components/AddChildrenPage"
import MealOrderPage from "@/components/MealOrderPage"
import SelectPlanPage from "@/components/SelectPlanPage"
import type { Child, Parent } from "@/data/types"
import { sampleParents, sampleChildren } from "@/data/sampleData"

export default function ClientWrapper() {
  const [currentParent, setCurrentParent] = useState<Parent | null>(null)
  const [children, setChildren] = useState<Child[]>(sampleChildren)

  const handleLogin = (email: string, password: string) => {
    const parent = sampleParents.find((p) => p.email === email && p.password === password)

    if (parent) {
      // Add sample children to the parent for demo purposes
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
