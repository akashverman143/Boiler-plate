import React, { useEffect } from "react";
// import QuizCards from './components/quizCards';
import './QuizPage.css';
import { Card, Row, Col, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const QuizPage = () => {
    const dispatch = useDispatch();
    const quizData = useSelector(state => state.quizData);
    const spinner = useSelector(state => state.spinner);
    useEffect(() => {
        dispatch({ type: 'LOAD_QUIZ_DATA'})
    }, []);

    const handleStartButton = () => {

    }
    console.log("data in component", quizData);
    return ( 
        <div className = "quizBox" >
            <div className="quizBoxHeader">
                <h1> Welcome to Code Judge </h1> 
            </div> 
            <div>
                {
                    !spinner ?
                        quizData && quizData.length > 0 && quizData.map((data) => {
                            return (
                                <div className="card" key={data.id}>
                                    <Row>
                                        <Col span={8}>
                                            <h3 className={"quiz-list-" + data.id}>{data.name}</h3>
                                        </Col>
                                        <Col offset={12} span={4}>
                                            <Link to={`/quiz/:${data.id}`} >
                                                <Button className={"start-quiz-" + data.id} onClick={handleStartButton}>
                                                    start
                                                </Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        {data.description}
                                    </Row>
                                </div>
                            );
                        }): <h3>Loading...</h3>
                }
            </div> 
        </div>
    );
}

export default QuizPage;