import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.date}</td>
                    <td>{props.hour}</td>
                    <td>{props.Category.name}</td>
                    <td>{props.price}</td>
                </tr>
            )
    }
    
        

export default ChartRow;