import React, {Component} from "react";
import Toolbar from "./Toolbar/Toolbar";
import Backdrop from "./Backdrop/Backdrop";
import ListOfPages from "../ListOfPages";
import SearchPage from "./SearchPage/SearchPage";
import ProfileOnNewsPage from "./ProfileOnNewsPage/ProfileOnNewsPage";
import SharingPosts from "./SharingPosts/SharingPosts";

import SideDrawer from "./SideDrawer/SideDrawer"
import PostsList from "../post/post-list";
import "./home.scss";

class Home extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
        let sideDrawer;
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return (
            <div className="stars">
                <div className="twinkling">
                    <div className="home-page">
                        <div style={{height: '100%'}}>

                        </div>
                        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                        <div className="bording">
                            <PostsList posts={this.props.posts}/>
                        </div>
                        <div>
                            <SearchPage/>
                            <ProfileOnNewsPage/>
                            <SharingPosts/>
                            <SideDrawer show={this.state.sideDrawerOpen}/>
                            {sideDrawer}
                            {backdrop}
                        </div>
                        <ListOfPages/>
                    </div>
                </div>
            </div>
        );
    }
}


// class Home extends Component{
//      render(){
//             return(
//                 <div className="App">
//                    <Cliker/>
//                 </div> 
//             )
//         }
//         }


// class Home extends Component{
// render(){
//     return(
//         <div className='App'>
//             <Lotery />
//             <Lotery title='Mini Daily' maxNum={10} maxBalls={4}/>
//         </div> 
//     )
// }
// }


// class App extends Component{
//     constructor(){
//         super();
//         this.state = {
//             character:{},
//             loading: false
//         };
//     }

//     componentDidMount(){
//         this.setState({loading: true})
//         fetch("https://swapi.co/api/people/2")
//         .then(response => response.json())
//         .then(data =>{
//             this.setState({
//                 loading: false,
//                 character:data
//             })
//         } )
//     }

//     render(){
//         const text = this.state.loading ? "loading" : this.state.character.name
//         return(
//             <div>
//                 {text}
//             </div>
//         );
//     }
// }


// class App extends Component{
//     constructor(){
//         super();
//         this.state ={
//             todos: object
//         };
//         this.method = this.method.bind(this);
//     }
//     method(id){
//       this.setState(prevState =>{
//           const updateTodos = prevState.todos.map(todo =>{
//               if(todo.id === id){
//                   todo.completed = !todo.completed;
//               }
//               return todo;
//           })
//           return {
//               todos: updateTodos
//           }
//       })
//     }
//    render(){
//        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} 
//        method = {this.method}/>);
//        return(
//            <div className ="todo-list">
//                {todoItems}
//             </div>
//        )
//    }
// }

// class Heading extends React.Component{
//     render(){
//         return(
//             <header>
//             <p>Welcome {this.props.username}</p>    
//             </header>
//         )
//     }
// }

// class Greeteng extends React.Component{
//     render(){
//         const date = new Date();
//         const hours = date.getHours();
//         let timeOfDay;
//         if(hours < 12){
//             timeOfDay = 'morging';
//         }
//         if(hours > 12 && hours < 17){
//             timeOfDay = 'afternoon';
//         }
//         if(hours > 17){
//             timeOfDay = 'evening';
//         }
//         return <h1>Good {timeOfDay} sir</h1>;
//     }
// }
export default Home;