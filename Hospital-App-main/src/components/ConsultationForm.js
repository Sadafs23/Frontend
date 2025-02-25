import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/Consultation.css";

const Consultation = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log("Consultation Submitted:", data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset(); // Reset form after submission
    }, 3000);
  };

  return (
    <div className="consultation-container">
      <div className="consultation-card">
        <h2>Consultation Form</h2>
        <p>Please fill in the details below.</p>

        {submitted && <p className="success-message">Consultation submitted successfully!</p>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Doctor's Name</label>
            <input type="text" {...register("doctorName", { required: "Doctor's name is required" })} />
            {errors.doctorName && <p className="error-message">{errors.doctorName.message}</p>}
          </div>

          <div className="form-group">
            <label>Patient Name</label>
            <input type="text" {...register("patientName", { required: "Patient's name is required" })} />
            {errors.patientName && <p className="error-message">{errors.patientName.message}</p>}
          </div>

          <div className="form-group">
            <label>Consultation Date</label>
            <input type="date" {...register("consultationDate", { required: "Date is required" })} />
            {errors.consultationDate && <p className="error-message">{errors.consultationDate.message}</p>}
          </div>

          <div className="form-group">
            <label>Consultation Notes</label>
            <textarea {...register("notes", { required: "Consultation details are required" })}></textarea>
            {errors.notes && <p className="error-message">{errors.notes.message}</p>}
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Consultation;
