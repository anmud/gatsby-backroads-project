import React from 'react'
import {graphql} from 'gatsby'

const Template = ({data}) => {

const {name, price, country, days, description:{description}, images, start, journey} = data.tour

    return (
     <div>{data.tour.name}</div>
    )
}

export const query = graphql`
query($slug:String){
  tour:  contentfulTour(slug:{eq: $slug}){
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description{
        description
      }
      journey{
        day
        info
      }
      images{
        fluid{
          src
        }
      }
    }
  }
`

export default Template;