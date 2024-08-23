'use client'

import { useTaskStore } from "@/store/useTaskStore";
import { Input } from "antd";
import { useState } from "react";


const getSeason = (month: number): string => {
  if (month >= 3 && month <= 5) {
    return 'spring'; 
  } else if (month >= 6 && month <= 8) {
    return 'summer'; 
  } else if (month >= 9 && month <= 11) {
    return 'fall'; 
  } else {
    return 'winter'; 
  }
};


const getBackgroundColor = (season: string): string => {
  switch (season) {
    case 'spring':
      return 'bg-green-200'; 
    case 'summer':
      return 'bg-yellow-200'; 
    case 'fall':
      return 'bg-orange-200'; 
    case 'winter':
      return 'bg-blue-200'; 
    default:
      return '';
  }
};


const formatDate = (date: string): { month: string; day: number } => {
  const dateObj = new Date(date);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const month = monthNames[dateObj.getMonth()];
  const day = dateObj.getDate();

  return { month, day };
};

const Tasks = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = Object.keys(tasks).reduce((acc, date) => {
    const taskList = tasks[date].filter(task =>
      task.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (taskList.length > 0) {
      acc[date] = taskList;
    }

    return acc;
  }, {} as Record<string, string[]>);

 
  const groupedTasks = Object.keys(filteredTasks).reduce((acc, date) => {
    const dateObj = new Date(date);
    const month = dateObj.getMonth(); 
    const season = getSeason(month + 1);
    const backgroundColor = getBackgroundColor(season);

    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push({ date, task: filteredTasks[date], backgroundColor });
    return acc;
  }, {} as Record<number, { date: string; task: string[]; backgroundColor: string }[]>);

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Tasks by Month</h1>
      
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />

     
      {Object.keys(groupedTasks).map((month) => (
        <div key={month} className="mb-4">
          <h2 className="text-xl mb-2">{formatDate(groupedTasks[parseInt(month, 10)][0].date).month}</h2>
          <div className="space-y-2">
            {groupedTasks[parseInt(month, 10)].map(({ date, task, backgroundColor }) => (
              <div key={date} className={`${backgroundColor} p-2 rounded`}>
                <strong>{formatDate(date).month} {formatDate(date).day}</strong>: {task.join(', ')}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
