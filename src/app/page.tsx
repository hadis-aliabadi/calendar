'use client'

import { useState } from 'react';
import { Calendar, Modal, Input } from 'antd';
import { useTaskStore } from '@/store/useTaskStore';


const Home = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTask, setNewTask] = useState('');

  const handleDateSelect = (date: any) => {
    setSelectedDate(date.format('YYYY-MM-DD'));
    setIsModalVisible(true);
  };

  const handleSubmit = () => {
    if (selectedDate) {
      addTask(selectedDate, newTask);
    }
    setIsModalVisible(false);
    setNewTask('');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Task Calendar</h1>
      <Calendar fullscreen={false} onSelect={handleDateSelect} />
      <Modal
        title={`Add Task for ${selectedDate}`}
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Enter task description"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default Home;
