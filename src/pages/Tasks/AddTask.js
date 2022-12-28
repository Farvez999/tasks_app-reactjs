import React from 'react';

const AddTask = () => {
    return (
        // <div className='w-96'>

        //     <fieldset className="w-full space-y-1 dark:text-gray-100">
        //         <label for="Search" className="hidden">Search</label>
        //         <div className="relative">
        //             {/* <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        //                 <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
        //                     <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
        //                         <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
        //                     </svg>
        //                 </button>
        //             </span> */}
        //             <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" />
        //         </div>
        //     </fieldset>

        //     <fieldset className="w-full space-y-1 dark:text-gray-100">
        //         <label for="files" className="block text-sm font-medium">Upload Photo</label>
        //         <div className="flex justify-center">
        //             <input type="file" name="files" id="files" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
        //         </div>
        //     </fieldset>
        // </div>
        <div className="flex items-center justify-center text-center dark:bg-gray-900 dark:text-gray-100">
            <form novalidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid">
                {/* <label for="username" className="self-start text-xs font-semibold">Username or Email</label> */}
                <input id="username" type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400 border-2 border-dashed" placeholder="Add Tasks..." />

                <fieldset className="w-full space-y-1 dark:text-gray-100 mt-4">
                    <label for="files" className="flex text-sm font-medium">Add Task Photo</label>
                    <div className="flex">
                        <input type="file" name="files" id="files" className="px-14 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
                    </div>
                </fieldset>

                <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-yellow-500">Add Task</button>

            </form>
        </div>
    );
};

export default AddTask;