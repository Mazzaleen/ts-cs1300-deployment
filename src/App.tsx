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
		itemName: "Rayquaza",
		itemType: "Dragon",
		itemId: 384,
		itemDescription: "It flies through the sky in search of powerful opponents. It breathes powerful energy.",
		price: '700000',
		imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png"
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
		itemName: "Charmander",
		itemType: "Fire",
		itemId: 4,
		itemDescription: "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
		price: '10000',
		imageUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
	},
	{
		itemName: "Squirtle",
		itemType: "Water",
		itemId: 7,
		itemDescription: "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
		price: '10000',
		imageUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
	},
	
	{
		itemName: "Bulbasaur",
		itemType: "Grass",
		itemId: 1,
		itemDescription: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
		price: '10000',
		imageUrl:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
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
    },

	{
		itemName: "Magikarp",
		itemType: "Water",
		itemId: 129,
		itemDescription: "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.",
		price: '1000',
		imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png"
	},

	{
		itemName: "Evee",
		itemType: "Normal",
		itemId: 133,
		itemDescription: "Its genetic code is irregular. It may mutate if it is exposed to radiation from element STONEs.",
		price: '100000',
		imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"
	},
	{
		itemName: "Pidgey",
		itemType: "Normal",
		itemId: 16,
		itemDescription: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
		price: '50000',
		imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
	},
	{
		itemName: "Zapdos",
		itemType: "Electric",
		itemId: 145,
		itemDescription: "A legendary bird POKéMON that is said to appear from clouds while dropping enormous lightning bolts.",
		price: '1000000',
		imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png"
	},
	{
		itemName: "Moltres",
		itemType: "Fire",
		itemId: 146,
		itemDescription: "Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames.",
		price: '9500000',
		imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png"
	},
	{
		itemName: "Victreebel",
		itemType: "Grass",
		itemId: 71,
		itemDescription: "Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
		price: '120000',
		imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png"
	},
	{
		itemName: "Magmar",
		itemType: "Fire",
		itemId: 126,
		itemDescription: "Its body always burns with an orange glow that enables it to hide perfectly among flames.",
		price: '150000',
		imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png"
	},
	{
		itemName: "Parasect",
		itemType: "Grass",
		itemId: 47,
		itemDescription: "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.",
		price: '100000',
		imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png"
	},
	{
		itemName: "Hitmonchan",
		itemType: "Fighting",
		itemId: 107,
		itemDescription: "While apparently doing nothing, it fires punches in lightning fast volleys that are impossible to see.",
		price: '200000',
		imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png"
	},

	
	{
		itemName: "Voltrob",
		itemType: "Electric",
		itemId: 100,
		itemDescription: "Usually found in power plants. Easily mistaken for a POKé BALL, they have zapped many people.",
		price: '100000',
		imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png"
	},
	

	{
		itemName: "Machomp",
		itemType: "Fighting",
		itemId: 68,
		itemDescription: "Loves to build its muscles. It trains in all styles of martial arts to become even stronger.",
		price: '110000',
		imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png"
	},
	
	


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
	const [priceId, SetPriceOrder]: [boolean | undefined, any] = useState(false) 

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

		if (state === "option2") {
			SetPriceOrder(true)
		} else {
			SetPriceOrder(false)
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
				<Heading as='h3' size='s' className="heading">
					<i> Limit one of each Pokemon per Brown Student </i>
				</Heading>
				<div className="filter-wrapper">
					<FormControl className="filter" onChange={(e) => changeType(e)}>
						<FormLabel>Type</FormLabel>
						<Select placeholder='Any'>
							<option value='Normal'>Normal</option>
							<option value='Grass'>Grass</option>
              <option value='Water'>Water</option>
              <option value='Fire'>Fire</option>
							<option value='Psychic'>Psychic</option>
              <option value='Fighting'>Fighting</option>
              <option value='Electric'>Electric</option>
			  <option value='Flying'>Dragon</option>
						</Select>
					</FormControl>
					<FormControl onChange={(e) => changePrice(e)}>
						<FormLabel>Price Range</FormLabel>
						<Select placeholder='Any'>
							<option value='option1'>100K or Lower </option>
							<option value='option2'>100K-250K</option>
							<option value='option3'>250K-500K</option>
							<option value='option4'>500K or Higher</option>
						</Select>
					</FormControl>
					<FormControl onChange={(e) => changeSort(e)}>
						<FormLabel>Sort by</FormLabel>
						<Select placeholder='Any'>
							<option value='option1'>Poke-ID</option>
							<option value='option2'>Price</option>
						</Select>
					</FormControl>
{/* </div> */}
				
</div>
<div className="button-wrapper">
					<Button className="Cart-button"   width = "200px" colorScheme='orange' variant='solid' onClick={(e) => setCartOn(!cartOn)}>
						View Cart
					</Button>

          			<Button className="Cart-button"   width = "100px" colorScheme='yellow' variant='solid' onClick={(e) => refresh()}>
						Empty Cart
					</Button>
		</div>

          <div className="cart-total">
						<b>Total: ${total} </b>
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