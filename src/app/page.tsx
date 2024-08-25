'use client'

import { useState } from 'react';
import { Calendar, Modal, Input, Card } from 'antd';
import { useTaskStore } from '@/store/useTaskStore';
import Link from 'next/link';
import type { Dayjs } from 'dayjs';
  
interface HandleDateSelectParams {
  source: string;
}

const Home = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const tasks = useTaskStore((state) => state.tasks);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [season,setSeason]=useState('season-summer')

  const handleDateSelect = (date:Dayjs, { source }:HandleDateSelectParams) => {
    const month =date.month();
    if (month >= 3 && month <= 5) {
      setSeason('season-spring'); 
    } else if (month >= 6 && month <= 8) {
      setSeason('season-summer'); 
    } else if (month >= 9 && month <= 11) {
      setSeason('season-fall'); 
    } else {
      setSeason('season-winter'); 
    }

    if (source === 'date') {
    setSelectedDate(date.format('YYYY-MM-DD'));
    setIsModalVisible(true);
    }
  };

  const handleOk = () => {
    if (selectedDate) {
      addTask(selectedDate, newTask);
    }
    setIsModalVisible(false);
    setNewTask('');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const cellRender = (value:Dayjs) => {
    const date = value.format('YYYY-MM-DD');
    const dayTasks = tasks[date];

    if (dayTasks  && dayTasks.length > 0) {
      return  <div className="bg-blue-500 text-white rounded-full p-1 text-center"/>
    }

  };



  return (
    <Card 
        title="Task Calendar" 
        className={season} 
        extra={<Link className=' font-bold' href="/tasks">Go to tasks</Link>} 
        style={{ width: 600 }}
      >
        <Calendar 
          fullscreen={false} 
          onSelect={handleDateSelect} 
          cellRender={cellRender} 
        />
        <Modal
          title={`Add Task for ${selectedDate}`}
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input
            placeholder="Enter task description"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </Modal>
    </Card>
  );
};

export default Home;
