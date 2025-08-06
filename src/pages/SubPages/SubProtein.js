// ------------------------ React
import React, { useState } from 'react';


// ------------------------ Router
import { Link } from 'react-router-dom';


// ------------------------ Redux
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';


// ------------------------ 외부 라이브러리
import styled from 'styled-components';
import { TitleDiv, CartButton, ContentBox } from '../../components/StyledComponent'
import { Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

// ------------------------ Data & Components
import { products } from '../../data/subData';


export default function SubProtein() {

  const [subProtein] = useState(products.filter(item => item.category.includes('protein')));
  
  const dispatch = useDispatch();
  const notify = () => toast("장바구니에 추가되었습니다.");

  return (
    <div>
      <Container style={{width: '1048px', margin: '100px auto'}}>
        <TitleDiv>
          <p>단백질바</p>
        </TitleDiv>
        <Row
          style={{display: 'flex'}}
        >
          {
            subProtein.map((protein, index) => {
              return (
                <Col
                  key={protein.id}
                  lg={4}
                >
                    <ContentBox style={{width: '342px'}}>
                      <Link to={`/details/products/${protein.id}`}>
                        <img src={protein.image} style={{width: '342px', marginBottom: '10px'}} />
                        <span className='title'>{protein.title}</span>
                        <span className='price'>{protein.price.toLocaleString() + '원'}</span>
                      </Link>
                    </ContentBox>
                    <CartButton
                      onClick={() => {
                        notify();
                        dispatch(addItem({
                          id: protein.id, 
                          title: protein.title, 
                          image: protein.image,
                          count: 1,
                          price: protein.price,
                        }))
                      }}
                    style={{width: '342px'}}
                    >
                      <FontAwesomeIcon icon={faCartShopping} style={{paddingRight: '5px'}} />
                      장바구니에 담기
                    </CartButton>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}
