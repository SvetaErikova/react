import { useState } from "react"

export const SearchableList = ({ list }) => {

	const [searchString, setSearchString] = useState('')

	const handleSearch = (event) => {
		setSearchString(event.target.value)
		//searchString = event.target.value
}

const filteredList = list.filter((item  => item.title.toLowerCase().includes(searchString.toLowerCase())))

	return(
		<div>
			<label htmlFor="">
				<span>Поиск</span>
				<input type="text" value={searchString} onChange={handleSearch}/>
			</label>
			<ul>
				{filteredList.map(({title, id}) => <li key={id}>{title}</li>)}
			</ul>
		</div>
	)

}
