import React, { useState } from "react";
import { Button, Calendar, Input } from "antd";
import Modal from "../modal/Modal";
import "./calendar.css";
const App = () => {
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: "" });
  const [existedEvent, setExistedEvent] = useState(false);

  const addEvent = () => {
    setEvents((prev) => [...prev, newEvent]);
    setModalVisible(false);
  };

  const handleSelect = (e) => {
    const date = e;
    setNewEvent((prev) => ({ ...prev, date }));
    events.map((event) => {
      if (event.date.isSame(e, "day")) {
        setExistedEvent(true);
      }
    });
    setModalVisible(true);
  };

  const handleTitle = (e) => {
    setNewEvent((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleEventClick = (event) => {
    setModalVisible(true);
  };

  const deleteEvent = (e) => {
    setEvents(events.filter((event) => event.date.day !== newEvent.date.day));
    setModalVisible(false);
  };

  const dateCellRender = (date) => {
    const event = events.find((e) => e.date.isSame(date, "day"));
    return (
      <div onClick={() => event && handleEventClick(event)}>
        {event ? <div>{event.title}</div> : null}
      </div>
    );
  };

  return (
    <>
      <Calendar
        style={{ maxWidth: "900px", margin: "0 auto" , padding:'10px'}}
        dateCellRender={dateCellRender}
        onSelect={handleSelect}
      />
      {modalVisible && (
        <Modal>
          <div className="modal">
            <input
              type="text"
              placeholder="write some event"
              value={newEvent.title}
              onChange={handleTitle}
            />
            <div className="btns">
              {existedEvent ? (
                <button onClick={deleteEvent}>Delete</button>
              ) : (
                <Button onClick={addEvent}>Add</Button>
              )}
              <Button onClick={() => setModalVisible(false)}>Cancel</Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default App;
