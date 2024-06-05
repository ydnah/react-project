import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Churnform() {
  const [creditScore, setCreditScore] = useState("");
  const [geography, setGeography] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [tenure, setTenure] = useState("");
  const [balance, setBalance] = useState("");
  const [numOfProducts, setNumOfProducts] = useState("");
  const [hasCrCard, setHasCrCard] = useState("");
  const [isActiveMember, setIsActiveMember] = useState("");
  const [estimatedSalary, setEstimatedSalary] = useState("");
  const [customerChurn, setCustomerChurn] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://django-project-production-9d8d.up.railway.app/score_json/",
        {
          first_name: "josh",
          last_name: "mears",
          CreditScore: parseFloat(creditScore),
          Geography: parseFloat(geography),
          Gender: parseFloat(gender),
          Age: parseFloat(age),
          Tenure: parseFloat(tenure),
          Balance: parseFloat(balance),
          NumOfProducts: parseFloat(numOfProducts),
          HasCrCard: parseFloat(hasCrCard),
          IsActiveMember: parseFloat(isActiveMember),
          EstimatedSalary: parseFloat(estimatedSalary),
        }
      );
      console.log(response.data);
      const score = response.data.score;
      setCustomerChurn(score);
    } catch (error) {
      console.error("Error submitting data:", error);
      setErrorMessage("error", response.data);
    }
  };

  return (
    <Stack>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Credit Score</Form.Label>
            <Form.Control
              placeholder="654"
              value={creditScore}
              onChange={(e) => setCreditScore(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Country</Form.Label>
            <Form.Control
              placeholder="France"
              value={geography}
              onChange={(e) => setGeography(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control
              placeholder="55"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Tenure</Form.Label>
          <Form.Control
            placeholder="4"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Balance</Form.Label>
          <Form.Control
            placeholder="6500"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Estimated Salary</Form.Label>
          <Form.Control
            placeholder="100,000"
            value={estimatedSalary}
            onChange={(e) => setEstimatedSalary(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Credit Card</Form.Label>
          <Form.Control
            placeholder="Yes"
            value={hasCrCard}
            onChange={(e) => setHasCrCard(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Number Of Products</Form.Label>
            <Form.Control
              value={numOfProducts}
              onChange={(e) => setNumOfProducts(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="0">Male</option>
              <option value="1">Female</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridActiveMember">
            <Form.Label>Active Member</Form.Label>
            <Form.Control
              value={isActiveMember}
              onChange={(e) => setIsActiveMember(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div>{customerChurn && <p>Predicted Class: {customerChurn}</p>}</div>
    </Stack>
  );
}
export default Churnform;
