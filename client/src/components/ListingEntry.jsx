import React from 'react';
import {Grid, Segment, Image, Divider,
  Container, Header, Label, Icon, Button} from 'semantic-ui-react';

const ListingEntry = (props) =>{
  const claimHandler = () => {
    props.handleClaim(props.listing._id, props.listing.interested_users)
  }

  return(
    <Grid.Column>
      <Segment>
      <Image src={props.listing.photo} onClick={()=>{props.selectHandler(props.listing)}} rounded/>
        <Header as="h2" textAlign="center">
          <Header.Content onClick={()=>{props.selectHandler(props.listing)}}>{props.listing.title}</Header.Content>
        </Header>
        <Container textAlign="center">
          <Label color='grey' horizontal>{props.listing.location}</Label>
        </Container>
        <Divider/>
        <Container textAlign="center">
        <Button as='div' labelPosition='right' >
          <Button color='orange' onClick={() => claimHandler()}>
            <Icon name='heart' />
            Claim
          </Button>
          <Label as='a' basic color='orange' pointing='left'>
            {props.listing.interested_users.length}
          </Label>
        </Button>
        </Container>
      </Segment>

    </Grid.Column>
  )
}

export default ListingEntry;

// ajax call to server sending data: {listing: , user_id: }