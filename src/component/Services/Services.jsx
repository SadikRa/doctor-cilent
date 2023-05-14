import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Services = () => {


    const handlePost = event =>{
            event.preventDefault()
            const from = event.target;
            const name = from.name.value;
            const date = from.date.value;
            const services = from.services.value;
            const photo = from.photo.value;
            const servicess = {
                name, date, services, photo,
            }


        fetch('http://localhost:5000/services',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(servicess)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }

    return (
        <div>
             <Form onSubmit={handlePost}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Services</Form.Label>
        <Form.Control type="text" name='services' placeholder="services" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" name='date' placeholder="date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo url</Form.Label>
        <Form.Control type="text" name='photo' placeholder="photo Url" />
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default Services;