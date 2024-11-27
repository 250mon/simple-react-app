import React from "react";

export const TopicItem = ({ topic, onUpdate, onDelete }) => {
  return (
    <li>
      <div>
        <span>topic.title:</span>
        <span>topic.body</span>
        <button onClick={() => onUpdate(topic)}>Update</button>
        <button onClick={() => onDelete(topic.id)}>Delete</button>
      </div>
    </li>
  );
};
