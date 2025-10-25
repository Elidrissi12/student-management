"use client"

import { useEffect, useState } from "react"
import { getStudentCount, getStudentsByYear, type StudentByYear } from "@/lib/api"
import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function StudentStats() {
  const [totalCount, setTotalCount] = useState<number>(0)
  const [studentsByYear, setStudentsByYear] = useState<StudentByYear[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      setLoading(true)
      const [count, byYear] = await Promise.all([getStudentCount(), getStudentsByYear()])
      setTotalCount(count)
      setStudentsByYear(byYear)
      setError(null)
    } catch (err) {
      setError("Failed to load statistics")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-muted-foreground">Loading statistics...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {error && <div className="bg-destructive/10 text-destructive p-4 rounded-lg">{error}</div>}

      <Card className="p-6">
        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-2">Total Students</p>
          <p className="text-5xl font-bold text-primary">{totalCount}</p>
        </div>
      </Card>

      {studentsByYear.length > 0 && (
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Students by Year</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={studentsByYear}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="var(--color-primary)" name="Number of Students" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      )}
    </div>
  )
}
