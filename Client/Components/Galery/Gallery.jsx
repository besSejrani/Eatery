import React from 'react';
import { Section } from '../Section';
import { styles } from '../../utils';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

//===================================================================================

const getData = graphql`{
  getImages: allFile(filter: {relativeDirectory: {eq: "homeGallery"}}) {
    edges {
      node {
        id
        childImageSharp {
          gatsbyImageData(width: 500, placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
}
`;

export const Gallery = () => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        const images = data.getImages.edges;
        return (
          <Section>
            <GalleryWrapper>
              {images.map(({ node }, index) => {
                return (
                  <div key={index} className={`item item-${index + 1}`}>
                    <GatsbyImage image={node.childImageSharp.gatsbyImageData} />
                    <p className="info">awesome pizza</p>
                  </div>
                );
              })}
            </GalleryWrapper>
          </Section>
        );
      }}
    />
  );
};

//===================================================================================

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    color: ${styles.colors.mainWhite};
    background: ${styles.colors.mainYellow};
    padding: 5px;
    text-transform: capitalize;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      'one one two two'
      'one one three three';
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`;
