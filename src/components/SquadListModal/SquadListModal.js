import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  // ModalHeader,
  ModalBody,
  // ModalFooter,
} from 'reactstrap';

import './SquadListModal.scss';

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

  character1Event = e => this.props.squadCharacter1Change(e.target.value);

  character2Event = e => this.props.squadCharacter2Change(e.target.value);

  character3Event = e => this.props.squadCharacter3Change(e.target.value);

  character4Event = e => this.props.squadCharacter4Change(e.target.value);

  character5Event = e => this.props.squadCharacter5Change(e.target.value);

  characterPoolAction = e => this.props.addCharacterToSquad(e.target.alt);

  loadCharacterImages = (character, newListCharacter) => {
    if (character.name === '') {
      return <span className="noCharacterSelected"></span>;
    }
    if (character.name === newListCharacter) {
      const image = `https://swgoh.gg${character.image}`;
      return (
        <img key={character.image} src={image} alt={character.name} className="toonImg" />
      );
    }
    return '';
  }

  loadCharacterPool = (character) => {
    const image = `https://swgoh.gg${character.image}`;
    return <img key={character.image} src={image} alt={character.name} className="toonPoolImg mb-2" onClick={this.characterPoolAction} />;
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
        // EDIT SQUAD MODAL
        squadListModal = <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
            <Form className="squadForm d-flex flex-row">
              <div className="squadFormLeft col-5">
                {/* Team Name */}
                <FormGroup className="squadFormLeftTop h-25">
                  <Label for="squadName">Team Name</Label>
                  <Input
                    id="squadName"
                    name="squadNameInput"
                    onChange={squadNameChange}
                    placeholder="Sith Empire"
                    type="text"
                    value={newSquad.name}
                  />
                {/* Character Pool */}
                </FormGroup>
                <div className="squadFormLeftBottom h-75">
                  <div className="characterPool justify-content-between">
                    {characters.map(this.loadCharacterPool)}
                  </div>
                </div>
              </div>
              <div className="squadFormRight col-7">
                <FormGroup className="squadFormRightTop">
                  {/* Squad Characters */}
                  <FormGroup className="squadFormToon">
                    <Label for="squadCharacter1Id" hidden>Character 1</Label>
                    <span className="noCharacterSelected">
                      {characters.map(x => this.loadCharacterImages(x, newSquad.character1))}
                    </span>
                    <Input id="squadCharacter1Id" name="squadCharacter1IdInput" onChange={this.character1Event} type="select" value={newSquad.character1}>
                    <option key="defaultCharacter1">Select Leader</option>
                      {characters.map(this.loadCharacterSelectors)}
                    </Input>
                  </FormGroup>
                  <FormGroup className="squadFormToon">
                    <Label for="squadCharacter2Id" hidden>Character 2</Label>
                    <span className="noCharacterSelected">
                      {characters.map(x => this.loadCharacterImages(x, newSquad.character2))}
                    </span>
                    <Input id="squadCharacter2Id" name="squadCharacter2IdInput" onChange={this.character2Event} type="select" value={newSquad.character2}>
                    <option key="defaultCharacter3">Select Character</option>
                      {characters.map(this.loadCharacterSelectors)}
                    </Input>
                  </FormGroup>
                  <FormGroup className="squadFormToon">
                    <Label for="squadCharacter3Id" hidden>Character 3</Label>
                    <span className="noCharacterSelected">
                      {characters.map(x => this.loadCharacterImages(x, newSquad.character3))}
                    </span>
                    <Input id="squadCharacter3Id" name="squadCharacter3IdInput" onChange={this.character3Event} type="select" value={newSquad.character3}>
                      <option key="defaultCharacter3">Select Character</option>
                      {characters.map(this.loadCharacterSelectors)}
                    </Input>
                  </FormGroup>
                  <FormGroup className="squadFormToon">
                    <Label for="squadCharacter4Id" hidden>Character 4</Label>
                    <span className="noCharacterSelected">
                      {characters.map(x => this.loadCharacterImages(x, newSquad.character4))}
                    </span>
                    <Input id="squadCharacter4Id" name="squadCharacter4IdInput" onChange={this.character4Event} type="select" value={newSquad.character4}>
                      <option key="defaultCharacter3">Select Character</option>
                      {characters.map(this.loadCharacterSelectors)}
                    </Input>
                  </FormGroup>
                  <FormGroup className="squadFormToon">
                    <Label for="squadCharacter5Id" hidden>Character 5</Label>
                    <span className="noCharacterSelected">
                      {characters.map(x => this.loadCharacterImages(x, newSquad.character5))}
                    </span>
                    <Input id="squadCharacter5Id" name="squadCharacter5IdInput" onChange={this.character5Event} type="select" value={newSquad.character5}>
                      <option key="defaultCharacter3">Select Character</option>
                      {characters.map(this.loadCharacterSelectors)}
                    </Input>
                  </FormGroup>
                </FormGroup>
                {/* Description Box */}
                <FormGroup className="squadFormRightBottom">
                  <Label for="squadDescription">Description</Label>
                  <Input
                    id="squadDescription"
                    name="squadDescriptionInput"
                    onChange={squadDescriptionChange}
                    placeholder="All zetas on Darth Revan required!"
                    type="textarea"
                    value={newSquad.description}
                  />
                </FormGroup>
                <div className="d-flex flex-row justify-content-between">
                  <Button color="secondary" onClick={toggle} className="col-3">Cancel</Button>
                  <Button color="primary" onClick={updateSquadRow} className="col-8">Save squad</Button>{' '}
                </div>
              </div>
            </Form>
          </ModalBody>
        </Modal>;
      }
    } else {
      // NEW SQUAD MODAL
      squadListModal = <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
            <Form>
              <FormGroup className="squadFormLeft">
                <Label for="squadName">Team Name</Label>
                <Input
                  id="squadName"
                  name="squadNameInput"
                  onBlur={squadNameChange}
                  placeholder="Sith Empire"
                  type="text"
                />
              </FormGroup>
              <FormGroup className="squadFormRightTop">
                <FormGroup className="squadFormToon">
                  <Label for="squadCharacter1IdInput">Character 1</Label>
                  <span className="noCharacterSelected">
                    {characters.map(x => this.loadCharacterImages(x, newSquad.character1))}
                  </span>
                  <Input id="squadCharacter1IdInput" name="squadCharacter1IdInput" onChange={squadCharacter1Change} type="select">
                    <option key="defaultCharacter1">Select Leader</option>
                    {characters.map(this.loadCharacterSelectors)}
                  </Input>
                </FormGroup>
                <FormGroup className="squadFormToon">
                  <Label for="squadCharacter2IdInput">Character 2</Label>
                  <span className="noCharacterSelected">
                    {characters.map(x => this.loadCharacterImages(x, newSquad.character2))}
                  </span>
                  <Input id="squadCharacter2IdInput" name="squadCharacter2IdInput" onChange={squadCharacter2Change} type="select">
                    <option key="defaultCharacter2">Select Character</option>
                    {characters.map(this.loadCharacterSelectors)}
                  </Input>
                </FormGroup>
                <FormGroup className="squadFormToon">
                  <Label for="squadCharacter3IdInput">Character 3</Label>
                  <span className="noCharacterSelected">
                    {characters.map(x => this.loadCharacterImages(x, newSquad.character3))}
                  </span>
                  <Input id="squadCharacter3IdInput" name="squadCharacter3IdInput" onChange={squadCharacter3Change} type="select">
                    <option key="defaultCharacter3">Select Character</option>
                    {characters.map(this.loadCharacterSelectors)}
                  </Input>
                </FormGroup>
                <FormGroup className="squadFormToon">
                  <Label for="squadCharacter4IdInput">Character 4</Label>
                  <span className="noCharacterSelected">
                    {characters.map(x => this.loadCharacterImages(x, newSquad.character4))}
                  </span>
                  <Input id="squadCharacter4IdInput" name="squadCharacter4IdInput" onChange={squadCharacter4Change} type="select">
                    <option key="defaultCharacter4">Select Character</option>
                    {characters.map(this.loadCharacterSelectors)}
                  </Input>
                </FormGroup>
                <FormGroup className="squadFormToon">
                  <Label for="squadCharacter5IdInput">Character 5</Label>
                  <span className="noCharacterSelected">
                    {characters.map(x => this.loadCharacterImages(x, newSquad.character5))}
                  </span>
                  <Input id="squadCharacter5IdInput" name="squadCharacter5IdInput" onChange={squadCharacter5Change} type="select">
                    <option key="defaultCharacter5">Select Character</option>
                    {characters.map(this.loadCharacterSelectors)}
                  </Input>
                </FormGroup>
              </FormGroup>
              <FormGroup className="squadFormRightBottom">
                <Label for="squadDescription">Description</Label>
                <Input
                  id="squadDescription"
                  name="squadDescriptionInput"
                  onBlur={squadDescriptionChange}
                  placeholder="All zetas on Darth Revan required!"
                  type="textarea"
                />
              </FormGroup>
            </Form>
            <div className="d-flex flex-row justify-content-between">
              <Button color="secondary" onClick={toggle} className="col-3">Cancel</Button>
              <Button color="primary" onClick={addNewSquadRow} className="col-8">Add new squad</Button>{' '}
            </div>
          </ModalBody>
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
