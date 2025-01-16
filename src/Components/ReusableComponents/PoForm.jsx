import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../CSS/PoForm.css";
import axios from "../../utils/axios"
const PoForm = () => {


    const initialValues = {
        requesterName: "",
        requesterEmail: "",
        requesterAddress: "",
        requesterDepartment: "",
        requestId: "",
        requestDate: "",
        category: "",
        productName: "",
        itemDescription: "",
        quantity: "",
        shipTo: "",
        unitPrice: "",
        totalPrice: "",
        createdDate: "",
        modifiedDate: "",
      };
    
      // Validation schema
      const validationSchema = Yup.object({
        requesterName: Yup.string().required("Requester Name is required"),
        requesterEmail: Yup.string()
          .email("Invalid email format")
          .required("Requester Email is required"),
        requesterAddress: Yup.string().required("Requester Address is required"),
        requesterDepartment: Yup.string().required("Requester Department is required"),
        requestId: Yup.string().required("Request ID is required"),
        requestDate: Yup.date().required("Request Date is required"),
        category: Yup.string().required("Category is required"),
        productName: Yup.string().required("Product Name is required"),
        itemDescription: Yup.string().required("Item Description is required"),
        quantity: Yup.number()
          .typeError("Quantity must be a number")
          .positive("Quantity must be greater than zero")
          .required("Quantity is required"),
        shipTo: Yup.string().required("Ship To is required"),
        unitPrice: Yup.number()
          .typeError("Unit Price must be a number")
          .positive("Unit Price must be greater than zero")
          .required("Unit Price is required"),
        totalPrice: Yup.number()
          .typeError("Total Price must be a number")
          .positive("Total Price must be greater than zero")
          .required("Total Price is required"),
        createdDate: Yup.date().required("Created Date is required"),
        modifiedDate: Yup.date().required("Modified Date is required"),
      });
    
      // Handle form submission
      const onSubmit = async (values,{ resetForm }) => {
        try {
            const response = await axios.post("http://172.16.22.35:9001/purchase-requests", values);
            console.log("Form Data Submitted Successfully:", response.data);
            alert("Form submitted successfully!");
            resetForm(); // Reset the form fields
          } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while submitting the form. Please try again.");
          }
      };

  return (
    <>
 <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
  {({ isSubmitting }) => (
    <FormikForm>
      
        <Container className="po-form">
          <h1>Purchase Order Form</h1>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Requester Name</Form.Label>
                <Field
                    name="requesterName"
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                   <ErrorMessage name="requesterName" component="div" className="text-danger" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Requester Email</Form.Label>
                <Field
                    name="requesterEmail"
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                  <ErrorMessage name="requesterEmail" component="div" className="text-danger" />
              </Form.Group>
            </Col>

          </Row>
            <Row>
                <Col>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Requester Address</Form.Label>
                    <Field
                    name="requesterAddress"
                    type="text"
                    className="form-control"
                    placeholder="Enter Address"
                  />
                  <ErrorMessage name="requesterAddress" component="div" className="text-danger" />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Requester Department</Form.Label>
                    <Field
                    name="requesterDepartment"
                    type="text"
                    className="form-control"
                    placeholder="Enter Department"
                  />
                  <ErrorMessage name="requesterDepartment" component="div" className="text-danger" />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Request ID</Form.Label>
                    <Field
                    name="requestId"
                    type="text"
                    className="form-control"
                    placeholder="Enter ID"
                    />
                    <ErrorMessage name="requestId" component="div" className="text-danger" />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Request Date</Form.Label>
                    <Field  
                    name="requestDate"
                    type="date"
                    className="form-control"
                    placeholder="Enter Date"
                    />
                    <ErrorMessage name="requestDate" component="div" className="text-danger" />

                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Category</Form.Label>
                    <Field
                    name="category"
                    type="text"
                    className="form-control"
                    placeholder="Enter Category"
                    />
                    <ErrorMessage name="category" component="div" className="text-danger" />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                   <Field
                    name="productName"
                    type="text"
                    className="form-control"
                    placeholder="Enter Product Name"
                    />
                    <ErrorMessage name="productName" component="div" className="text-danger" />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Item Description</Form.Label>
                    <Field
                    name="itemDescription"
                    type="text"
                    className="form-control"
                    placeholder="Enter Description"
                    />
                    <ErrorMessage name="itemDescription" component="div" className="text-danger" />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Quantity</Form.Label>
                    <Field
                    name="quantity"
                    type="number"
                    className="form-control"
                    placeholder="Enter Quantity"
                    />
                    <ErrorMessage name="quantity" component="div" className="text-danger" />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Ship To</Form.Label>
                    <Field
                    name="shipTo"
                    type="text"
                    className="form-control"
                    placeholder="Enter Address"
                    />
                    <ErrorMessage name="shipTo" component="div" className="text-danger" />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Unit Price</Form.Label>
                   <Field
                   name="unitPrice"
                   type="text"
                   className="form-control"
                   placeholder="Enter Price"
                     />
                        <ErrorMessage name="unitPrice" component="div" className="text-danger" />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Total Price</Form.Label>
                    <Field
                    name="totalPrice"
                    type="text"
                    className="form-control"
                    placeholder="Enter Price"
                    />
                    <ErrorMessage name="totalPrice" component="div" className="text-danger" />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Created Date</Form.Label>
                    <Field
                    name="createdDate"
                    type="date"
                    className="form-control"
                    placeholder="Enter Date"
                    />
                    <ErrorMessage name="createdDate" component="div" className="text-danger" />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Modified Date</Form.Label>
                    <Field
                    name="modifiedDate"
                    type="date"
                    className="form-control"
                    placeholder="Enter Date"
                    />
                    <ErrorMessage name="modifiedDate" component="div" className="text-danger" />
                </Form.Group>
                </Col>
            </Row>
            <Button
              className="mt-2"
              variant="primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            
        </Container>
      
        </FormikForm>
  )}
  </Formik>
    </>
    
  );
};

export default PoForm;
