import React from 'react';
export default class GenericCardContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log("props0: ", this.props);
  }
  render() {
    console.log("props: ", this.props);
    return(
      <div style={{height: 500, width: "100%", overflowY: "auto",display: "flex", flexDirection: "column", alignItems:"center", justifyContent: "center"}}>
        {this.props.cards.map((card) => {
          return(card);
        })}
      </div>
    );
  }
}