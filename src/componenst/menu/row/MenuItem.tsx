import * as React from 'react';

type PropsType = {
    item:{
        link:string,
        title:string
    },
    key?:number
}

const MenuItem:React.FC<PropsType> = (props) => {
  console.log(props);
  return (
    <li><a href={props.item.link}>{props.item.title}</a></li>
  );
};

export default MenuItem;
