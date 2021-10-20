# pwc-poc


### Backend: Node JS

AC: 
- Create a basic node js application using express JSs
- Create a GET route which will be called from the UI (React Client) and returns the dataset to display on the frontends
- The above GET route will internally call the following URL to return the dataset to the UI :
https://jsonplaceholder.typicode.com/users

### How to run
```
cd backend
npm i
npm start
```

### Frontend: React JS

AC: 
- Create a webpage using the functional component approach of React
- Using the react hooks, make an api call to the above GET route of your node js application with the help of axios/fetch.
- Upon receiving the data from the api, store the data in the state variable.
- Display the data stored in the state variable in the table on the webpage. Make sure the entire address is displayed in a single line.
- Implement the basic filter which will filter out the results based on the text type in the filter text box. Make sure the filter is working properly for all the values across different columns of the table.

### How to run
```
cd frontend
npm i
npm start
```
