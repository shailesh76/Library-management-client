import React, { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import BooksList from "../components/BooksList"
import DashboardLayout from "../components/layout/DashboardLayout"
import { getBooks } from "../helpers/axiosHelper"

const Books = () => {
  const [books, setBooks] = useState([])

  const [user, setUser] = useState({})

  useEffect(()=> {
    const u = JSON.parse(sessionStorage.getItem('user'))
    setUser(u)
  },[])

  const fetchAllBooks = async () => {
    const response = await getBooks()

    setBooks(response.books)
  }

  useEffect(() => {
    fetchAllBooks()
  }, [])

  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          <BooksList books={books} fetchBooks={fetchAllBooks} user={user}/>
        </Row>
      </Container>
    </DashboardLayout>
  )
}

export default Books
