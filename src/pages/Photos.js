import { useState } from 'react';
import Collection from '../components/Collection';
import '../styles/photos.scss'
import { useEffect } from 'react';

  
  function Photos() {
    const [page, setPage] = useState(1)
    const [collections, setCollections] = useState([])
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)
    const [searchValue, setSearchValue] = useState('')
    const categoryId = activeCategory ? `category=${activeCategory}` : ''
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
      setIsLoading(true)
      fetch(`https://photos-0mmf.onrender.com/collections?${categoryId}&_page=${page}&_limit=3`).then(res=>res.json()).then(json => {
        setCollections(json)
      }).catch(err => {
        console.warn(err);
        
      }).finally(()=> setIsLoading(false))
  
      fetch('https://photos-0mmf.onrender.com/categories').then(res=>res.json()).then(json => {
        setCategories(json)
      }).catch(err => {
        console.warn(err);
        
      })
    },[activeCategory, categoryId, page])
    return (
      <div className="Photos">
        <h1>Моя коллекция фотографий</h1>
        <div className="top">
          <ul className="tags">
            {
              categories.map((category,i) => (
                <li key={i} onClick={() => setActiveCategory(i)} className={activeCategory === i ? 'active' : ''}>{category.name}</li>
              ))
            }
          </ul>
          <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className="search-input" placeholder="Поиск по названию" />
        </div>
        <div className="content">
          
          {isLoading ? <h2>Loading...</h2>
           : collections
           .filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
           .map((collection, i) => (
             <Collection
             key={i}
             name={collection.name}
             images={collection.photos}
           />
           )) 
         }
        </div>
        <ul className="pagination">
         {searchValue || activeCategory !== 0 
            ?
          ![...Array(3)].map((_,i)=> (
          <li key={i} onClick={() => setPage(i+1)} className={page === i+1 ? 'active' : ''}>{i+1}</li>
         )) : 
         [...Array(3)].map((_,i)=> (
          <li key={i} onClick={() => setPage(i+1)} className={page === i+1 ? 'active' : ''}>{i+1}</li>
         ))
         }
        </ul>
      </div>
    );
  }
  
  export default Photos;
