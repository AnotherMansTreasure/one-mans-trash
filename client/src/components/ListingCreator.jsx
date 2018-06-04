import React from 'react';
import ReactDom from 'react-dom';
import { Button, Header, Icon, Divider,
   Container, Modal, Input, Form, TextArea } from 'semantic-ui-react'

class ListingCreator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listing : {
        image: '',
        desc: '',
        loc: '',
      },
      isOpen: false
    }
    const inputStyle={
      width: `0.1px`,
      height: `0.1px`,
      opacity: 0,
      overflow: "hidden",
      position: "absolute",
      "z-index": "-1"
    }
    const labelStyle={
      "white-space": "nowrap"
    }
  }

  open(){
    this.setState({
      isOpen:true
    })
  }

  close(){
    this.setState({
      isOpen:false
    })
  }

  handleChange(key, event){
    const listing = this.state.listing;
    listing[key] = event.target.value;
    this.setState({listing: listing});
  }

  fileSelectedHandler(event){
    let file = event.target.files[0]
    this.setState(state=>{
      state.listing.image = file
    })
  }

  submit(){
    this.props.handleCreate(this.state.listing);
    this.close();
  }

  render(){
    return(
    <Modal trigger={<div>Create Listing</div>} closeOnDimmerClick={false}>
      <Modal.Header>New Listing</Modal.Header>
      <div>
        <Divider/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        
        <Container textAlign="center">
        <div style={this.labelStyle}>
          <label htmlFor="embedpollfileinput" className="ui huge green button">
            <i className="ui upload icon"></i> 
            Upload image
          </label>
          <input onChange={this.fileSelectedHandler.bind(this)} 
          type="file"
          className="inputfile" id="embedpollfileinput" style={this.inputStyle}/>
        </div>
        </Container>
        <Divider hidden/>
        <Divider hidden/>
        <Divider hidden/>
        <Divider/>
        <Divider/>        
      </div>
      
      <Container textAlign="center">
        <TextArea onChange={this.handleChange.bind(this, 'desc')} value={this.state.listing.desc}
        autoHeight cols="60" placeholder='Short Description' />
        <Divider/>         
        <Input onChange={this.handleChange.bind(this, 'loc')} value={this.state.listing.loc}
        placeholder="Location"/>
      </Container>
      <Divider/> 
      <Modal.Actions>
        <Button type="button" onClick={this.close.bind(this)} basic color='red'>
          <Icon name='remove'/>Cancel
        </Button>
        <Button primary type="button" onClick={this.submit.bind(this)}>
          Proceed <Icon name='right chevron' />
        </Button>
      </Modal.Actions>
    </Modal>
    )
  }
}

export default ListingCreator
