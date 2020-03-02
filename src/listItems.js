import React from 'react';
import './ListItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list-item" key={item.key}>
            <input type="text" value={item.text} onChange={ (e) => {props.updateItem(e.target.value, item.key)} } />  
            <span>  <FontAwesomeIcon className="faicons" icon="trash" onClick={ () => props.deleteItem(item.key)} /> </span>
        </div>
    })
    return (
        <div>{listItems}</div>
    )
}

export default ListItems