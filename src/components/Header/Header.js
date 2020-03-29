import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center">
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </Col>
      </Row>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
