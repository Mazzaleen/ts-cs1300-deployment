import React, { useState } from 'react';
import "./item.css"
import {
	Button, CardFooter
} from "@chakra-ui/react"

//Iterface for Items in website 
export interface IItem {
  itemName: string,
  itemType: string,
  itemId: number,
  itemDescription: string,
  price: string,
  imageUrl: string,
}

//Interface for props
export interface IItemProps {
	itemName: string,
	itemType: string,
	itemId: number,
  itemDescription: string,
  price: string,
  imageUrl: string,
	cart: IItem[]
	cartOn: boolean,
	setCart: (cart: IItem[]) => void
	total: number,
	setTotal: (total: number) => void
}

export const Item = (props: IItemProps) => {
	const { itemName, itemType, itemId, itemDescription, price, imageUrl, cart, cartOn, setCart, total, setTotal} = props
	const [selected, setSelected] = useState(false);
	

	const handleSelect = () => {
		if (!selected) {
			
			const newArray: IItem[] = JSON.parse(JSON.stringify(cart))
			const hello = newArray.concat([{itemName, itemType, itemId, itemDescription, price, imageUrl}])
			setTotal(total + +price)
			setCart(hello)
			
		} else {
			const newArray: IItem[] = cart.filter(item => item.itemId !== itemId)
			setTotal(total - +price)
			setCart(newArray)
		}
		setSelected(!selected)		
	}

	return (
		<div className="item-wrapper">
				<div className="left-flex">
					<div>
						<div className="header">
						<div><b> #{itemId} </b></div>
						
						
						</div>
						
						<div className="itemName"><b>{itemName}</b></div>
						<div><i> {price} ¥</i></div>
						<div><b>Type: </b>{itemType}</div>
						<div>{itemDescription}</div>
					</div>
					
				{cartOn && <Button colorScheme='teal' variant={selected ? "outline" : "solid"} size='s'  onClick={handleSelect}>
					{selected ? "Remove  Item From Cart" : "Add Item to cart"}
					</Button>}	
			</div>
				
		
			<div>
				<img src={imageUrl} alt= {itemName}  width="250" height="350"></img>
			</div>
		</div>
	);
}