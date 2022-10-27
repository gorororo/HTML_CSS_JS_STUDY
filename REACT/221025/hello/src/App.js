import Login from './Login'
import Prop_types from 'prop-types'
// const World = (props) =>{
//   return (
//     <h4>어서오세요 {props.user} 님 </h4>
//   );
// }
const World = (props) =>{
  let {user} = props;
  return (
    <h4>어서오세요 {user} 님 반갑습니다 </h4>
  );
}
const userName = [{id:1,user:'aaa'}, 
                  {id:2,user:'bbb'}, 
                  {id:3,user:'ccc'},
                  {id:4,user:'ddd'},
                  {id:5,user:'eee'} ];
// const userName = [{id:1,user:'aaa'}, {id:2,user:'bbb'}, {id:3,user:'ccc'},{id:4,user:'ddd'} ,{id:5,user:'eee'} ];

const getUserWelcome = (elem)=>{
  return <World key={elem.id} user={elem.user}/>;
}

const App=()=> {
  return (
    <>
      <h1>Hello</h1>
      <Login />
      {
        userName.map(getUserWelcome)
      }
    </>
  );
}

World.propTypes= {
  user : Prop_types.string.isRequired,
};


export default App;
