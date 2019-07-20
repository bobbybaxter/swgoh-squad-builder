import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledAlert,
} from 'reactstrap';

class SquadManagerModal extends React.Component {
  duplicateNameAlert = () => {
    if (!this.props.isNameDuplicate) {
      return '';
    }
    return (
        <UncontrolledAlert color="danger">
          Duplicate Name - Please choose a different name.
        </UncontrolledAlert>
    );
  }

  render() {
    const {
      modal,
      toggle,
      squadNameChange,
      squadDescriptionChange,
      addNewSquadList,
    } = this.props;
    return (
      <div>
        {/* <Button color="danger" onClick={toggle}>toggle button</Button> */}
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Name your Squad List</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="squadListName">Squad List Name</Label>
                <Input
                  type="text"
                  name="squadListNameInput"
                  id="squadListName"
                  placeholder="Grand Arena List"
                  onChange={squadNameChange}
                />
                <Label for="squadListDescription">Description</Label>
                <Input
                  type="text"
                  name="squadListDescriptionInput"
                  id="squadListDescription"
                  placeholder="This is a list of the best Grand Arena teams"
                  onChange={squadDescriptionChange}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={addNewSquadList}>Submit</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        {this.duplicateNameAlert()}
        </Modal>
      </div>
    );
  }
}

export default SquadManagerModal;
