import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const category = useSelector(state => state);
const dispatch = useDispatch();

const deleteCategory = (id) => {
  dispatch({type: "DELETE", payload:id})
  toast.success("category deleted");
}


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 my-5 text-right'>
          <Link to='/add' className='btn btn-outline-dark'>
            Add Contact
          </Link>
        </div>

        <div className='col-md-10 mx-auto'>
          <table className='table table-hover'>
            <thead className='text-white bg-dark text-center'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                 <th scope='col'>Description</th>
                 <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                category.map((category,id) => (
                  <tr key={id}>
                 
                  <td>{id+1}</td>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>
                    <Link to={`/edit/${category.id} `} className="btn btn-small btn-warning mr-2">Edit</Link>
                  <button type="button" className="btn btn-small btn-danger" 
                  onClick={()=> deleteCategory(category.id)}>Delete</button>
                  </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
