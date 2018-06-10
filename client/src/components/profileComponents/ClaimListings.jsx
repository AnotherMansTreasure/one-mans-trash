import React from 'react';
import { Button, Header, Icon, Modal, List } from 'semantic-ui-react'
import ClaimListingEntry from './ClaimListingEntry.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchClaimedListings} from '../../actions/ClaimedListingsActions';

class ClaimListings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  componentDidMount(){
    this.props.fetchClaimedListings(this.props.claimed);
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

  render() {

    console.log(this.props)
    return (
      <Modal
        open={this.state.isOpen}
        trigger={<div className="ui item" onClick={this.open.bind(this)}>
        <Icon name='list alternate outline'/>
        Claim Listings</div>} basic size='small'>
        <Header icon='browser' content='Claim Listings' />
        <Modal.Content>
          {
            this.props.claims.map(entry =>
              <List divided verticalAlign='middle' key={entry._id}>
                <ClaimListingEntry listing={entry}
                listingSelectHandler={this.props.listingSelectHandler.bind(this)} close={this.close.bind(this)} claimed={this.props.claimed}/>
              </List> 
            )
          }
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.close.bind(this)} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = (data) =>{
  console.log(data)
  return {claims: data.claims, listings: data.listings};
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchClaimedListings},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClaimListings);