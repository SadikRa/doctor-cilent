import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types
const UserBookingCard = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const {services, name, photo, date} = data;
    return (
        <div className='col-sm-1 col-lg-4 my-5'>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo}/>
      <Card.Body>
        <Card.Title>User Name {name}</Card.Title>
        <Card.Text>
        Services: {services}
        <p>Date: {date}</p>
        </Card.Text>
        <Button variant="primary">X</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default UserBookingCard;