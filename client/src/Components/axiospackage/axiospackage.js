import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/NavbarComp.jsx";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./Axiospackage.css"; // Import the CSS file

const Axiospackage = () => {
  const [generativeai, setGenerativeai] = useState([]);
  const [cybersecurity, setCybersecurity] = useState([]);
  const [machinelearning, setMachinelearning] = useState([]);
  const [filteredGenerativeai, setFilteredGenerativeai] = useState([]);
  const [filteredCybersecurity, setFilteredCybersecurity] = useState([]);
  const [filteredMachinelearning, setFilteredMachinelearning] = useState([]);
  const [inputType, setInputType] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5400') 
      .then((res) => {
        setGenerativeai(res.data.GenerativeAi); 
        setCybersecurity(res.data.CyberSecuritylist);
        setMachinelearning(res.data. machineLearninglist);
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  const handleInputChange = (event) => {
    setInputType(event.target.value);
  };

  const handleSearch = () => {
    const typeToSearch = inputType.trim().toLowerCase();

    if (typeToSearch === "generativeai") {
        setFilteredGenerativeai(generativeai);
        setFilteredCybersecurity([]);
        setFilteredMachinelearning([]);
    } else if (typeToSearch === "cybersecurity") {
        setFilteredCybersecurity(cybersecurity);
        setFilteredGenerativeai([]);
        setFilteredMachinelearning([]);
    } else if (typeToSearch === "machinelearning") {
        setFilteredMachinelearning(machinelearning);
        setFilteredGenerativeai([]);
        setFilteredCybersecurity([]);
    } else {
        setFilteredGenerativeai(generativeai.filter(ai => ai.type?.toLowerCase() === typeToSearch));
        setFilteredCybersecurity(cybersecurity.filter(cyber => cyber.type?.toLowerCase() === typeToSearch));
        setFilteredMachinelearning(machinelearning.filter(learning => learning.type?.toLowerCase() === typeToSearch));
    }
};

  return (
    <div>
      <Navbar 
        inputType={inputType} 
        onInputChange={handleInputChange} 
        onSearch={handleSearch} 
      />

      <Container className="wholecon">
        {/* Generative AI Courses */}
        <Row className="course-row">
          {filteredGenerativeai.length > 0 ? (
            filteredGenerativeai.map(ai => (
              <Col key={ai.id} md={4} className="mb-4">
                <Card className="course-card">
                  <Card.Img variant="top" src={ai.image} alt={ai.heading} />
                  <Card.Body>
                    <Card.Title>{ai.data1}</Card.Title>
                    <Card.Text>{ai.data2}</Card.Text>
                    <div className="course-details">
                      <h5>{ai.duration}</h5>
                      <h6>{ai.start}</h6>
                      <p>{ai.date}</p>
                    </div>
                    <Button variant="primary">Enroll</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            inputType.trim().toLowerCase() === "generativeai" && <p></p>
          )}
        </Row>

        {/* Cybersecurity Courses */}
        <Row className="course-row">
          {filteredCybersecurity.length > 0 ? (
            filteredCybersecurity.map(cyber => (
              <Col key={cyber.id} md={4} className="mb-4">
                <Card className="course-card">
                  <Card.Img variant="top" src={cyber.image} alt={cyber.heading} />
                  <Card.Body>
                    <Card.Title>{cyber.data1}</Card.Title>
                    <Card.Text>{cyber.data2}</Card.Text>
                    <div className="course-details">
                      <h5>{cyber.duration}</h5>
                      <h6>{cyber.start}</h6>
                      <p>{cyber.date}</p>
                    </div>
                    <Button variant="primary">Enroll</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            inputType.trim().toLowerCase() === "cybersecurity" && <p></p>
          )}
        </Row>

        {/* Machine Learning Courses */}
        <Row className="course-row">
          {filteredMachinelearning.length > 0 ? (
            filteredMachinelearning.map(learning => (
              <Col key={learning.id} md={4} className="mb-4">
                <Card className="course-card">
                  <Card.Img variant="top" src={learning.image} alt={learning.heading} />
                  <Card.Body>
                    <Card.Title>{learning.data1}</Card.Title>
                    <Card.Text>{learning.data2}</Card.Text>
                    <div className="course-details">
                      <h5>{learning.duration}</h5>
                      <h6>{learning.start}</h6>
                      <p>{learning.date}</p>
                    </div>
                    <Button variant="primary">Enroll</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            inputType.trim().toLowerCase() === "machinelearning" && <p></p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Axiospackage;
