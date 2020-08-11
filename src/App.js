import React from 'react';
import Form from './components/Form';
import List from './components/List';


class App extends React.Component{

  state={
    course:[
      {name:'HTML'},
      {name:'CSS'},
      {name:'JAVASCRIPT'}
    ],
    current:''
  }

  insertcourse=(e)=>{
    this.setState({
      current:e.target.value
    });
  }

  addcourse=(e)=>{
    e.preventDefault();
    console.log('course added');

    const all=this.state.course,
          newcurrent=this.state.current;
          console.log(newcurrent);

    if(newcurrent !== '' ) {
      all.push({name:newcurrent});
        this.setState({
          course:all,
          current:''
        })     
    } 
    else{
      return false;  
    }
  }

  deletecourse=(index)=>{
    let all=this.state.course;
    all.splice(index,1);
    this.setState({
      course:all
    });
  }

  editcourse=(index,newvalue)=>{
    let allcourse=this.state.course;
    allcourse[index]={name:newvalue};
        console.log(allcourse);
        this.setState({
          course:allcourse
        });
  }
  render(){

    const all=this.state.course,
          length=all.length;

          const allcourses = length !== 0 ? ( all.map((course,index)=>{
            return(
              <List coursename={course} key={index} number={index} delete={this.deletecourse} edit={this.editcourse}/>
            )
          })
            ) : (
            <   p>there is no item to show</p>
            )
                    
    return (
      <section className="App">
        <div className="container">
          <h1>Courses</h1>
          <Form update={this.insertcourse} add={this.addcourse} currentcourse={this.state.current}/>
          <ul>
              {allcourses}
          </ul>
        </div>
        
      </section>  
    );
  }
}

export default App;