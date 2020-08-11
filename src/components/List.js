import React,{Fragment} from 'react';

class List extends React.Component{

state={
    status:false
}

rendercourse=()=>{
    return(
        <li>
            <span>{this.props.coursename.name}</span>
            <button onClick={()=>{this.isstate()}}>Edit Course</button>
            <button onClick={()=>{this.props.delete(this.props.number)}}>Delete Course</button>
        </li>
    )
}

isstate=()=>{
    const stats=this.state.status;
    this.setState({
        status: !stats
    });
}

renderupdatecourse=()=>{
    return(
        <form onSubmit={this.updatecoursename}>
            <input type="text" ref={(v)=>{this.input=v}} defaultValue={this.props.coursename.name}/>
           <button>Update Course</button>
        </form>
    )  
}

updatecoursename=(e)=>{
    e.preventDefault();
    this.props.edit(this.props.number,this.input.value);
    this.isstate();
}

  render(){
      let stat=this.state.status;
    return (
      <Fragment>
        { stat ? this.renderupdatecourse() :  this.rendercourse()}
      </Fragment>
    );
  }
}

export default List;