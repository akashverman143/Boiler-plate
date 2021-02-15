import React from "react";
import '/QuizPage.css';
import { Row, Col, Button } from 'antd';

const QuizCards = () => {
  return (
    <div className="card">
      <Row>
        <Col span={8}>
          <h3 className="quiz-list-1">Quiz</h3>
        </Col>
        <Col offset={12} span={4}>
          <Button className="start-quiz-1">
            start
              </Button>
        </Col>
      </Row>
      <hr />
      <Row>
        content
          </Row>
    </div>
  );
}

export default QuizCards;