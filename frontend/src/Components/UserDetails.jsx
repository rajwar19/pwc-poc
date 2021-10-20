import React from 'react'
import axios from 'axios'

const initialState = { usersData: [], error: null }

const UserDetails = () => {
	const [users, setUsers] = React.useState(initialState)
	const [filterRecord, setFilterRecord] = React.useState([])
	React.useEffect(() => {
		const fetchUserData = async () => {
			try {
				const { data } = await axios.get('http://127.0.0.1:3002/api/users')
				setUsers({ ...initialState, usersData: data })
				setFilterRecord(data)
			} catch (e) {
				setUsers({ ...initialState, error: e.message })
			}
		}
		fetchUserData()
	}, [])

	const { usersData } = users

	const filterData = (e) => {
		const { value } = e.target
		const filteredUser = usersData.filter(({ name, username, email, address: { street, suite, city, zipcode } }) => {
			if (value === '') return true
			const searchText = `${name} ${username} ${email} ${street} ${suite} ${city} ${zipcode}`
			return searchText.toLowerCase().includes(value.toLowerCase())
		})
		setFilterRecord(filteredUser)
	}

	return (
		<div class="userSection">
			Filter <input name="filter" type="text" onChange={filterData} />
			<table>
				<tr>
					<th>name</th>
					<th>username</th>
					<th>email</th>
					<th>address</th>
				</tr>
				{
					filterRecord.length ? filterRecord.map(({ id, name, username, email, address }) => {
						const { street, suite, city, zipcode, geo: { lat, lng } } = address
						return (
							<tr key={id}>
								<td>{name}</td>
								<td>{username}</td>
								<td>{email}</td>
								<td>{`${street} ${suite} ${city} ${zipcode} ${lat} ${lng}`}</td>
							</tr>
						)
					}): 'No recored found'
				}
			</table>

		</div>
	)
}

export default UserDetails
