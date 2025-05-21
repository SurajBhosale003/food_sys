export interface Child {
  id: string
  name: string
  age: number
  school: string
  floor: string
  grade: string
  classroom: string
  allergies: string[]
}

export interface Parent {
  id: string
  name: string
  email: string
  password: string
  children: Child[]
}

export interface FoodItem {
  id: string
  name: string
  type: string
  description: string
  image: string
  price: number
  nutrition: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
  ingredients: string[]
  allergens: string[]
  suitableFor: string[]
}

export interface MealPlan {
  id: string
  name: string
  description: string
  priceMultiplier: number
}

export interface MealOrder {
  childId: string
  date: string
  foodItemId: string
}

export interface CartItem {
  childId: string
  childName: string
  date: string
  foodItem: FoodItem
}
