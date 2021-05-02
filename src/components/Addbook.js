import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const Addbook = () => {
  const category = useSelector(state => state);
  console.log(category);

  const dispatch = useDispatch();
  const history = useHistory();
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const checkCategory = category.find(cat => cat.name === name && name);

    if (!name || !description) {
      return toast.warning("Verif filed !");
    }

    if (checkCategory) {
      return toast.error("This Category existe!");
    }
    const data = {
      id: category[category.length - 1].id + 1,
      name,
      description,
    };
  
    dispatch({ type: "ADD", payload: data });
    toast.success("Add succefully !");
    history.push("/");
  };

 

  return (
    <div className='container'>
      <h1 className='display-3 my-5 text-center'>Add Category</h1>
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
                value='Add Category'
                className='btn btn-block btn-dark'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addbook;
