import React from 'react';
import './ListItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';


function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list-item" key={item.key}>
            <input type="text" value={item.text} onChange={(e) => { props.updateItem(e.target.value, item.key) }} />
            <span>  <FontAwesomeIcon className="faicons" icon="trash" onClick={() => props.deleteItem(item.key)} /> </span>
        </div>
    })
    return (

        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
}

export default ListItems