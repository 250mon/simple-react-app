import { useState } from "react";

function useTopics() {
  const [nextId, setNextId] = useState(1);
  const [topics, setTopics] = useState([]);

  const addTopic = (topic) => {
    const newTopic = {
      id: nextId,
      title: topic.title,
      body: topic.body,
    };
    setTopics([...topics, newTopic]);
    setNextId(nextId + 1);
  };

  const updateTopic = (topicUpdate) => {
    const { id, title, body } = topicUpdate;
    const newTopics = topics.map((topic) =>
      topic.id === id ? { ...topic, title, body } : topic,
    );
    setTopics(newTopics);
  };

  const deleteTopic = (id) => {
    setTopics(topics.filter((topic) => topic.id !== id));
  };

  return [topics, addTopic, updateTopic, deleteTopic];
}

export default useTopics;
