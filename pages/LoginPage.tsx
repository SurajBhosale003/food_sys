"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface LoginPageProps {
  onLogin: (email: string, password: string) => boolean
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [activeTab, setActiveTab] = useState<"parent" | "institute">("parent")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (activeTab === "parent") {
      const success = onLogin(email, password)
      if (success) {
        navigate("/parent-dashboard")
      } else {
        setError("Invalid email or password. Try john@example.com / password123")
      }
    } else {
      setError("Institute login is not implemented in this demo.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="flex">
          <button
            className={`flex-1 py-4 text-center font-medium transition-colors ${
              activeTab === "parent" ? "bg-pink-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("parent")}
          >
            Parent Login
          </button>
          <button
            className={`flex-1 py-4 text-center font-medium transition-colors ${
              activeTab === "institute" ? "bg-pink-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("institute")}
          >
            Institute Login
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {activeTab === "parent" ? "Parent Login" : "Institute Login"}
            </h2>
            <p className="text-gray-600">
              {activeTab === "parent"
                ? "Access your account to manage your children's meals"
                : "Access your school account to manage meal programs"}
            </p>
          </div>

          {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="block text-gray-700 font-medium">
                  Password
                </label>
                <a href="#" className="text-sm text-pink-600 hover:text-pink-700">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Log In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-pink-600 hover:text-pink-700 font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
