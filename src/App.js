import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InteractiveBar from './components/InteractiveBar/InteractiveBar';
import Interface from './components/Interface/Interface';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
    this.dispatch = this.props.dispatch;
  }

  render() {
    return (
        <div className="App">
          <Header state={this.state.header} />
          <main>
            <BrowserRouter>
              <InteractiveBar state={this.state.interactive} />  
              <Routes>
                <Route
                  exact path="/"
                  element={ 
                      <Interface 
                        state={this.state.interface} 
                        taskStatusInterface={this.state.interface.taskStatusInterface.toDo} 
                        status='complete' 
                        dispatch={this.dispatch}
                        key={'complete'}                     
                      /> 
                    }
                />
                <Route
                  exact path="/done"
                  element={ 
                    <Interface 
                      state={this.state.interface} 
                      taskStatusInterface={this.state.interface.taskStatusInterface.done} 
                      status='done' 
                      dispatch={this.dispatch}
                      key={'done'}                   
                    /> 
                  }
                />
                <Route
                  exact path="/delete"
                  element={ 
                    <Interface 
                      state={this.state.interface} 
                      taskStatusInterface={this.state.interface.taskStatusInterface.deleted} 
                      status='delete' 
                      dispatch={this.dispatch}
                      key={'delete'} 
                    /> 
                  }
                />
              </Routes>
            </BrowserRouter>
          </main>
          <Footer state={this.state.footer} />
        </div>
    );

    }

}

export default App;