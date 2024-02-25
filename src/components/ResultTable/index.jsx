import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { Card } from './Card'
import { Modal } from '../Modal'
import './ResultTable.css'
import { CartList } from '../Cart/CartList';

function ResultTable () {
    const fourGridTemplateColumns = "250px 250px 250px 250px";
    const threeGridTemplateColumns = "250px 250px 250px";

    const {
        searchedProducts,
        isLoading,
        isOpen,
        isFilteringByCategory,
        isFilteringByRate,
        filteredProducts,
        isCartOpen,
      } = useContext(SearchContext);
      console.log(searchedProducts)
      useEffect(() => {
          const cardResultsContainer = document.querySelector(".CardResultsContainer");
        if (isCartOpen) cardResultsContainer.style.gridTemplateColumns = threeGridTemplateColumns;
        else cardResultsContainer.style.gridTemplateColumns = fourGridTemplateColumns;
      }, [isCartOpen]);

      return (
        <div className='ResultContainer'>
            <h2>Results:</h2>
            <div className='CardResultsAndCartContainer'>

                <div className='CardResultsContainer'>
                    {   isLoading ?
                        <span className="loader"></span>
                        :
                        ((isFilteringByCategory || isFilteringByRate) ? 
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
                {isCartOpen && <CartList />}
            </div>
        </div>
    )
}

export { ResultTable }
