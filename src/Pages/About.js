import React,{Component} from 'react'
import {Tab,Container,Nav,Row,Col } from 'react-bootstrap'

export default class About extends Component{
  render(){
    return(
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="frist">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="frist">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Freamworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
               <Tab.Content className="mt-3">
                  <Tab.Pane eventKey="frist">
                      <img src="https://cdn.dribbble.com/users/372375/screenshots/4990112/800.png" className="img-fluid"/>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                      <img src="https://newsomsk.ru/images/news/fullhd/2019/08/de0c55bd101d2a138926d08625d59237.jpg" className="img-fluid"/>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                      <img src="https://cdn.dribbble.com/users/372375/screenshots/4990112/800.png" className="img-fluid"/>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                      <img src="https://cdn.dribbble.com/users/372375/screenshots/4990112/800.png" className="img-fluid"/>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                      <img src="https://cdn.dribbble.com/users/372375/screenshots/4990112/800.png" className="img-fluid"/>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </Tab.Pane>
               </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
