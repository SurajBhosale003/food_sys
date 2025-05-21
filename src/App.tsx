"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ParentDashboard from "./pages/ParentDashboard"
import AddChildrenPage from "./pages/AddChildrenPage"
import MealOrderPage from "./pages/MealOrderPage"
import SelectPlanPage from "./pages/SelectPlanPage"
import type { Child, Parent } from "./data/types"
import { sampleParents, sampleChildren } from "./data/sampleData"
import Sidebar from "./components/Sidebar"


interface SidebarProps {
  parent: Parent | null
  onLogout: () => void
}



function App() {
  const [currentParent, setCurrentParent] = useState<Parent | null>(null)
  const [children, setChildren] = useState<Child[]>(sampleChildren)

  const handleLogout = () => {
    setCurrentParent(null)
    localStorage.removeItem("currentParent")
  }

const ParentLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-screen">
    {currentParent && <Sidebar parent={currentParent} onLogout={handleLogout} />}
    <div className="flex-1 overflow-auto p-4">{children}</div>
  </div>
)


  const handleLogin = (email: string, password: string) => {
    const parent = sampleParents.find(
      (p) => p.email === email && p.password === password
    )
    if (parent) {
      const parentWithChildren = {
        ...parent,
        children: [...children],
      }
      setCurrentParent(parentWithChildren)
      localStorage.setItem("currentParent", JSON.stringify(parentWithChildren))
      return true
    }
    console.log("Checking login with:", email, password)
    console.log("Available parents:", sampleParents)
    return false
  }

  useEffect(() => {
    const storedParent = localStorage.getItem("currentParent")
    if (storedParent) {
      setCurrentParent(JSON.parse(storedParent))
    }
  }, [])

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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

        {/* Wrap with ParentLayout to show sidebar */}
        <Route
          path="/parent-dashboard"
          element={
            <ParentLayout>
              <ParentDashboard parent={currentParent} onLogout={handleLogout} />
            </ParentLayout>
          }
        />
        <Route
          path="/add-children"
          element={
            <ParentLayout>
              <AddChildrenPage
                parent={currentParent}
                onAddChild={handleAddChild}
                children={children}
              />
            </ParentLayout>
          }
        />
        <Route
          path="/meal-order"
          element={
            <ParentLayout>
              <MealOrderPage parent={currentParent} children={children} />
            </ParentLayout>
          }
        />
        <Route
          path="/select-plan"
          element={
            <ParentLayout>
              <SelectPlanPage parent={currentParent} />
            </ParentLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
