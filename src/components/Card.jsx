import './Card.css';

const Card = (props) => {

   console.log(props.data);

  return (
    <div className="card">
     {props.data.price==0 && <small className='header'>Free</small>}
     {props.data.price==9 && <small className='header'>Plus</small>}
     {props.data.price==49 && <small className='header'>Pro</small>}
      <h1 className='header'>${props.data.price}/month</h1>

      <hr />
      {
        props.data.features.map((feature, index) => (
          <p key={index}>
            <Condition indexValue={index}
            price={props.data.price}
            />

           
           
            {feature}</p>
        ))
      }
      <button className='btn btn-primary' disabled={props.data.price!=49}>Button</button>
    </div>
  )
}

function Condition({indexValue,price}){
  if(price==0&&indexValue<4){
    return <i class="bi bi-check"></i>;
  }else if(price==9&&indexValue<7){
    return <i class="bi bi-check"></i>;
  }else if(price==49){
    return <i class="bi bi-check"></i>;
  }
  else  {
return <i class="bi bi-x"></i>;
  }

}

export default Card;