import React from 'react';
import {
  Button,
  // Form,
  // FormGroup,
  // Input,
  // Label,
  Modal,
  ModalHeader,
  // ModalBody,
  ModalFooter,
} from 'reactstrap';

class SquadListModal extends React.Component {
  buildAndSelectSquadListModal = () => {
    const {
      modal,
      toggle,
      // squadNameChange,
      // squadDescriptionChange,
      // squadCharacter1IdChange,
      // squadCharacter2IdChange,
      // squadCharacter3IdChange,
      // squadCharacter4IdChange,
      // squadCharacter5IdChange,
      addNewSquadRow,
      newSquadList,
    } = this.props;
    console.error(newSquadList);
    if (newSquadList !== '') {
      return (
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Edit List</ModalHeader>
          <ModalFooter>
            <Button color="primary" onClick={addNewSquadRow}>Submit</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      );
    }
    return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New List</ModalHeader>
        <ModalFooter>
          <Button color="primary" onClick={addNewSquadRow}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }

  render() {
    return (
      <div>
        {this.buildAndSelectSquadListModal()}
        {/* <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Edit your Squad List</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="squadName">Squad List Name</Label>
                <Input
                  id="squadName"
                  name="squadNameInput"
                  placeholder="Sith Empire"
                  onChange={squadNameChange}
                  type="text"
                  value={newSquadList.name}
                />
                <Label for="squadDescription">Description</Label>
                <Input
                  id="squadDescription"
                  name="squadDescriptionInput"
                  onChange={squadDescriptionChange}
                  placeholder="All zetas on Darth Revan required!"
                  type="text"
                  value={newSquadList.description}
                />
                <Label for="squadCharacter1IdInput">Character 1</Label>
                <Input
                  id="squadCharacter1IdInput"
                  name="squadCharacter1IdInput"
                  onChange={squadCharacter1IdChange}
                  placeholder="Darth Revan"
                  type="text"
                  value={newSquadList.character1}
                />
                <Label for="squadCharacter2IdInput">Character 2</Label>
                <Input
                  id="squadCharacter2IdInput"
                  name="squadCharacter2IdInput"
                  onChange={squadCharacter2IdChange}
                  placeholder="Darth Malak"
                  type="text"
                  value={newSquadList.character1}
                />
                <Label for="squadCharacter3IdInput">Character 3</Label>
                <Input
                  id="squadCharacter3IdInput"
                  name="squadCharacter3IdInput"
                  onChange={squadCharacter3IdChange}
                  placeholder="Bastila Shan (Fallen)"
                  type="text"
                  value={newSquadList.character1}
                />
                <Label for="squadCharacter4IdInput">Character 4</Label>
                <Input
                  id="squadCharacter4IdInput"
                  name="squadCharacter4IdInput"
                  onChange={squadCharacter4IdChange}
                  placeholder="HK-47"
                  type="text"
                  value={newSquadList.character1}
                />
                <Label for="squadCharacter5IdInput">Character 5</Label>
                <Input
                  id="squadCharacter5IdInput"
                  name="squadCharacter5IdInput"
                  onChange={squadCharacter5IdChange}
                  placeholder="Sith Trooper"
                  type="text"
                  value={newSquadList.character1}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={addNewSquadRow}>Submit</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal> */}
      </div>
    );
  }
}

export default SquadListModal;
