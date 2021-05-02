import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Editbook = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
 
  const history = useHistory();
 
  const { id } = useParams();
  

  
  const categorys = useSelector(state => state);
  
  const currentCategory = categorys.find(
    category => category.id === parseInt(id)
  );

  useEffect(() => {
    if (currentCategory) {
      setName(currentCategory.name);
      setDescription(currentCategory.description);
    }
  }, [currentCategory]);

  const handleSubmit = e => {
    e.preventDefault();

    const checkCategory = categorys.find(
      (category) => category.id !== parseInt(id) && category.name === name
    );

    if (!name || !description) {
      return toast.warning("Verif filed !");
    }

    if (checkCategory) {
      return toast.error("This Category existe!");
    }

    const data = {
      id: parseInt(id),
      name,
      description,
    };

    dispatch({ type: "UPDATE", payload: data });
    toast.success("Update succefully !");
    history.push("/");
  };

  return (
    <div className='container'>
      {currentCategory ? (
        <>
          <h1 className='display-3 my-5 text-center'>Edit Category {id}</h1>
          <div className='row'>
            <div className='col-md-6 shadow mx-auto p-5'>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='name'
                    className='form-control'
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='description'
                    className='form-control'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='submit'
                    value='Edit Category'
                    className='btn btn-dark'
                  />

                  <Link to='/' className='btn btn-danger ml-3'>
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1> Category not exist with id {id}</h1>
      )}
    </div>
  );
};

export default Editbook;
