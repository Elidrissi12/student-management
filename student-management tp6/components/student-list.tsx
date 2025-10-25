"use client"

import { useEffect, useState } from "react"
import { getAllStudents, deleteStudent, type Student } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function StudentList() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    try {
      setLoading(true)
      const data = await getAllStudents()
      setStudents(data)
      setError(null)
    } catch (err) {
      setError("Failed to load students")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this student?")) {
      try {
        await deleteStudent(id)
        setStudents(students.filter((s) => s.id !== id))
      } catch (err) {
        setError("Failed to delete student")
        console.error(err)
      }
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-muted-foreground">Loading students...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Student List</h1>
        <Link href="/add-student">
          <Button>Add New Student</Button>
        </Link>
      </div>

      {error && <div className="bg-destructive/10 text-destructive p-4 rounded-lg">{error}</div>}

      {students.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">No students found. Add one to get started!</p>
        </Card>
      ) : (
        <div className="grid gap-4">
          {students.map((student) => (
            <Card key={student.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{student.prenom} {student.nom}</h3>
                  <p className="text-sm text-muted-foreground">{student.email}</p>
                  <p className="text-sm text-muted-foreground">Year: {student.year}</p>
                </div>
                <Button variant="destructive" onClick={() => handleDelete(student.id!)}>
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
