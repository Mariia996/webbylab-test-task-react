import { useState } from "react";

const useForm = ({ initialState, onSubmit = () => {} }) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return [formData, setFormData, handleChange, handleSubmit];
};

export default useForm;