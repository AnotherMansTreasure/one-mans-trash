import React from 'react'
import {Container, Grid, Image, Button, TextArea,
   Input, Header, Icon, Segment, Divider} from 'semantic-ui-react';
import moment from 'moment';

class ListingDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listing: {
        title: this.props.listing.title,
        image: this.props.listing.photo,
        desc: this.props.listing.description,
        loc: this.props.listing.location,
      }
    }
    const borderlessTextArea={
      border: 'none',
    }
  }

  handleEditSubmit(){
    this.props.updateChanges(this.state.listing, this.props.listing)
  }

  handleImageUpload(event){
    let file = event.target.files[0];
    this.setState(state=>{
      state.listing.image = file;
    })
  }

  handleChange(key, event){
    const listing = this.state.listing;
    listing[key] = event.target.value;
    this.setState({listing: listing});
  }

  render(){
    return(
      <Grid columns={3}>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={12}>
          <Segment>
            <Grid columns={2}>
              <Grid.Column width={9}>
                {this.props.user === this.props.listing.listedBy ?
                <input onChange={this.handleImageUpload.bind(this)}
                type='file' className='inputfile'/>
                : false}
                <Image src={this.props.listing.photo} rounded/>

              </Grid.Column>
              <Grid.Column width={7}>
                <Segment>
                <Header>
                
                {this.props.user === this.props.listing.listedBy ? 
                <Input transparent onChange={this.handleChange.bind(this, 'title')}
                value={this.state.listing.title}/>  
                : this.state.listing.title}
                
                </Header><Divider/>
                <Header.Content>

                {this.props.user === this.props.listing.listedBy ? 
                <TextArea autoHeight rows={5} cols={25} onChange={this.handleChange.bind(this, 'desc')}
                value={this.state.listing.desc} style={{border: 'none',resize: 'none', outline: 'none'}}/>  
                : this.state.listing.desc}
                <Divider hidden/>
                
                Location:{this.props.user === this.props.listing.listedBy ? 
                <Input transparent onChange={this.handleChange.bind(this, 'loc')}
                value={this.state.listing.loc}/>  
                : this.state.listing.loc}
                

                </Header.Content>
                <Divider/>
                <h6>Listed on: {moment(this.props.listing.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</h6>
                
                {this.props.user === this.props.listing.listedBy ? 
                <Button onClick={this.handleEditSubmit.bind(this)}>Submit Changes</Button> : false}
                </Segment>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={2}></Grid.Column>        
      </Grid>
    )
  }
}

export default ListingDetails;