import React, { Component } from 'react'
import styled from 'styled-components'
import { FaDolly, FaRedo, FaDollarSign } from 'react-icons/fa'


export default class Services extends Component {
    state={
        services:[
            {
                id:1,
                icon:<FaDolly/>,
                title:'free shipping',
                text:
                "The pain itself is important to the main iterative elite. Whom we accuse"
            },
            {
                id:2,
                icon:<FaRedo/>,
                title:'30 Days return policy',
                text:
                "The pain itself is important to the main iterative elite. Whom we accuse"
            },
            {
                id:3,
                icon:<FaDollarSign/>,
                title:'secured payment',
                text:
                "The pain itself is important to the main iterative elite. Whom we accuse"
            }
        ]
    }
    render() {
        return (
            <ServiceWrapper className="py-5">
                <div className="container">
                    <div className="row">
                        {this.state.services.map(item=>{
                            return(
                                <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={item.id}>
                                    <div className="service-icon">
                                        {item.icon}
                                    </div>
                                    <div className="mt-3 text-capitalize">
                                        {item.title}
                                    </div>
                                    <div className="mt-3">
                                        <p>
                                            {item.text}
                                        </p>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </ServiceWrapper>
        )
    }
}

const ServiceWrapper = styled.section`
background: rgba(95,183,234,0.5);
.service-icon{
    font-size: 2.5rem;
    color: var(--primaryColor);
}
p{
    color: var(--darkGrey);
}
`;