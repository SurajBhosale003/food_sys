import type { Child, FoodItem, MealPlan, Parent } from "./types"

export const sampleParents: Parent[] = [
  {
    id: "p1",
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    children: [],
  },
]

export const sampleChildren: Child[] = [
  {
    id: "c1",
    name: "Emma Doe",
    age: 8,
    school: "Sunshine Elementary",
    floor: "2nd",
    grade: "3rd",
    classroom: "3B",
    allergies: ["peanuts"],
  },
  {
    id: "c2",
    name: "Liam Doe",
    age: 10,
    school: "Sunshine Elementary",
    floor: "3rd",
    grade: "5th",
    classroom: "5A",
    allergies: [],
  },
]

export const mealPlans: MealPlan[] = [
  {
    id: "mp1",
    name: "Standard",
    description: "Regular meal plan with balanced nutrition",
    priceMultiplier: 1.0,
  },
  {
    id: "mp2",
    name: "Premium",
    description: "Premium ingredients with organic options",
    priceMultiplier: 1.5,
  },
  {
    id: "mp3",
    name: "Vegetarian",
    description: "Meat-free options with plant-based protein",
    priceMultiplier: 1.2,
  },
]

export const foodItems: FoodItem[] = [
  {
    id: "f1",
    name: "Margherita Pizza",
    type: "Pizza",
    description: "Classic cheese pizza with tomato sauce and fresh basil",
    image: "/placeholder.svg?height=200&width=200",
    price: 5.99,
    nutrition: {
      calories: 285,
      protein: 12,
      carbs: 39,
      fat: 10,
    },
    ingredients: ["Flour", "Tomato", "Mozzarella", "Basil", "Olive Oil"],
    allergens: ["Gluten", "Dairy"],
    suitableFor: ["Elementary Kids", "Upper Grades"],
  },
  {
    id: "f2",
    name: "Caesar Salad",
    type: "Salad",
    description: "Fresh romaine lettuce with Caesar dressing and croutons",
    image: "/placeholder.svg?height=200&width=200",
    price: 4.5,
    nutrition: {
      calories: 180,
      protein: 5,
      carbs: 10,
      fat: 15,
    },
    ingredients: ["Romaine Lettuce", "Croutons", "Parmesan", "Caesar Dressing"],
    allergens: ["Gluten", "Dairy", "Eggs"],
    suitableFor: ["Elementary Kids", "Upper Grades"],
  },
  {
    id: "f3",
    name: "Chicken Tenders",
    type: "Fried",
    description: "Crispy breaded chicken tenders with dipping sauce",
    image: "/placeholder.svg?height=200&width=200",
    price: 6.5,
    nutrition: {
      calories: 320,
      protein: 22,
      carbs: 18,
      fat: 16,
    },
    ingredients: ["Chicken", "Breadcrumbs", "Flour", "Spices"],
    allergens: ["Gluten"],
    suitableFor: ["Elementary Kids", "Upper Grades"],
  },
  {
    id: "f4",
    name: "Baked Mac & Cheese",
    type: "Baked",
    description: "Creamy macaroni and cheese baked with a crispy top",
    image: "/placeholder.svg?height=200&width=200",
    price: 5.25,
    nutrition: {
      calories: 350,
      protein: 14,
      carbs: 45,
      fat: 14,
    },
    ingredients: ["Macaroni", "Cheddar", "Milk", "Butter", "Breadcrumbs"],
    allergens: ["Gluten", "Dairy"],
    suitableFor: ["Elementary Kids", "Upper Grades"],
  },
  {
    id: "f5",
    name: "Veggie Wrap",
    type: "Wrap",
    description: "Fresh vegetables and hummus in a whole wheat wrap",
    image: "/placeholder.svg?height=200&width=200",
    price: 4.75,
    nutrition: {
      calories: 220,
      protein: 8,
      carbs: 32,
      fat: 7,
    },
    ingredients: ["Whole Wheat Wrap", "Hummus", "Lettuce", "Tomato", "Cucumber", "Bell Pepper"],
    allergens: ["Gluten"],
    suitableFor: ["Elementary Kids", "Upper Grades"],
  },
  {
    id: "f6",
    name: "Fruit Cup",
    type: "Snack",
    description: "Fresh seasonal fruit mix",
    image: "/placeholder.svg?height=200&width=200",
    price: 3.5,
    nutrition: {
      calories: 90,
      protein: 1,
      carbs: 23,
      fat: 0,
    },
    ingredients: ["Apple", "Orange", "Grapes", "Melon"],
    allergens: [],
    suitableFor: ["Elementary Kids", "Upper Grades"],
  },
]

// Generate dates for the next 7 days
export const getNextSevenDays = (): string[] => {
  const dates: string[] = []
  const today = new Date()

  for (let i = 0; i < 7; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    dates.push(date.toISOString().split("T")[0])
  }

  return dates
}
