import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Navbar , Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './logo.svg'

const Home = () => {

    const [currentTime, setCurrentTime] = useState();
    const [counter, setCounter] = useState(0);
    const [logs, setLog] = useState('');
    useEffect(() => {
        setInterval(() => {
            const time = new Date();
            setCurrentTime(`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`)
        }, 1000)
    }, [])
    const handleClicks = () => {
        setCounter(counter + 1);
        setLog(logs + ` You clicked at ${currentTime} \n `);
        console.log(logs)
    }
    return (
        <>
            {/* <h2>Current Time is :-{currentTime}</h2>
            <h4>{counter}</h4>
            <div>{logs.split('\n').map(str => <p>{str}</p>)}</div>
            <button onClick={handleClicks}>Button Clicked</button> */}
            <Container fluid="true">
                <Row>
                    <Col md={12}>
                        <Navbar style={{backgroundColor :'#9dbc78'}}  expand="lg">
                            <Container>
                                <Navbar.Brand >
                                    <img
                                        src={Logo}
                                        width="60"
                                        height="60"
                                        className="ml-auto"
                                        alt="React Bootstrap logo"
                                    />
                                </Navbar.Brand>
                                <Navbar.Brand className="ml-auto" >
                                    Header
                                </Navbar.Brand>
                                <Navbar.Brand className="ms-auto" >
                                    <h3>Current time is: {currentTime}</h3>
                                </Navbar.Brand>
                            </Container>
                        </Navbar>
                    </Col>
                    <Col md={2} style={{ backgroundColor : '#e3be5e', height : '100vh' }}>
                        SideBar
                        <Button variant="light" onClick={handleClicks} size="lg" style={{marginTop:'120px' , backgroundColor : '#e3be5e'}}>Click Here</Button>
                    </Col>
                    <Col md={10} >
                    <Row style={{  height : '80vh' , overflowY: 'scroll' }} >
                    <div style={{textAlign:'start'}} >{logs.split('\n').map(str => <p>{str}</p>)}</div>
                    </Row>
                    <Row className="center" style={{ backgroundColor : '#5ea2e3', height : '20vh'}} >
                    Footer <div style={{alignItems:'center'}}><h2>You Clicked {counter} times</h2></div>
                    </Row>
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
}

export default Home
