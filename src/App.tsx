import * as React from "react"
import {
	ChakraProvider,
	Heading,
	theme,
	Select,
	FormControl,
	FormLabel,
	Button
} from "@chakra-ui/react"
import "./App.css"
import { useState } from "react"
import { Item, IItem } from "./components/item"
import { createTypeReferenceDirectiveResolutionCache } from "typescript"


export const itemsArray: IItem[] = [

    {
        itemName: "Gengar",
		itemType: "Psychic",
		itemId: 94,
		itemDescription: "Dark and shadowy, it is said to appear before people to steal their spirits.",
		price: '190000',
		imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"
    },

    {
        itemName: "Snorlax",
		itemType: "Fighting",
		itemId: 143,
		itemDescription: "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",
        price: '410000',
        
		imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
    },

    {
        itemName: "Mew",
		itemType: "Psychic",
		itemId: 151,
		itemDescription: "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
        price: '900000',
		imageUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
    },

    {
        itemName: "Dragonite",
		itemType: "Dragon",
		itemId: 149,
		itemDescription: "An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans.",
        price: '500000',
		imageUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"
    },
    {
        itemName: "Charizard",
        itemType: "Fire",
        itemId: 6,
        itemDescription: "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
        price: '90000',
        imageUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
    },
    {
        itemName: "Blastoise",
        itemType: "Water",
        itemId: 9,
        itemDescription: "A brutal Pokémon with pressurized water jets on its shell. They are used for high speed tackles.",
        price: '80000',
        imageUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
    },
    {
        itemName: "Venusaur",
        itemType: "Grass",
        itemId: 3,
        itemDescription: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        price: '70000',
        imageUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
    },
    {
        itemName: "Pikachu",
        itemType: "Electric",
        itemId: 25,
        itemDescription: "When several of these POKéMON gather, their electricity could build and cause lightning storms.",
        price: '125000',
        imageUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
    },
    {
        itemName: "Mewtwo",
        itemType: "Psychic",
        itemId: 150,
        itemDescription: "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.",
        price: '10000000',
        imageUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
    },
    {
        itemName: "Alakazam",
        itemType: "Psychic",
        itemId: 65,
        itemDescription: "It uses its brain to execute complex plans. While it sleeps, it constantly dreams.",
        price: '200000',
        imageUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png"
    },
    {
        itemName: "Gyarados",
        itemType: "Water",
        itemId: 130,
        itemDescription: "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.",
        price: '400000',
        imageUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png"
    },

    {
        itemName: "Porygon",
        itemType: "Normal",
        itemId: 137,
        itemDescription: "A POKéMON that consists entirely of programming code. Capable of moving freely in cyberspace.",
        price: '900000',
        imageUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png"
    },
    {
        itemName: "Mudkip",
        itemType: "Water",
        itemId: 258,
        itemDescription: "Lives on land and in water. Mudkip's footprints are always found in muddy areas.",
        price: '100000',
        imageUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png"
    }


]
export const App = () => {
	const [currentArray, setCurrentArray]: [IItem[], any] = useState(itemsArray)

    //Setting the state for the select
	const [cart, setCart]: [IItem[], any] = useState([])
	const [total, setTotal] = useState(0)
	const [type, setType]: [string | undefined, any] = useState(undefined)

    //Filtering & Sorting the array based on the select
	const [priceFilter, setPriceFilter]: [string | undefined, any] = useState(undefined)
	const [sortId, setSortId]: [boolean | undefined, any] = useState(false) 

	React.useEffect(() => {
		displayCards()
	}, [type, priceFilter, sortId])

	React.useEffect(() => {
		console.log(cart)
	}, [cart])

	const changeType = (e: any) => {
		const state = e.target.value
		if (state === "") {
			setType(undefined)
		} else {
			setType(state)
		}
	}

	const changeSort = (e: any) => {
		const state = e.target.value
		if (state === "option1") {
			setSortId(true)
		} else {
			setSortId(false)
		}
    console.log(state)
	}

	const refresh = () => {
		window.location.reload();
	}
	
	const changePrice = (e: any) => {
		
		const state = e.target.value
		if (state === "") {
			setPriceFilter(undefined)
		} else {
			setPriceFilter(state)
		}
		console.log(priceFilter)
	}


	const displayCards = () => {
		let resultArray: IItem[] = JSON.parse(JSON.stringify(itemsArray))
		
		// sort pokemons by id
		if (sortId) {
			resultArray = resultArray.sort((a: IItem, b: IItem) => {
				return Number(a.itemId) - Number(b.itemId)
			})
      
		} 
		

		// filter pokemons by type
		if (type !== undefined) {
			resultArray = resultArray.filter((item) => {
				return (item.itemType === type)
			})
		}
		console.log(priceFilter)

		// filter pokemons by price
		if (priceFilter !== undefined) {
			resultArray = resultArray.filter((item) => {
				switch (priceFilter) {
					case 'option1': {
						return (+item.price < 100000)
					}
					case 'option2': {
						return (+item.price > 100000 && +item.price <= 250000)
					}
					case 'option3': {
						return (+item.price > 250000 && +item.price <= 500000)
					}
					case 'option4': {
						return (+item.price > 500000)
					}
				}
			})
		}

		setCurrentArray(resultArray)
	}

	const [cartOn, setCartOn] = useState(false)
	

	const displayArray = cartOn ? cart : currentArray

	return (
		<ChakraProvider theme={theme} >
			<div className="wrapper">
				<Heading as='h2' size='xl' className="heading">
					Brown University PokeMart
				</Heading>
				<Heading as='h3' size='l' className="heading">
					A collection of the most popular Pokemon in the world that happen to be avaliable on BrownU's markeplace.
				</Heading>
				<div className="filter-wrapper">
					<FormControl className="filter" onChange={(e) => changeType(e)}>
						<FormLabel>Types</FormLabel>
						<Select placeholder='Type'>
							<option value='Normal'>Normal</option>
							<option value='Grass'>Grass</option>
              <option value='Water'>Water</option>
              <option value='Fire'>Fire</option>
							<option value='Psychic'>Psychic</option>
              <option value='Fighting'>Fighting</option>
              <option value='Electric'>Electric</option>
						</Select>
					</FormControl>
					<FormControl onChange={(e) => changePrice(e)}>
						<FormLabel>Price Range</FormLabel>
						<Select placeholder='Price Range'>
							<option value='option1'>100K or Lower </option>
							<option value='option2'>100K-250K</option>
							<option value='option3'>250K-500K</option>
							<option value='option4'>500K or Higher</option>
						</Select>
					</FormControl>
					<FormControl onChange={(e) => changeSort(e)}>
						<FormLabel>Sort by</FormLabel>
						<Select placeholder='Sort By'>
							<option value='option1'>ID</option>
						</Select>
					</FormControl>

					<Button className="Cart-button" colorScheme='teal' variant='solid' onClick={(e) => setCartOn(!cartOn)}>
						View Cart
					</Button>

          <Button className="Cart-button" colorScheme='yellow' variant='solid' onClick={(e) => refresh()}>
						Empty Cart
					</Button>

          <div className="cart-total">
						<b>Cart total amount: ${total} </b>
					</div>
          
				</div>
   
				<div className="MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded">
					{displayArray.map((item) => {
						return (
              <Item
								key = {item.itemId}
                itemName = {item.itemName}
                itemType = {item.itemType}
                itemId =  {item.itemId}
                itemDescription = {item.itemDescription}
                price = {item.price}
                imageUrl = {item.imageUrl}
								cart = {cart}
								cartOn = {!cartOn}
								setCart = {setCart}
								total = {total}
								setTotal = {setTotal}
								/>)
							})}
				</div>
			</div>
		</ChakraProvider >
	)
}