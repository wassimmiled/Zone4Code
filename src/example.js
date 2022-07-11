import * as React from 'react';
import {EmoticonRating} from 'baseui/rating';
import { Form,Button,Modal } from 'react-bootstrap';
import './index.css';

export default function Example() {
  const [value, setValue] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const [availability, setSelectedAvailability] = React.useState("");

  const handleClose = () => setShow(false);
  return (<> 

<Modal show={show} onHide={handleClose}>
  <Modal.Header >
    <Modal.Title>How are you today?</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Mood</Form.Label>
     
         <EmoticonRating
      value={value}
      onChange={({value}) => setValue(value)}
    />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Availability{availability}{value}</Form.Label>
      <div class="select">
    <select  onChange={(e) =>
                                  setSelectedAvailability(e.target.value)
                                } >
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Disponible</option>
      <option value="2">Occupé</option>
      <option value="3">Ne pas déranger</option>
      <option value="4">De retour bientot</option>
      <option value="5">Absent</option>
     
    </select>
  </div>
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
  {value !== 0 && availability !== "" && <Button variant="primary" onClick={handleClose}>
      Close
    </Button>}
    {value !== 0 && availability !== "" && <Button variant="primary" onClick={handleClose}>
      Save Changes
    </Button>}
  </Modal.Footer>
</Modal>

    </>
  );
}