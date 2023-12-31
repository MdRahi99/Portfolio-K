import {AiFillDelete} from '@react-icons/all-files/ai/AiFillDelete';

const AdminProjectsList = ({projectData, handleDelete}) => {

    console.log(projectData);

    return (
        <div className="overflow-x-auto mt-12">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projectData.map((data, index) => {
                            const {_id, title, category} = data;
                            return <tr key={index + 1} className="hover">
                            <th>{index + 1}</th>
                            <td>{title}</td>
                            <td>{category}</td>
                            <td><button onClick={() => handleDelete(_id)}><AiFillDelete className='text-xl text-orange-600 hover:text-white ml-2' /></button></td>
                        </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AdminProjectsList;