'use client'

import { useState } from 'react';
import { Input } from 'antd';
import { useTaskStore } from '@/store/useTaskStore';


const Tasks = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = Object.keys(tasks).reduce((acc, date) => {
    const filtered = tasks[date].filter((task) =>
      task.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[date] = filtered;
    }
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Tasks List</h1>
      <Input
        placeholder="Search tasks"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4"
      />
      {Object.keys(filteredTasks).map((date) => (
        <div key={date} className="mb-4">
          <h2 className="font-bold">{date}</h2>
          <ul className="list-disc pl-5">
            {filteredTasks[date].map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
