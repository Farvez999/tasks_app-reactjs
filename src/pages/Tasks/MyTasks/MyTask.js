import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../shared/Loading';
import MyTaskModal from './MyTaskModal';
import TaskCard from './TaskCard';

const MyTask = () => {

    const { user } = useContext(AuthContext)
    const [open, setOpen] = useState(false);
    const [task, setTask] = useState('');

    const userEmail = user?.email

    const { data: myTasks = [], refetch, isLoading } = useQuery({
        queryKey: ['myTask'],
        queryFn: async () => {
            const res = await fetch(`https://tasks-app-server.vercel.app/myTask?email=${userEmail}`)
            const data = await res.json();
            return data;
        }
    })


    //delete task 
    const handelDelete = (id) => {
        fetch(`https://tasks-app-server.vercel.app/myTask/delete/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    toast.success('User deleted successfully.');
                    refetch()
                }
            })
            .catch(err => {
                toast.error(err.message)
            });
    }

    const handelCompleted = (id) => {
        fetch(`https://tasks-app-server.vercel.app/task/update/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin successfully added')
                    refetch()
                }
            })
            .catch(err => {
                toast.error(err.message)
            })

    }



    const handleOpen = (data) => {
        setOpen(!open)
        setTask(data)
    };


    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='min-h-screen w-4/6 mx-auto mt-20 mb-20'>
            {myTasks?.length === 0 ?
                <h1 className='text-4xl text-center my-20 text-black'>Don't have any Task. Please First Add a task </h1>
                : <h1 className='text-4xl text-center my-20 text-black'>Total Task: {myTasks?.length} </h1>
            }
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {
                    myTasks.map((task) => <TaskCard task={task} handleOpen={handleOpen} handelDelete={handelDelete} handelCompleted={handelCompleted} key={task._id} />)
                }
            </div>
            {
                <MyTaskModal handleOpen={handleOpen} open={open} task={task} refetch={refetch} />
            }
        </div>
    );
};

export default MyTask;