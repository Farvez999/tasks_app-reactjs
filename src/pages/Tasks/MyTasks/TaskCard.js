import React from 'react';
import { Card, CardHeader, CardBody, Typography, CardFooter, Button } from '@material-tailwind/react';

const TaskCard = ({ task, handelCompleted, handelDelete, handleOpen }) => {
    return (
        // <Card key={task.length} >
        //     <CardHeader floated={false} className=" h-48">
        //         <img src={task.photoURL} alt="" />
        //     </CardHeader>
        //     <CardBody className="text-lg">
        //         <Typography>
        //             {
        //                 task?.task.slice(0, 100)
        //             }...
        //         </Typography>
        //     </CardBody>
        //     <CardFooter divider className="flex items-center justify-between py-3 bg-black">
        //         <Typography variant="small">
        //             <Button color="blue" size="sm" onClick={() => handleOpen(task)}>update</Button>

        //         </Typography>
        //         <Typography variant="small" color="gray" className="flex gap-1">
        //             <Button color="red" size="sm" onClick={() => handelDelete(task._id)}>Delete</Button>
        //         </Typography>
        //         <Typography variant="small" color="gray" className="flex gap-1">
        //             <Button color="green" size="sm" onClick={() => handelCompleted(task._id)} >Completed</Button>
        //         </Typography>
        //     </CardFooter>
        // </Card>

        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                    <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
            </div>
        </div>
    );
};

export default TaskCard;