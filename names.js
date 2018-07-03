import React from 'react';


function names(props) {
    console.log(props);
    return(
        <div className='mainComponent' >
            {props.data.map((person)=> {
                return <div >
                    <div >
                        <h1>Name: {person.name} </h1>
                        <h3>username: {person.username} </h3>
                    </div>
                </div>
            })

            }</div>
    )



}
export default names;