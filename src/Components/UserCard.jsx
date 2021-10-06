import React from 'react';
import Figure from 'react-bootstrap/Figure'
import Card from 'react-bootstrap/Card'

const UserCard = ({ id, name, picture, email }) => {
    return (
        <>
            <Card className="col-4 m-2 p-2 border">
                <Figure className="m-0 d-flex align-items-center justify-content-center">
                    <Figure.Image
                        className="m-0"
                        width={320}
                        height={480}
                        alt={name}
                        src={picture}
                    />
                </Figure>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {email}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default UserCard
