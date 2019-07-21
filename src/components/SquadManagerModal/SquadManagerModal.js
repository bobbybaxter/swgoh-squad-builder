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
  buildAndSelectSquadManagerModal = () => {
    const {
      addNewSquadList,
      modal,
      newSquadList,
      squadDescriptionChange,
      squadNameChange,
      toggle,
      updateSquadList,
    } = this.props;
    if (newSquadList.id) {
      return (
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Edit Squad List</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="squadListName">Squad List Name</Label>
                <Input
                  id="squadListName"
                  name="squadListNameInput"
                  onChange={squadNameChange}
                  placeholder="Grand Arena List"
                  type="text"
                  value={newSquadList.name}
                />
                <Label for="squadListDescription">Description</Label>
                <Input
                  id="squadListDescription"
                  name="squadListDescriptionInput"
                  onChange={squadDescriptionChange}
                  placeholder="This is a list of the best Grand Arena teams"
                  type="text"
                  value={newSquadList.description}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={updateSquadList}>Submit</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
          {this.duplicateNameAlert()}
        </Modal>
      );
    }
    return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Squad List</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="squadListName">Squad List Name</Label>
              <Input
                id="squadListName"
                name="squadListNameInput"
                onChange={squadNameChange}
                placeholder="Grand Arena List"
                type="text"
              />
              <Label for="squadListDescription">Description</Label>
              <Input
                id="squadListDescription"
                name="squadListDescriptionInput"
                onChange={squadDescriptionChange}
                placeholder="This is a list of the best Grand Arena teams"
                type="text"
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
    );
  }

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
    return (
      <div>
        {this.buildAndSelectSquadManagerModal()}
      </div>
    );
  }
}

export default SquadManagerModal;
