import React from 'react';
import { Card } from 'react-bootstrap';

const EmployeeDetailsCard = (props) => {
    const { authedUserDetails } = props;

    return (
        <Card>
            <Card.Body>
                <Card.Text>
                    {`Name: ${authedUserDetails.firstName} ${authedUserDetails.lastName}`}
                </Card.Text>
                <Card.Text>
                    {`Email: ${authedUserDetails.email}`}
                </Card.Text>
                <Card.Text>
                    {`Mobile: ${authedUserDetails.mobile}`}
                </Card.Text>
                <Card.Text>
                    {authedUserDetails.isadmin === false ? `User Type: User` : `User Type: Admin`}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default EmployeeDetailsCard