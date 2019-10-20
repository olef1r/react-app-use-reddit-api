import React from 'react';
import axios from 'axios';
import{ Items }from './Items';
const API_URL = 'https://www.reddit.com/r/reactjs.json?limit=100';


async function fetchData() {
    const result = await axios(API_URL);
    console.log('!!!!!!!!!!!', result.data.data.children)
    return result.data.data.children;
}

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            isLoading: false
        };
    }

    componentDidMount() {
      this.setState({ isLoading: true });
      fetchData().then(res => this.setState({ items: res, isLoading: false }))
    }

    render() {
        const { items, isLoading } = this.state;
        const itemsSortsByComments = items.sort((a, b) => b.data.num_comments - a.data.num_comments )
        return (
            <div>
              <h1>Top  commended</h1>
              <div>
              {console.log(items)}
              {isLoading ? (<p>...Loading</p>) :
                (itemsSortsByComments.map(i => <Items key={i.data.id} data={i.data} /> 
                ))}
              </div>
            </div>
        )
    }

}
export default App;