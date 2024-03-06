import React from 'react'
import pafStyle from './projaf.css'
class ProjectAddForm extends React.Component{
    //punem ceva in stare
    constructor (props){
        super(props)
        this.state={
            title: '',
            link: '',
            year: '',
            month: '',
            day: ''
            
        }

        this.saveProject=()=>{
            this.props.onSaveProject({
                title: this.state.title,
                link: this.state.link,
                year: this.state.year,
                month: this.state.month,
                day: this.state.day
                
            })
        }
    
this.handleChange=(evt)=>{
    this.setState({
        //evt are un target=> de unde a pornit evenimentul
        //target imi permite sa accesez propr elem resp
        [evt.target.name]:evt.target.value
    })
}
    }

    render(){
        return(
      <div id="mainDivProjaf" style={pafStyle}>
        
        <div><pre><label className='lProjectAddForm' htmlFor='title'>Title:   </label>
          <input type='text'  className='cProjectAddForm' name='title' id='title' value={this.state.title}
        onChange={this.handleChange}></input></pre></div>
        
        <div> <pre>
        <label className='lProjectAddForm' htmlFor='link'>Link:    </label>
          <input type='text'  className='cProjectAddForm' name='link' id='link' value={this.state.link}
        onChange={this.handleChange}></input></pre>
        </div> 
        <div><pre>
        <label className='lProjectAddForm' htmlFor='year'>Year:    </label>
          <input type='text'  className='cProjectAddForm' name='year' id='year' value={this.state.year}     
        onChange={this.handleChange}></input></pre>
        </div> 
        <div><pre>
        <label className='lProjectAddForm' htmlFor='month'>Month:   </label>
          <input type='text' className='cProjectAddForm'  name='month' id='month' value={this.state.month}     
        onChange={this.handleChange}></input></pre>
        </div>  
        <div><pre>
        <label className='lProjectAddForm' htmlFor='day'>Day:     </label>
          <input type='text' className='cProjectAddForm'  name='day' id='day' value={this.state.day}     
        onChange={this.handleChange}></input></pre>
        </div> 
          <div>
          <input type='button' id='bAddProj' value='Create Project' onClick={this.saveProject}></input>
          </div>
          
          </div>
        )   
    }
}

export default ProjectAddForm