import React from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {

    return (
        <main className='container'>
            <Card>
                <Card.Header>fgh</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>

                </Card.Body>
            </Card>
        </main>
    )
}

export default Home