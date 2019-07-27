import React from 'react';
import PropTypes from 'prop-types';
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

import newSquadListShape from '../../helpers/propz/newSquadListShape';

class SquadListModal extends React.Component {
  static propTypes = {
    addNewSquadRow: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
    modal: PropTypes.bool.isRequired,
    newSquad: newSquadListShape.newSquadListShape,
    squadCharacter1Change: PropTypes.func.isRequired,
    squadCharacter2Change: PropTypes.func.isRequired,
    squadCharacter3Change: PropTypes.func.isRequired,
    squadCharacter4Change: PropTypes.func.isRequired,
    squadCharacter5Change: PropTypes.func.isRequired,
    squadDescriptionChange: PropTypes.func.isRequired,
    squadNameChange: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    updateSquadRow: PropTypes.func.isRequired,
  }

  loadCharacterSelectors = (character) => {
    const characterId = character.base_id;
    return (
      <option key={characterId}>
        {character.name}
      </option>
    );
  }

  render() {
    const {
      addNewSquadRow,
      characters,
      modal,
      newSquad,
      squadCharacter1Change,
      squadCharacter2Change,
      squadCharacter3Change,
      squadCharacter4Change,
      squadCharacter5Change,
      squadDescriptionChange,
      squadNameChange,
      toggle,
      updateSquadRow,
    } = this.props;
    let squadListModal;
    if (newSquad.id) {
      if (newSquad !== undefined) {
        squadListModal = <Modal isOpen={modal} toggle={toggle}>
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
                <Input id="squadCharacter1Id" name="squadCharacter1IdInput" onChange={squadCharacter1Change} type="select" value={newSquad.character1}>
                  {characters.map(this.loadCharacterSelectors)}
                </Input>
                <Label for="squadCharacter2Id">Character 2</Label>
                <Input id="squadCharacter2Id" name="squadCharacter2IdInput" onChange={squadCharacter2Change} type="select" value={newSquad.character2}>
                  {characters.map(this.loadCharacterSelectors)}
                </Input>
                <Label for="squadCharacter3Id">Character 3</Label>
                <Input id="squadCharacter3Id" name="squadCharacter3IdInput" onChange={squadCharacter3Change} type="select" value={newSquad.character3}>
                  {characters.map(this.loadCharacterSelectors)}
                </Input>
                <Label for="squadCharacter4Id">Character 4</Label>
                <Input id="squadCharacter4Id" name="squadCharacter4IdInput" onChange={squadCharacter4Change} type="select" value={newSquad.character4}>
                  {characters.map(this.loadCharacterSelectors)}
                </Input>
                <Label for="squadCharacter5Id">Character 5</Label>
                <Input id="squadCharacter5Id" name="squadCharacter5IdInput" onChange={squadCharacter5Change} type="select" value={newSquad.character5}>
                  {characters.map(this.loadCharacterSelectors)}
                </Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={updateSquadRow}>Submit</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>;
      }
    } else {
      squadListModal = <Modal isOpen={modal} toggle={toggle}>
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
                <Input id="squadCharacter1IdInput" name="squadCharacter1IdInput" onChange={squadCharacter1Change} type="select">
                  <option key="defaultCharacter1">Select Leader</option>
                  {characters.map(this.loadCharacterSelectors)}
                </Input>
                <Label for="squadCharacter2IdInput">Character 2</Label>
                <Input id="squadCharacter2IdInput" name="squadCharacter2IdInput" onChange={squadCharacter2Change} type="select">
                  <option key="defaultCharacter2">Select Character</option>
                  {characters.map(this.loadCharacterSelectors)}
                </Input>
                <Label for="squadCharacter3IdInput">Character 3</Label>
                <Input id="squadCharacter3IdInput" name="squadCharacter3IdInput" onChange={squadCharacter3Change} type="select">
                  <option key="defaultCharacter3">Select Character</option>
                  {characters.map(this.loadCharacterSelectors)}
                </Input>
                <Label for="squadCharacter4IdInput">Character 4</Label>
                <Input id="squadCharacter4IdInput" name="squadCharacter4IdInput" onChange={squadCharacter4Change} type="select">
                  <option key="defaultCharacter4">Select Character</option>
                  {characters.map(this.loadCharacterSelectors)}
                </Input>
                <Label for="squadCharacter5IdInput">Character 5</Label>
                <Input id="squadCharacter5IdInput" name="squadCharacter5IdInput" onChange={squadCharacter5Change} type="select">
                  <option key="defaultCharacter5">Select Character</option>
                  {characters.map(this.loadCharacterSelectors)}
                </Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={addNewSquadRow}>Submit</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>;
    }

    return (
      <div>
        {squadListModal}
      </div>
    );
  }
}

export default SquadListModal;
