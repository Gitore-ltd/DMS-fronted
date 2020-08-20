import React from "react"
import Card from "react-bootstrap/Card"
import classes from "../assets/styles/components/card.module.css"
function card() {
  return (
    <div>
      <Card className={classes.card}>
        <Card.Header>Description</Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default card
