import React, { Component } from 'react';
import QRCode from 'qrcode';
import QrReader from 'react-qr-scanner';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 'Loading...',
      url: null
    }
    this.handleScan = this.handleScan.bind(this)
  }

  componentDidMount() {
    this.generateQRCode();
  }

  generateQRCode() {
    QRCode.toDataURL('http://www.kaniyam.com/qrcode')
      .then(url => this.setState({ url }))
      .catch(err => console.error(err))
  }

  handleScan(data){
    this.setState({
      result: data
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.url} alt='qr-code'/>
          <QrReader
            delay={100}
            style={{ height: 240, width: 320 }}
            onError={(err) => console.error(err)}
            onScan={this.handleScan}
          />
          <p>{this.state.result}</p>
        </header>
      </div>
    );
  }
}

export default App;
