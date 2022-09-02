import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col xs={12}>
          <ul className="text-center">
            <li>© {new Date().getFullYear()}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/the-notebook">The Notebook</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
