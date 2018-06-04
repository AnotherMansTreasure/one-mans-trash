import React from 'react';
import {Grid, Segment, Image, Divider, 
  Container, Header, Label, Icon, Button} from 'semantic-ui-react';

const ListingEntry = (props) =>{
  return(
    <Grid.Column>
      <Segment>
      <Image src={props.listing.photo} rounded/>
        <Header as="h2" textAlign="center">
          <Header.Content>{props.listing.title}</Header.Content>
        </Header>
        <Container textAlign="center">
          <Label color='gray' horizontal>{props.listing.location}</Label>
        </Container>  
        <Divider/>
        <Container textAlign="center">
        <Button as='div' labelPosition='right'>
          <Button color='red'>
            <Icon name='heart' />
            Claim
          </Button>
          <Label as='a' basic color='red' pointing='left'>
            2
          </Label>
        </Button>
        </Container> 
      </Segment>

    </Grid.Column>    
  )
}

export default ListingEntry;