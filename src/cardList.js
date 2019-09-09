import React from 'react';
import Card from './card';



const CardList = ({robots}) => {
    return (
        <div className="mt4">
            <div className="tc">
                {
                    robots.map((robot) => {
                        return <Card key={robot.id} name={robot.name} email={robot.email} id={robot.id}></Card>
                    })
                } 
            </div>
        </div>
    )
}
export default CardList;