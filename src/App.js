

import { Component } from 'react';
import PhoneForm from './component/PhoneForm';
import PhoneInfoList2 from './component/PhoneInfoList2';

class App extends Component {

  id = 0;

  state = {
    information: [
      {
        id: 100000,
        name: '홍길동',
        phone: '123123213'
      }, {
        id: 100001,
        name: '김길ㄷ2',
        phone: '123123213'
      }, {
        id: 100003,
        name: '박길동3',
        phone: '123123213'
      }
    ],
    keyword: '',
  }
  handlechange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }
  handleCreate = (data) => {
    const { information } = this.state;

    this.setState({
      //information: information.concat({ ...data, id: this.id++ })
      information: information.concat(Object.assign({}, data, { id: this.id++ }))
    })

  }
  handleremove = (id) => {
    const { information } = this.state;

    this.setState({
      information: information.filter(info => info.id !== id)
    })

  }
  handleupdate = (id, data) => {
    const { information } = this.state;

    this.setState({
      information: information.map(
        info => {
          if (info.id === id) {
            return {
              id,
              ...data
            }
          }
          return info;
        }
      )
    })

  }
  render() {
    console.log(this.state.keyword)
    return (
      <div>

        <PhoneForm onCreate={this.handleCreate} />
        <input value={this.state.keyword} onChange={this.handlechange} placeholder="검색" />
        <PhoneInfoList2 data={this.state.information.filter(
          info => info.name.indexOf(this.state.keyword) > -1
        )} onRemove={this.handleremove} onUpdate={this.handleupdate} />

      </div >
    );
  }
}

export default App;
