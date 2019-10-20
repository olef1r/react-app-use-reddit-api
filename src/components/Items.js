import React from 'react';

export class Items extends React.Component {
  render() {
      const { data, key } = this.props;
      console.log("##@$", key)
      return (
        <div
          key = {key}
          style={{
            border: "1px solid black",
            marginBottom: "10px",
            padding: "5px"
          }}
        >
        {data.thumbnail && <img src={data.thumbnail} alt='' /> }
         <p>{data.title}</p>
         <p>Numbers of comments {data.num_comments}</p>
         <a 
           href={`https://www.reddit.com/${data.permalink}`}
           target="blank">
           Link
         </a>
       </div>
      )
  }
}
