import React from 'react'
import myImage from './ka7la.png'
import './App.css'
export default class App extends React.Component {
  state = {
    Person: {
      fullName: "Malek Jouini",
      bio: "Hello go my code",
      imgSrc: myImage,
      profession: "developer web",
    },
    show: true,
    date:""
  };

  toggleButton = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  componentDidMount(){
 
   setInterval(  ()=>{
     let newdate = new Date()
   newdate = newdate.getHours()+ ':' + newdate.getMinutes()
   this.setState({date:newdate})
  },1000)
}
  render() {
    return (
      <div className="box">
        {this.state.show && (
          <>
            <h2>{this.state.Person.fullName}</h2>
            <h2>{this.state.Person.bio}</h2>
            <img src={this.state.Person.imgSrc}></img>
            <h2>{this.state.Person.profession}</h2>
            <h2>{this.state.date}</h2>
            <br></br>
          </>
        )}

        <button onClick={this.toggleButton}>click here</button>
      </div>
    );
  }
}