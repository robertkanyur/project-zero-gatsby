import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { withPreview } from "gatsby-source-prismic-graphql"
import { RichText } from "prismic-reactjs"

import thankYouStyles from "./thank-you.module.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Block from "../components/block"
import Button from "../components/button"

import heroPhoto from "../images/thank-you-hero.jpg"

const renderThankYouPage = data => {
  return (
    <>
      <Helmet>
        <title>
          {
            data.prismic.allPage_thank_yous.edges.slice(0, 1).pop().node
              .page_title
          }
        </title>
      </Helmet>
      <Layout>
        <>
          <Hero
            title={
              data.prismic.allPage_thank_yous.edges.slice(0, 1).pop().node
                .header_text
            }
            photo={heroPhoto}
          ></Hero>
          <Block>
            <div className={thankYouStyles.lead + " is-1"}>
              <p className="is-1 is-centered">
                {RichText.render(
                  data.prismic.allPage_thank_yous.edges.slice(0, 1).pop().node
                    .paragraph
                )}
              </p>
              <Button width="167px" link="/" text="Home Page" />
            </div>
          </Block>
          <Footer></Footer>
        </>
      </Layout>
    </>
  )
}

export const thankYouPage = () => {
  return (
    <>
      <StaticQuery
        query={query}
        render={withPreview(renderThankYouPage, query)}
      />
    </>
  )
}

export default thankYouPage

const query = graphql`
  {
    prismic {
      allPage_thank_yous(uid: "thank-you-contact") {
        edges {
          node {
            paragraph
            page_title
            header_text
          }
        }
      }
    }
  }
`
