import { useEffect, useState } from 'react';
import { Block } from '../components/Block';
import '../styles/converter.scss';

function Converter() {
    const [fromCurrency, setFromCurrency] = useState('UZS')
    const [toCurrency, setToCurrency] = useState('USD')
    const [fromPrice, setFromPrice] = useState('')
    const [toPrice, setToPrice] = useState('')
    const [rates, setRates] = useState({})
    useEffect(()=> {
        fetch('https://photos-0mmf.onrender.com/rates')
        .then(res => res.json())
        .then(json => {
          setRates(json)
        })
        .catch(err => {
          console.warn(err);
        })
    }, [])
    const onChangeFromPrice = (value) => {
      const price = value / rates[fromCurrency]
      const result = price * rates[toCurrency]
      setToPrice(result)
      setFromPrice(value);
    }
    const onChangeToPrice = (value) => {
      const result = (rates[fromCurrency] / rates[toCurrency]) * value
      setFromPrice(result)
      setToPrice(value);
    }
 
  
  return (
    <div className="Converter">
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice}/>
      <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={ onChangeToPrice}/>
    </div>
  );
}

export default Converter;