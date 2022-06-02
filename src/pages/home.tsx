import React from 'react'
import { NextPage } from 'next'
import Layout from '~/layouts/Layout'
import HomeLayout from '~/layouts/HomeLayout'
import { authProtected } from '~/utils/auth-protected'

const Home: NextPage = () => {
  return (
    <Layout metaHead="Home">
      <HomeLayout className="p-10">
        {' '}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt
        quidem impedit delectus nisi quasi eius odit ipsum recusandae rem sequi
        iste, non alias porro officiis illo ad, quisquam sint! Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Quam incidunt quidem
        impedit delectus nisi quasi eius odit ipsum recusandae rem sequi iste,
        non alias porro officiis illo ad, quisquam sint! Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Quam incidunt quidem impedit delectus
        nisi quasi eius odit ipsum recusandae rem sequi iste, non alias porro
        officiis illo ad, quisquam sint! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Quam incidunt quidem impedit delectus nisi quasi eius
        odit ipsum recusandae rem sequi iste, non alias porro officiis illo ad,
        quisquam sint! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quam incidunt quidem impedit delectus nisi quasi eius odit ipsum
        recusandae rem sequi iste, non alias porro officiis illo ad, quisquam
        sint! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
        incidunt quidem impedit delectus nisi quasi eius odit ipsum recusandae
        rem sequi iste, non alias porro officiis illo ad, quisquam sint! Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt quidem
        impedit delectus nisi quasi eius odit ipsum recusandae rem sequi iste,
        non alias porro officiis illo ad, quisquam sint! Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Quam incidunt quidem impedit delectus
        nisi quasi eius odit ipsum recusandae rem sequi iste, non alias porro
        officiis illo ad, quisquam sint! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Quam incidunt quidem impedit delectus nisi quasi eius
        odit ipsum recusandae rem sequi iste, non alias porro officiis illo ad,
        quisquam sint! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quam incidunt quidem impedit delectus nisi quasi eius odit ipsum
        recusandae rem sequi iste, non alias porro officiis illo ad, quisquam
        sint! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
        incidunt quidem impedit delectus nisi quasi eius odit ipsum recusandae
        rem sequi iste, non alias porro officiis illo ad, quisquam sint! Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt quidem
        impedit delectus nisi quasi eius odit ipsum recusandae rem sequi iste,
        non alias porro officiis illo ad, quisquam sint! Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Quam incidunt quidem impedit delectus
        nisi quasi eius odit ipsum recusandae rem sequi iste, non alias porro
        officiis illo ad, quisquam sint! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Quam incidunt quidem impedit delectus nisi quasi eius
        odit ipsum recusandae rem sequi iste, non alias porro officiis illo ad,
        quisquam sint! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quam incidunt quidem impedit delectus nisi quasi eius odit ipsum
        recusandae rem sequi iste, non alias porro officiis illo ad, quisquam
        sint! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
        incidunt quidem impedit delectus nisi quasi eius odit ipsum recusandae
        rem sequi iste, non alias porro officiis illo ad, quisquam sint! Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt quidem
        impedit delectus nisi quasi eius odit ipsum recusandae rem sequi iste,
        non alias porro officiis illo ad, quisquam sint! Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Quam incidunt quidem impedit delectus
        nisi quasi eius odit ipsum recusandae rem sequi iste, non alias porro
        officiis illo ad, quisquam sint! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Quam incidunt quidem impedit delectus nisi quasi eius
        odit ipsum recusandae rem sequi iste, non alias porro officiis illo ad,
        quisquam sint! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quam incidunt quidem impedit delectus nisi quasi eius odit ipsum
        recusandae rem sequi iste, non alias porro officiis illo ad, quisquam
        sint! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
        incidunt quidem impedit delectus nisi quasi eius odit ipsum recusandae
        rem sequi iste, non alias porro officiis illo ad, quisquam sint!
      </HomeLayout>
    </Layout>
  )
}

export default authProtected(Home)
