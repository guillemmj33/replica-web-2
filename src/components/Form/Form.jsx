import React from 'react';

const Form = () => {
  return (
    <div className="form">
      <form>
        <div class="mb-3">
          <label for="exampleInputName1" class="form-label">Name</label>
          <input type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" required />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
        </div>
        <div class="mb-4">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" required />
        </div>
        <button type="submit" class="btn btn-primary">Join Now</button>
      </form>
    </div>
  )
};

export default Form;