import React ,{Component} from 'react'
import CarouselBox from '../Components/CarouselBox'
import {Container,CardDeck,Card,Button} from 'react-bootstrap'

export default class Home extends Component {
  render(){
     return  (
       <>
       <CarouselBox />

       <Container>
        <h2 className="text-center m-4">Our team</h2>
         <CardDeck className='m-4'>
          <Card bg="">
            <Card.Img variant="top"
            src="https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
              </Card.Text>
                <Button variant="primary">About team</Button>
            </Card.Body>
          </Card>

          <Card>
          <Card.Img variant="top"
          src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />

            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
              </Card.Text>
                <Button variant="primary">About team</Button>
            </Card.Body>


          </Card>

          <Card>
            <Card.Img variant="top"
            src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
              </Card.Text>
                <Button variant="primary">About team</Button>
            </Card.Body>
          </Card>
         </CardDeck>
       </Container>
       </>
     );
  }
}
