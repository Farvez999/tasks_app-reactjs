import { useQuery } from '@tanstack/react-query';
import { Card, CardHeader, CardBody, Typography, CardFooter, Button } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../shared/Loading';

const CompletedTask = () => {

    const { user } = useContext(AuthContext)
    const userEmail = user?.email
    // useTitle('Completed Tasks')


    const { data: CompletedTasks = [], refetch, isLoading } = useQuery({
        queryKey: ['myTask'],
        queryFn: async () => {
            const res = await fetch(`https://tasks-app-server.vercel.app/CompleteTask?email=${userEmail}`)
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

    const handelNotCompleted = (id) => {
        fetch(`https://tasks-app-server.vercel.app/task/notComplete/${id}`, {
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

    if (isLoading) {
        return <Loading />
    }


    return (
        <div className='min-h-screen w-5/6 mx-auto mb-20 '>
            {CompletedTasks?.length === 0 ?
                <h1 className='text-4xl text-center my-20 text-white'>Don't have any Task !! </h1>
                : <h1 className='text-4xl text-center my-20 text-white'>Total Task: {CompletedTasks?.length} </h1>
            }

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {
                    CompletedTasks.map((CompletedTask) => <Card key={CompletedTask?.length} >
                        <CardHeader floated={false} className=" h-48">
                            <img src={CompletedTask?.photoURL} alt="" />
                        </CardHeader>
                        <CardBody className="text-lg">
                            <Typography>
                                {
                                    CompletedTask?.task.slice(0, 100)
                                }...
                            </Typography>
                        </CardBody>
                        <CardFooter divider className="flex items-center justify-between py-3 bg-black">

                            <Typography variant="small" color="gray" className="flex gap-1">
                                <Button color="red" size="sm" onClick={() => handelDelete(CompletedTask?._id)}>Delete</Button>
                            </Typography>
                            <Typography variant="small" color="gray" className="flex gap-1">
                                <Button color="green" size="sm" onClick={() => handelNotCompleted(CompletedTask?._id)} >Not Completed</Button>
                            </Typography>
                        </CardFooter>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default CompletedTask;