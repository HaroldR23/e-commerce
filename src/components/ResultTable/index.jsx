import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { Card } from './Card'
import { Modal } from '../Modal'
import './ResultTable.css'

function ResultTable () {
    const {
        searchedProducts,
        isLoading,
        isOpen,
        isFilteringByCategory,
        isFilteringByRate,
        filteredProducts
      } = useContext(SearchContext);

      return (
        <div className='ResultContainer'>
            <h2>Results:</h2>
            <div className='CardResultsContainer'>
                {   isLoading ?
                    <span className="loader"></span>
                    :
                    ((isFilteringByCategory ||  isFilteringByRate) ? 
                        filteredProducts?.map((product, index) => 
                            <Card
                                key={index}
                                image = {product.image}
                                title = {product.title}
                                price = {product.price}
                                description = {product.description}
                                rate = {Math.round(product.rating.rate)}
                            />
                    ) : searchedProducts?.map((product, index) => 
                        <Card
                            key={index}
                            image = {product.image}
                            title = {product.title}
                            price = {product.price}
                            description = {product.description}
                            rate = {Math.round(product.rating.rate)}
                        />
                    ))
                }
            </div>
            {isOpen && <Modal />}
        </div>
    )
}

export { ResultTable }
