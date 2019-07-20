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

class SquadListModal extends React.Component {
  render() {
    const {
      modal,
      toggle,
      squadNameChange,
      squadDescriptionChange,
      squadCharacter1IdChange,
      squadCharacter2IdChange,
      squadCharacter3IdChange,
      squadCharacter4IdChange,
      squadCharacter5IdChange,
      addNewSquadRow,
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
                  name="squadNameInput"
                  id="squadName"
                  placeholder="Sith Empire"
                  onChange={squadNameChange}
                />
                <Label for="squadDescription">Description</Label>
                <Input
                  type="text"
                  name="squadDescriptionInput"
                  id="squadDescription"
                  placeholder="All zetas on Darth Revan required!"
                  onChange={squadDescriptionChange}
                />
                <Label for="squadDescription">Characters</Label>
                <Input
                  type="text"
                  name="squadCharacter1IdInput"
                  id="squadCharacter1IdDescription"
                  placeholder="Darth Revan"
                  onChange={squadCharacter1IdChange}
                />
                <Input
                  type="text"
                  name="squadCharacter2IdInput"
                  id="squadCharacter2IdDescription"
                  placeholder="Darth Malak"
                  onChange={squadCharacter2IdChange}
                />
                <Input
                  type="text"
                  name="squadCharacter3IdInput"
                  id="squadCharacter3IdDescription"
                  placeholder="Bastila Shan (Fallen)"
                  onChange={squadCharacter3IdChange}
                />
                <Input
                  type="text"
                  name="squadCharacter4IdInput"
                  id="squadCharacter4IdDescription"
                  placeholder="HK-47"
                  onChange={squadCharacter4IdChange}
                />
                <Input
                  type="text"
                  name="squadCharacter5IdInput"
                  id="squadCharacter5IdDescription"
                  placeholder="Sith Trooper"
                  onChange={squadCharacter5IdChange}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={addNewSquadRow}>Submit</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SquadListModal;
