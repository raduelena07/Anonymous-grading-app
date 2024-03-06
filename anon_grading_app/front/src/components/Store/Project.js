import React from 'react'

class Project extends React.Component{
render(){
    const {item}=this.props
    this.Select = () => {
        this.props.onSelect(this.props.item.id)
    }
    return (
        <div>
            <button style={{display: 'inline',
    fontStyle: 'italic',
   

   width:'250px',
    margin:'10px',
    height: '60px',
    borderRadius: '6px',
    border: '3px solid black',
    textAlign: 'center',
    fontSize:'18px',
    backgroundColor: 'white',
    fontFamily: 'Arial'}} onMouseOver="this.style.color='#cc9900'" className="butoaneProiecte" onClick={this.Select}>{item.title}</button>
        </div>
    )
}
}
export default Project