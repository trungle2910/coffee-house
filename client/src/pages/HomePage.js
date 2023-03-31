import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drinkAction } from "../redux/actions/drink.actions.js";
import Hearder from "../components/Header.js"
// import DrinkCard from "../components/DrinkCard.js";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HomePage = () => {
    const dispatch = useDispatch();
    const drinks = useSelector((state) => state.drink.drinks);
    const loading = useSelector((state)=>state.drink.loading)

    useEffect(() =>{
        dispatch(drinkAction.getAllDrink())
        console.log("drink is", drinks);
    },[dispatch]);


    return (
      <>
      
      <Hearder/>
      <div>
       {loading ? (
              <div> loading......</div>
            ) :  (<div> {drinks?.map(drink => 
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`${drink.picture_url}`} />
              <Card.Body>
                <Card.Title>{drink.name}</Card.Title>
                <Card.Text>
                 {drink.decsription}
                </Card.Text>
                <Button variant="primary">{drink.price}</Button>
              </Card.Body>
            </Card>
            )} </div> )}
      </div>
      </>
  )
}

export default HomePage

// (<div> {drinks?.map(drink => <Card> {drink.name} </Card>)} </div>