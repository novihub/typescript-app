import './App.css'
import logo from './logo.svg'

let a: number = 10
let name: string = 'maxon'
let isGood: boolean | null = true
isGood = null

type AddressType = {
	city?: string | null
	country: string | null
}

type UserType = {
	sayHello: (message: string) => void
	name?: string
	age?: number
	isGood: boolean
	address: AddressType | null
}

let user: UserType = {
	sayHello(message) {
		alert(message)
	},
	age: 32,
	isGood: true,
	address: {
		city: 'almaty',
		country: 'kz'
	} 
}

const sum: (a: number, b: number) => number = (a, b) => {
	return a + b
}

sum(1, 2)

console.log(user.sayHello('u'))

let names: Array<string> = ['Max', 'Maxon', 'Make']
alert(names[0].toUpperCase())


let initialState = {
  name: null as string | null,
	age: null as number | null,
	isGood: null as boolean | null,
	address: [] as Array<AddressType>,
  counter: 0
}

export type initialStateType = typeof initialState

let state: initialStateType = {
  address: [{city: 'almaty', country: 'kz'}],
  age: null,
  counter: 10,
  isGood: true,
  name: 'nnn'
}

let GET_TASKS = 'APP/GET_TASKS'
type getTasksActionType = {
  type: typeof GET_TASKS
  id: number
}
let action: getTasksActionType = {
  type: GET_TASKS,
  id: 12
}

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
