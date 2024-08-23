'use client'

import { useState } from 'react';
import { Calendar, Modal, Input } from 'antd';
import { useTaskStore } from '@/store/useTaskStore';
import Link from 'next/link';
import type { Dayjs } from 'dayjs';
const Home = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const tasks = useTaskStore((state) => state.tasks);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTask, setNewTask] = useState('');

  const handleDateSelect = (date: any) => {
    setSelectedDate(date.format('YYYY-MM-DD'));
    setIsModalVisible(true);
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

  const dateCellRender = (value:Dayjs) => {
    const date = value.format('YYYY-MM-DD');
    const dayTasks = tasks[date];

    if (dayTasks  && dayTasks.length > 0) {
      return  <div className="bg-blue-500 text-white rounded-full p-1 text-center"/>
    }

  };

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Task Calendar</h1>
      <Link href='/tasks'>tasks</Link>
      <Calendar fullscreen={false} onSelect={handleDateSelect} dateCellRender={dateCellRender} />
      <Modal
        title={`Add Task for ${selectedDate}`}
        visible={isModalVisible}
        onOk={handleOk}
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
