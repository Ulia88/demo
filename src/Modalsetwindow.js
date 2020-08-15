import React, {useState} from 'react';

import './App.css';
import {Modal, Label, Input, ModalHeader, ModalBody, ModalFooter, Button, Col, Row} from 'reactstrap';


function Modalsetwindow(props) {


    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newPriority, setNewPriority] = useState(0)
    const [newStatus, setNewStatus] = useState("todo")

    const closeModalWindow = () => {
        props.addNewCard(newTitle, newPriority, newStatus)
        setIsModalOpen(false)
        setNewTitle('')
    }

       return (
        <>
            <Button onClick={() => setIsModalOpen(true)}> Add New Task</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader> Would You Like to Add New Task? </ModalHeader>
                <ModalBody>

                    <Label> New Title</Label>
                    <Input type='text' value={newTitle}
                           onChange={(e) => setNewTitle(e.target.value)}/> {/*e global object that works with value*/}


                    <Row>
                        <Col>
                            <Label> priority </Label>
                            <Input type='select' value={newPriority} onChange={(e)=> setNewPriority(e.target.value)}>
                                <option value={0}> Low</option>
                                <option value={1}> Medium</option>
                                <option value={2}> High </option>

                            </Input>
                        </Col>
                        
                        <Col>
                            <Label> Status</Label>
                            <Input type='select' value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                                <option value={'todo'}> Todo</option>
                                <option value={'in progress'}> In progress</option>
                                <option value={'review'}> Review</option>
                                <option value={'done'}> Done</option>

                            </Input>
                        </Col>

                    </Row>


                </ModalBody>


                <ModalFooter>
                    <Button onClick={closeModalWindow}> Create New Task</Button>
                    {' '}

                    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>


            </Modal>
        </>
    );
}

export default Modalsetwindow;
