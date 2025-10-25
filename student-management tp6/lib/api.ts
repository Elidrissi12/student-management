import axios from "axios"

// Configure the base URL for your Spring Boot backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"

const api = axios.create({
  baseURL: `${API_BASE_URL}/students`,
  headers: {
    "Content-Type": "application/json",
  },
})

export interface Student {
  id?: number
  nom: string
  prenom: string
  email: string
  year: number
  dateNaissance?: string
  [key: string]: any
}

export interface StudentByYear {
  year: number
  count: number
}

// Get all students
export const getAllStudents = async (): Promise<Student[]> => {
  try {
    const response = await api.get("/all")
    return response.data
  } catch (error) {
    console.error("Error fetching students:", error)
    throw error
  }
}

// Add a new student
export const addStudent = async (student: Student): Promise<Student> => {
  try {
    const response = await api.post("/save", student)
    return response.data
  } catch (error) {
    console.error("Error adding student:", error)
    throw error
  }
}

// Delete a student
export const deleteStudent = async (id: number): Promise<void> => {
  try {
    await api.delete(`/delete/${id}`)
  } catch (error) {
    console.error("Error deleting student:", error)
    throw error
  }
}

// Get total student count
export const getStudentCount = async (): Promise<number> => {
  try {
    const response = await api.get("/count")
    return response.data
  } catch (error) {
    console.error("Error fetching student count:", error)
    throw error
  }
}

// Get students by year
export const getStudentsByYear = async (): Promise<StudentByYear[]> => {
  try {
    const response = await api.get("/byYear")
    // Transform the response to match our interface
    if (Array.isArray(response.data)) {
      return response.data.map((item: any) => ({
        year: item[0], // Premier élément du tableau [year, count]
        count: item[1], // Deuxième élément du tableau [year, count]
      }))
    }
    return response.data
  } catch (error) {
    console.error("Error fetching students by year:", error)
    throw error
  }
}
