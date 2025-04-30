import React from "react";
import { useState } from "react";
import  TopicItem  from "./components/TopicItem";
import  TopicForm  from "./components/TopicForm";
import  useTopics  from "./hooks/useTopics";

function App() {
  const [currentTopic, setCurrentTopic] = useState(null);
  const [topics, addTopic, updateTopic, deleteTopic] = useTopics();

  const handleUpdate = (topic) => {
    setCurrentTopic(topic);
  };

  const handleFormSubmit = (updatedTopic) => {
    updateTopic(updatedTopic);
    setCurrentTopic(null);
  };

  return (
    <div>
      <TopicForm 
        topic={currentTopic} 
        onAdd={addTopic} 
        onUpdate={handleFormSubmit} 
      />
      <ul>
        {topics.map((topic) => (
          <TopicItem
            key={topic.id}
            topic={topic}
            onUpdate={handleUpdate}
            onDelete={deleteTopic}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
