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
} from 'reactstrap';

class SquadModal extends React.Component {
  buildAndSelectSquadModal = () => {
    const {
      addNewSquadRow,
      modal,
      newSquad,
      squadCharacter1IdChange,
      squadCharacter2IdChange,
      squadCharacter3IdChange,
      squadCharacter4IdChange,
      squadCharacter5IdChange,
      squadDescriptionChange,
      squadNameChange,
      toggle,
      updateSquadRow,
    } = this.props;
    if (newSquad.id) {
      return (
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Edit Squad</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="squadName">Squad Name</Label>
                <Input
                  id="squadName"
                  name="squadNameInput"
                  onChange={squadNameChange}
                  placeholder="Sith Empire"
                  type="text"
                  value={newSquad.name}
                />
                <Label for="squadDescription">Description</Label>
                <Input
                  id="squadDescription"
                  name="squadDescriptionInput"
                  onChange={squadDescriptionChange}
                  placeholder="All zetas on Darth Revan required!"
                  type="text"
                  value={newSquad.description}
                />
                <Label for="squadCharacter1Id">Character 1</Label>
                <Input
                  id="squadCharacter1Id"
                  name="squadCharacter1IdInput"
                  onChange={squadCharacter1IdChange}
                  placeholder="Darth Revan"
                  type="text"
                  value={newSquad.character1Id}
                />
                <Label for="squadCharacter2Id">Character 2</Label>
                <Input
                  id="squadCharacter2Id"
                  name="squadCharacter2IdInput"
                  onChange={squadCharacter2IdChange}
                  placeholder="Darth Malak"
                  type="text"
                  value={newSquad.character2Id}
                />
                <Label for="squadCharacter3Id">Character 3</Label>
                <Input
                  id="squadCharacter3Id"
                  name="squadCharacter3IdInput"
                  onChange={squadCharacter3IdChange}
                  placeholder="Bastila Shan (Fallen)"
                  type="text"
                  value={newSquad.character3Id}
                />
                <Label for="squadCharacter4Id">Character 4</Label>
                <Input
                  id="squadCharacter4Id"
                  name="squadCharacter4IdInput"
                  onChange={squadCharacter4IdChange}
                  placeholder="HK-47"
                  type="text"
                  value={newSquad.character4Id}
                />
                <Label for="squadCharacter5Id">Character 5</Label>
                <Input
                  id="squadCharacter5Id"
                  name="squadCharacter5IdInput"
                  onChange={squadCharacter5IdChange}
                  placeholder="Sith Trooper"
                  type="text"
                  value={newSquad.character5Id}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={updateSquadRow}>Submit</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      );
    }
    return (
      <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>New Squad</ModalHeader>
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
            />
            <Label for="squadDescription">Description</Label>
            <Input
              id="squadDescription"
              name="squadDescriptionInput"
              onChange={squadDescriptionChange}
              placeholder="All zetas on Darth Revan required!"
              type="text"
            />
            <Label for="squadCharacter1IdInput">Character 1</Label>
            <Input
              id="squadCharacter1IdInput"
              name="squadCharacter1IdInput"
              onChange={squadCharacter1IdChange}
              placeholder="Darth Revan"
              type="text"
            />
            <Label for="squadCharacter2IdInput">Character 2</Label>
            <Input
              id="squadCharacter2IdInput"
              name="squadCharacter2IdInput"
              onChange={squadCharacter2IdChange}
              placeholder="Darth Malak"
              type="text"
            />
            <Label for="squadCharacter3IdInput">Character 3</Label>
            <Input
              id="squadCharacter3IdInput"
              name="squadCharacter3IdInput"
              onChange={squadCharacter3IdChange}
              placeholder="Bastila Shan (Fallen)"
              type="text"
            />
            <Label for="squadCharacter4IdInput">Character 4</Label>
            <Input
              id="squadCharacter4IdInput"
              name="squadCharacter4IdInput"
              onChange={squadCharacter4IdChange}
              placeholder="HK-47"
              type="text"
            />
            <Label for="squadCharacter5IdInput">Character 5</Label>
            <Input
              id="squadCharacter5IdInput"
              name="squadCharacter5IdInput"
              onChange={squadCharacter5IdChange}
              placeholder="Sith Trooper"
              type="text"
            />
          </FormGroup>
        </Form>
      </ModalBody>
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
        {this.buildAndSelectSquadModal()}
      </div>
    );
  }
}

export default SquadModal;
